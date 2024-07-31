import { Slot } from 'expo-router';
import { Suspense } from 'react';

import { FontsProvider } from '../providers/fonts-provider';

export default function Layout() {
  return (
    <FontsProvider>
      <Suspense>
        <Slot />
      </Suspense>
    </FontsProvider>
  );
}
