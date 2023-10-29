import React, { createContext, useState } from 'react';
export const ActiveIndexContext = createContext<{ activeIndex: number, setActiveIndex: (newValue: number) => void } | any>(undefined);

export const ActiveIndexProvider: React.FC = ({ children }:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const setActiveIndexValue = (newValue: number) => {
    setActiveIndex(newValue);
  };

  return (
    <ActiveIndexContext.Provider value={{ activeIndex, setActiveIndex: setActiveIndexValue }}>
      {children}
    </ActiveIndexContext.Provider>
  );
};