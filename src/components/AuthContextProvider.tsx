'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type User = {
  name: string;
  email: string;
  imageUrl: string;
};

type ContextProps = {
  user: User | null;
  isUserLoading: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<ContextProps | null>(null);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<ContextProps['user']>(null);
  const [isUserLoading, setIsUserLoading] = useState<boolean>(false);

  const login = () => {
    setIsUserLoading(true);
    setTimeout(() => {
      setUser({
        name: 'Ana',
        email: 'anadearmas@gmail.com',
        imageUrl:
          'https://hips.hearstapps.com/hmg-prod/images/ana-de-armas-arrives-at-the-vanity-fair-oscar-party-hosted-news-photo-1740776729.pjpeg?crop=1xw:0.55225xh;center,top&resize=1200:*',
      });
      setIsUserLoading(false);
    }, 2000);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isUserLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const data = useContext(AuthContext);

  if (!data) {
    throw new Error(
      'Solo puedes llamar a useAuthContext dentro de un AuthContextProvider'
    );
  }

  return data;
};

export default AuthContextProvider;
