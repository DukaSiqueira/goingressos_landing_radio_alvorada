import { createContext } from "react";

const AuthContext = createContext<AuthContextType>({
    token: "",
    setToken: () => { },
    user: null,
    setUser: () => { },
});

export default AuthContext;