'use client';

import GlobalAlertContextProvider, {
  useGlobalAlertContext,
} from '@/components/GlobalAlertProvider';
import { BTN_CLASSES, H1_CLASSES } from '@/constants';

const page = () => {
  return (
    <GlobalAlertContextProvider>
      <h1 className={H1_CLASSES}>
        Generar alerta global desde cualquier componente
      </h1>
      <InfoAlertButton />
      <SuccessAlertButton />
      <ErrorAlertButton />
      <WarningAlertButton />
      <RemoveAlertButton />
    </GlobalAlertContextProvider>
  );
};

const InfoAlertButton = () => {
  const setAlert = useGlobalAlertContext();
  return (
    <button
      onClick={() =>
        setAlert({ type: 'alert-info', text: 'Esta es una alerta informativa' })
      }
      className={BTN_CLASSES}
    >
      Generar alerta informativa
    </button>
  );
};

const SuccessAlertButton = () => {
  const setAlert = useGlobalAlertContext();
  return (
    <button
      onClick={() =>
        setAlert({ type: 'alert-success', text: 'Esta es una alerta de éxito' })
      }
      className={BTN_CLASSES}
    >
      Generar alerta de éxito
    </button>
  );
};

const ErrorAlertButton = () => {
  const setAlert = useGlobalAlertContext();
  return (
    <button
      onClick={() =>
        setAlert({ type: 'alert-error', text: 'Esta es una alerta de error' })
      }
      className={BTN_CLASSES}
    >
      Generar alerta de error
    </button>
  );
};

const WarningAlertButton = () => {
  const setAlert = useGlobalAlertContext();
  return (
    <button
      onClick={() =>
        setAlert({
          type: 'alert-warning',
          text: 'Esta es una alerta de advertencia',
        })
      }
      className={BTN_CLASSES}
    >
      Generar alerta de advertencia
    </button>
  );
};

const RemoveAlertButton = () => {
  const setAlert = useGlobalAlertContext();
  return (
    <button
      onClick={() => setAlert(null)}
      className={BTN_CLASSES}
    >
      Eliminar alerta
    </button>
  );
};

export default page;
