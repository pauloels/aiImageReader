import React, {ReactNode} from 'react';

import {LoadingContextProvider} from '../contexts/LoadingContexts';

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({children}: AppProviderProps) {
  return <LoadingContextProvider>{children}</LoadingContextProvider>;
}

export {AppProvider};
