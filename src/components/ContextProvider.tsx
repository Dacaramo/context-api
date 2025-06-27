'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type ContextProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const Context = createContext<ContextProps | null>(null);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
