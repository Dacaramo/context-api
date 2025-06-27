'use client';

import { BTN_CLASSES, H1_CLASSES } from '@/constants';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type ContextProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

const Context = createContext<ContextProps | null>(null);

const page = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Context.Provider value={{ count, setCount }}>
      <h1 className={H1_CLASSES}>Uso incorrecto ❌</h1>
      <A />
      <B />
    </Context.Provider>
  );
};

const A = () => {
  const { count, setCount } = useContext(Context)!;

  console.log('Renderizando A...');

  return (
    <button
      onClick={() => setCount(count + 1)}
      className={BTN_CLASSES}
    >
      Esto está en el componente A
    </button>
  );
};

const B = () => {
  console.log('Renderizando B...');
  return <span>Esto está en el componente B</span>;
};

export default page;
