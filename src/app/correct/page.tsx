'use client';

import ContextProvider, { Context } from '@/components/ContextProvider';
import { BTN_CLASSES, H1_CLASSES } from '@/constants';
import { useContext } from 'react';

const page = () => {
  return (
    <ContextProvider>
      <h1 className={H1_CLASSES}>Uso correcto ✅</h1>
      <A />
      <B />
    </ContextProvider>
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
