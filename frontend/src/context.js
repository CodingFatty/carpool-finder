import { createContext } from 'react'

export const AuthContext = createContext({
    isLogged: false,
    token: null,
    login: () => { },
    logout: () => { }
});