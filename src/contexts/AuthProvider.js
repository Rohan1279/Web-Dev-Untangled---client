import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
export const Authcontext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const user = { name: "Rohan" };
  const authInfo = { user };
  return (
    <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
