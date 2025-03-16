import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext(); // Create context

const AppContextProvider = (props) => {
  const url = 'https://hospital-x-backend.onrender.com'
  const currencySymbol = '$'
  const value = {
    doctors,
    currencySymbol, url
  };

  return (
    // Use AppContext.Provider to provide the value
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
