import React, { createContext, useContext, ReactNode } from 'react';

type PageImageContextType = string | null | undefined;

const PageImageContext = createContext<PageImageContextType>(undefined);

export const usePageImage = (): PageImageContextType => {
  return useContext(PageImageContext);
};

interface PageImageProviderProps {
  image?: string | null;
  children: ReactNode;
}

export const PageImageProvider: React.FC<PageImageProviderProps> = ({
  image,
  children,
}) => {
  return (
    <PageImageContext.Provider value={image}>
      {children}
    </PageImageContext.Provider>
  );
};
