/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUser() {
const context = useContext(UserContext)
return context
}  
  

export function UserContextProvider({ children }) {
  const [user, setUser] = useState("tommy");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
