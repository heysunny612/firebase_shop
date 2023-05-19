import { createContext, useContext, useState, useEffect } from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
