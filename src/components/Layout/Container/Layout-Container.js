import React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';

const classes = StyleSheet.create({
  LayoutContainer: {
    display: 'flex',
    height: '100%',
    overflowY: 'auto',
    position: 'relative',
    zIndex: 0,
  },
});

export default function LayoutContainer({ children }) {
  return <div className={css(classes.LayoutContainer)}>{children}</div>;
}
