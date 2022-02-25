import { createContext, useEffect, useState, useContext } from "react";
import { getAuth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import nookies from 'nookies';
import { auth } from '../firebaseClient';

const AuthContext = createContext<{ user: firebase.UserInfo | null, login(): void, logout(): void }>({
    user: null,
    login: () => { },
    logout: () => { }
});

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<firebase.UserInfo | null>(null);

    const provider = new FacebookAuthProvider();

    const login = () => {
        console.log('login')
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                console.log({ credential, token, user });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                console.log({ errorCode, errorMessage, email, credential });
            });
    };

    const logout = () => {
        // const auth = getAuth();
        auth.signOut();
        console.log("logout");
    };

    useEffect(() => {
        // const auth = getAuth()
        return auth.onIdTokenChanged(async (user) => {
            if (!user) {
                setUser(null);
                nookies.set(undefined, 'token', '', { path: '/' });
            } else {
                const token = await user.getIdToken();
                setUser(user);
                nookies.set(undefined, 'token', token, { path: '/' });
            }
        })
    }, []);

    useEffect(() => {
        const renew = setInterval(async () => {
            const user = auth.currentUser;
            if (user) await user.getIdToken(true);
        }, 10 * 60 * 1000)
        return () => clearInterval(renew);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
