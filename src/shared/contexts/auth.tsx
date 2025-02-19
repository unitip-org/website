import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/local-storage";

export interface Session {
  id: string;
  email: string;
  token: string;
}

export interface AuthContextType {
  session: Session | undefined;

  save: () => void;
  clear: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [session, setSession] = useLocalStorage<Session | undefined>(
    "session",
    undefined
  );

  console.log({ session });

  const save = () => {
    console.log("login called");
    setSession({
      id: "iduser",
      email: "user@unitip.com",
      token: "token1234",
    });
  };

  const clear = () => {
    console.log("logout called");
    setSession(undefined);
  };

  return (
    <AuthContext.Provider value={{ session, save, clear }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
