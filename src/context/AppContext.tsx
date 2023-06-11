// DEPENDENCIES
import React, { createContext, useState } from "react";
// TYPES
import { ElementType } from "../types";
import { elements } from "../assets/elements";

interface AppContextType {
  filters: ElementType;
  setFilters: React.Dispatch<React.SetStateAction<ElementType>>;
  resetFilters: Function;
  displayValues: string[];
  elements: ElementType[];
}

const AppContext = createContext<AppContextType>({
  filters: { country: "all", version: "all", text: "" },
  setFilters: () => {},
  resetFilters: () => {},
  displayValues: [],
  elements: [],
});

export const AppProvider = ({ children, ...props }: { children: JSX.Element }) => {
  const initialState: ElementType = {
    country: "all",
    version: "all",
    text: "",
  };
  const [filters, setFilters] = useState(initialState);
  const displayValues: string[] = ["country", "version"];

  const resetFilters = () => setFilters({ ...initialState });

  return (
    <AppContext.Provider value={{ filters, setFilters, resetFilters, displayValues, elements }} {...props}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext must be used within a AppProvider`);
  }
  return context;
};
