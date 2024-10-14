import   { createContext, useContext, useState, FC, ReactNode } from 'react';

// Define the shape of the context state
interface AuthContextProps {
  isLogin: boolean;
  authorized: boolean;
  authError: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  clearError: () => void;
}

// Create the context with default values
const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

// Provider component that will wrap the app
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    // Mock login logic
    if (email === 'user@example.com' && password === 'password123') {
      setIsLogin(true);
      setAuthorized(true);
      setAuthError(null);
    } else {
      setAuthError('Invalid credentials');
    }
  };

  const logout = () => {
    setIsLogin(false);
    setAuthorized(false);
  };

  const clearError = () => {
    setAuthError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        authorized,
        authError,
        login,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
