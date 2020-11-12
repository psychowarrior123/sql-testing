import React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';

const classes = StyleSheet.create({
  LayoutPageHeader: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e5e5',
    boxSizing: 'border-box',
    flexShrink: 0,
    padding: '0 16px',
    position: 'relative',
    zIndex: 30,
  },
});

export default function LayoutPageHeader({ children }) {
  return <div className={css(classes.LayoutPageHeader)}>{children}</div>;
}
