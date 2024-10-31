import React, {createContext, ReactNode, useState} from 'react';

export type LoadingContextDataProps = {
  loading: boolean;
  handleLoading: (value: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextDataProps>(
  {} as LoadingContextDataProps,
);

type LoadingContextProvierProps = {
  children: ReactNode;
};

export function LoadingContextProvider({children}: LoadingContextProvierProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoading = (item: boolean) => {
    setLoading(item);
  };

  return (
    <LoadingContext.Provider
      value={{
        loading,
        handleLoading,
      }}>
      {children}
    </LoadingContext.Provider>
  );
}
