import { useCallback } from 'react';
import { atom, useAtom, useAtomValue } from 'jotai';

import { Cuisines } from '../constants';
import { atomWithMMKV } from '../states/utils';

const CuisinesAtom = atomWithMMKV('CuisinesStorageKey', Cuisines);

const FilteredCuisinesAtom = atom(get => {
  const cuisines = get(CuisinesAtom);
  return cuisines.filter(cuisine => cuisine.selected);
});

export const useCuisines = () => {
  const [cuisines, setCuisines] = useAtom(CuisinesAtom);

  const filteredCuisines = useAtomValue(FilteredCuisinesAtom);

  const toggleCuisine = useCallback(
    (id: number) => {
      setCuisines(prevCuisines => {
        return prevCuisines.map(cuisine => {
          if (cuisine.id === id) {
            return {
              ...cuisine,
              selected: !cuisine.selected,
            };
          }
          return cuisine;
        });
      });
    },
    [setCuisines],
  );

  return {
    cuisines,
    toggleCuisine,
    filteredCuisines,
  };
};
