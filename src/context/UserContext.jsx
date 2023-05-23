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
    <UserContext.Provider
      value={{ user, uid: user && user.uid, setUser, isGettingUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
