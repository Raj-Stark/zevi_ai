import React, { useContext, useReducer } from "react";
import { AppReducer } from "../reducer/AppReducer";

const AppContext = React.createContext();

const AppState = {
  counter: 0,
   isModalOpen: false,
   allProducts:[],
};

export const FashionContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, AppState);



  const showModal = (value) => {
    dispatch({ type: "SHOW_MODAL_AND_FETCH_DATA" , payload:value });
  };

  return (
    <AppContext.Provider value={{ ...state, showModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
