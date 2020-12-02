import React, { ReactNode } from 'react';

import { Overlay } from '@bizone/ui-bundle/esm/Overlay';

import styles from './styles.ts';

interface LayoutProps {
  children: ReactNode;
  direction: 'column' | 'row';
}

export default function Layout({
  children,
  direction,
}: LayoutProps): React.ReactElement {
  return (
    <styles.LayoutWrapper direction={direction}>
      <React.Suspense fallback={<Overlay fullscreen loader />}>
        {children}
      </React.Suspense>
    </styles.LayoutWrapper>
  );
}
