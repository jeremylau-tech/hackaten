// TextContext.js
import { createContext, useContext, useState } from 'react';

const TextContext = createContext();

export const TextProvider = ({ children }) => {
  const [generatedText, setGeneratedText] = useState('');

  const updateGeneratedText = (text) => {
    setGeneratedText(text);
  };

  return (
    <TextContext.Provider value={{ generatedText, updateGeneratedText }}>
      {children}
    </TextContext.Provider>
  );
};

export const useTextContext = () => {
  return useContext(TextContext);
};

