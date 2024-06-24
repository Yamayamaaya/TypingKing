import React, { createContext, useContext, useState, ReactNode } from "react";

interface SoundContextProps {
  isSoundOn: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
  };

  return (
    <SoundContext.Provider value={{ isSoundOn, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context;
};
