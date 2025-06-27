import { BTN_CLASSES, H1_CLASSES, SECTION_CLASSES } from '@/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className={H1_CLASSES}>Ejemplos de Context API</h1>
      <section className={SECTION_CLASSES}>
        <Link
          href='/incorrect'
          className={BTN_CLASSES}
        >
          Uso incorrecto ❌
        </Link>
        <Link
          href='/correct'
          className={BTN_CLASSES}
        >
          Uso correcto ✅
        </Link>
        <Link
          href='/authentication'
          className={BTN_CLASSES}
        >
          Obtener usuario autenticado en cualquier componente
        </Link>
        <Link
          href='/global-alert'
          className={BTN_CLASSES}
        >
          Generar alerta global desde cualquier componente
        </Link>
      </section>
    </>
  );
}
