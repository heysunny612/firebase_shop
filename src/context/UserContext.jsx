import { createContext, useContext, useState, useEffect } from 'react';
import { authStateObserver } from '../api/firebase';
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isGettingUser, setIsGettingUser] = useState(false);
  useEffect(() => {
    authStateObserver(setUser, setIsGettingUser);
  }, [setUser]);
  return (
    <UserContext.Provider value={{ user, setUser, isGettingUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
