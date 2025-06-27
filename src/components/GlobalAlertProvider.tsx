'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type Alert = {
  type: 'alert-info' | 'alert-success' | 'alert-warning' | 'alert-error';
  text: string;
};

type ContextProps = {
  alert: Alert | null;
  setAlert: Dispatch<SetStateAction<Alert | null>>;
};

export const GlobalAlertContext = createContext<ContextProps | null>(null);

const GlobalAlertContextProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<ContextProps['alert']>(null);

  return (
    <GlobalAlertContext.Provider value={{ alert, setAlert }}>
      {alert !== null && (
        <div className={`absolute bottom-10 right-10 alert ${alert.type}`}>
          {alert.text}
        </div>
      )}
      {children}
    </GlobalAlertContext.Provider>
  );
};

export const useGlobalAlertContext = () => {
  const data = useContext(GlobalAlertContext);

  if (!data) {
    throw new Error(
      'Solo puedes llamar a useGlobalAlertContext dentro de un GlobalAlertContextProvider'
    );
  }

  return data.setAlert;
};

export default GlobalAlertContextProvider;
