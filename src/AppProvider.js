import React, { createContext, useState } from "react";
import Product from "./products.json";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);
  const state = {
    productList: Product?.products,
    compareList,
    setCompareList,
  };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
