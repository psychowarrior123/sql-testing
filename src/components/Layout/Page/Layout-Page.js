import React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';

const classes = StyleSheet.create({
  LayoutPage: {
    display: 'flex',
    flexShrink: 1,
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
    /*
        TODO: do not set position to relative until
              https://github.com/captivationsoftware/react-sticky/issues/271
              is solved. no adequate in-app-hack for this issue
    */
    // position: 'relative',
    width: '100%',
  },
});

export default function LayoutPage({ children }) {
  return <div className={css(classes.LayoutPage)}>{children}</div>;
}
