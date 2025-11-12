import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("session");
        return storedUser ? JSON.parse(storedUser) : null;
    }   );

    const login = (name, password) => {
        if (name === "admin" && password === "1234") {
            const session = { name };
            setUser(session);
            localStorage.setItem("session", JSON.stringify(session));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("session");
    };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider