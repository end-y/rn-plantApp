import React, { createContext, useContext, ReactNode } from 'react';
import { ColorsContextProps, ThemeColors } from '../Types/Colors';



export const ColorsContext = createContext<ColorsContextProps | undefined>(undefined);

export const useColorsContext = () => {
  const context = useContext(ColorsContext);
  if (context === undefined) {
    throw new Error('useColorsContext must be used within a ColorsProvider');
  }
  return context;
};

export const ColorsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [colors, setColors] = React.useState<ThemeColors>({
    colorMain: '#fff',
    textColorSlider: '#13231B',
    greenButtonColor: '#28AF6E',
    linkColor:"rgba(89, 113, 101, 0.70)",
    pointBlack:"#13231B",
    pointGray:"rgba(19, 35, 27, 0.25)",
    whiteOpaq:"rgba(255, 255, 255, 0.52)",
    lightYellow:"#E5C990",
    mailBrown:"#24201A"
  });

  const toggleColorScheme = () => {
    setColors((prevColors) => ({
        ...prevColors,
        colorMain: prevColors.colorMain === '#fff' ? '#dedede' : '#fff',
        textColorSlider: '#13231B',
        greenButtonColor: '#28AF6E',
        linkColor:"rgba(89, 113, 101, 0.70)",
        pointBlack:"#13231B",
        pointGray:"rgba(19, 35, 27, 0.25)",
        whiteOpaq:"rgba(255, 255, 255, 0.52)",
        lightYellow:"#E5C990",
        mailBrown:"#24201A"
    }));
  };

  return (
    <ColorsContext.Provider value={{ colors, toggleColorScheme }}>
      {children}
    </ColorsContext.Provider>
  );
};