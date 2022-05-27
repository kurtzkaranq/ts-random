import React from "react";

export interface User {
  name: {
    first: string;
    last: string;
  };
  cell: string;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    country: string;
    city: string;
    street: {
      name: string;
    };
  };
  login: {
    password: string;
  };
  gender: string;
}

export type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export type selectType =
  | "name"
  | "email"
  | "calendar"
  | "address"
  | "phone"
  | "lock";
