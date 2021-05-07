import React,{createContext, useState} from 'react';

export const ViewContext = createContext();

export const ViewContextProvider = ({children}) => {
  const [viewCash, setViewCash] = useState(false);

  return (
    <ViewContext.Provider value={{viewCash, setViewCash}}>
      {children}
    </ViewContext.Provider>
  );
};
