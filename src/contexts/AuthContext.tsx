import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, firstName: string, lastName: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const isAuthenticated = !!currentUser;

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('user');
    }
  }, [currentUser]);

  const login = (email: string, password: string) => {
    // In a real app, this would make an API call to authenticate
    // For demo purposes, we'll just create a mock user
    if (email && password) {
      const user: User = {
        id: 'user-1',
        email,
        firstName: 'Demo',
        lastName: 'User'
      };
      setCurrentUser(user);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const register = (email: string, password: string, firstName: string, lastName: string) => {
    // In a real app, this would make an API call to register the user
    // For demo purposes, we'll just create a mock user
    if (email && password && firstName && lastName) {
      const user: User = {
        id: 'user-' + Date.now(),
        email,
        firstName,
        lastName
      };
      setCurrentUser(user);
    } else {
      throw new Error('Invalid registration data');
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      login, 
      register, 
      logout,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
};