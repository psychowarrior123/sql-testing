import React from 'react';

import Overlay from 'b:Overlay m:loader m:fullscreen';

import styles from './styles.ts';

export default function Layout({ children }) {
  return (
    <styles.LayoutWrapper>
      <React.Suspense fallback={<Overlay fullscreen loader />}>
        {children}
      </React.Suspense>
    </styles.LayoutWrapper>
  );
}
