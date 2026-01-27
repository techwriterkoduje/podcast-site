import { createContext, useContext, ReactNode } from 'react';

type PageImageContextType = string | null | undefined;

const PageImageContext = createContext<PageImageContextType>(undefined);

export function usePageImage(): PageImageContextType {
  return useContext(PageImageContext);
}

type PageImageProviderProps = {
  image?: string | null;
  children: ReactNode;
};

export function PageImageProvider({ image, children }: PageImageProviderProps) {
  return (
    <PageImageContext.Provider value={image}>
      {children}
    </PageImageContext.Provider>
  );
}
