import React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';

const classes = StyleSheet.create({
  LayoutPageControls: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    minHeight: 56,
    padding: '0 8px',
    width: '100%',
  },
});

export default function LayoutPageControls({ children }) {
  return <div className={css(classes.LayoutPageControls)}>{children}</div>;
}
