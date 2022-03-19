import React, { useReducer } from 'react';
import alertReducer from './AlertReducer';


type AlertType = {
  msg: string,
  type: string
};
export type AlertStateType = {
  alert?: AlertType | null,
  setAlert: (msg: string, type: string) => void
};




const initialState: AlertStateType = {
  alert: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAlert: () => { }
};

const AlertContext = React.createContext<AlertStateType>(initialState);

export const AlertProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set an alert
  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        alert: {
          msg,
          type
        }
      },
    });
    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  return (
    <AlertContext.Provider
      value={{
        ...state,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
