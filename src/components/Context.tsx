import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactElement,
} from "react";
import React from "react";
import { User, UserContextType } from "./type/type";

const initial = {
  users: [],
  setUsers: () => {},
};

const UserContext = createContext<UserContextType>(initial);

export function useUser() {
  return useContext(UserContext);
}

const UserProvider: any = ({ children }: any) => {
  const [users, setUsers] = useState<User[] | any>([]);
  useEffect(() => {
    if (localStorage.getItem("users")) {
      setUsers(JSON.parse(localStorage.getItem("users") || "[]"));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
