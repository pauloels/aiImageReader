import {useContext} from 'react';

import {LoadingContext} from '../contexts/LoadingContexts';

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}
