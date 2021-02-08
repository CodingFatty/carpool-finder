import { useState, useEffect } from 'react';
import { AuthContext } from './context';
import MenuBar from './MenuBar';
import Main from './Main';

let logoutTimer;

export default function App() {
  const [token, setToken] = useState(null);
  const [tokenExp, setTokenExp] = useState();
  
  const login = (token, expiredTime) => {
    setToken(token);
    setTokenExp(expiredTime)

    localStorage.setItem(
      'cpUserData',
      JSON.stringify({
        token,
        expiredTime: expiredTime
      })
    );
  }
  const logout = () => {
    setToken(null);
    setTokenExp(null);
    localStorage.removeItem('cpUserData');
  }

  useEffect(() => {
    const storedLocalData = JSON.parse(localStorage.getItem('cpUserData'));

    if (storedLocalData && storedLocalData.token && new Date(storedLocalData.expiredTime) > new Date()) {
      console.log(new Date(storedLocalData.expiredTime))
      login(storedLocalData.token, storedLocalData.expiredTime)
    }
  }, [token]);

  useEffect(() => {
    if (token && tokenExp) {
      const expiringTime = tokenExp - new Date().getTime()
      logoutTimer = setTimeout(logout, expiringTime)
    } else {
      clearTimeout(logoutTimer)
    }
  }, [token, tokenExp])

  return (
    <AuthContext.Provider value={{ isLogged: !!token, login: login, logout: logout }}>
      <MenuBar />
      <Main />
    </AuthContext.Provider >
  );
}

