import { useSyncExternalStore } from 'react';

type MediaQueryListLike = {
  matches: boolean;
  addEventListener: (type: 'change', listener: (event: MediaQueryListEvent) => void) => void;
  removeEventListener: (type: 'change', listener: (event: MediaQueryListEvent) => void) => void;
};

function getMediaQueryList(query: string): MediaQueryListLike | null {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return null;
  return window.matchMedia(query);
}

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mql = getMediaQueryList(query);
      if (!mql) return () => {};

      const listener = () => onStoreChange();
      mql.addEventListener('change', listener);
      return () => mql.removeEventListener('change', listener);
    },
    () => getMediaQueryList(query)?.matches ?? false,
    () => false,
  );
}

