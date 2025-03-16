import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext(); // Create context

const AppContextProvider = (props) => {

  const currencySymbol = '$'
  const value = {
    doctors,
    currencySymbol
  };

  return (
    // Use AppContext.Provider to provide the value
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
