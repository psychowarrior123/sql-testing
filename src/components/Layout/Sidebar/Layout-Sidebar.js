import React from 'react';
import pt from 'prop-types';
import { StyleSheet, css } from 'aphrodite-jss';

const classes = StyleSheet.create({
  LayoutSidebar: {
    backgroundColor: '#fff',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.2)',
    flex: '1 0 auto',
    position: 'relative',
    width: 64,
    zIndex: 30,
  },
  LayoutSidebar_opened: {
    flexBasis: '30%',
    minWidth: 400,
  },
});

function LayoutSidebar({ children, opened }) {
  return (
    <div
      className={css(
        classes.LayoutSidebar,
        opened && classes.LayoutSidebar_opened
      )}
    >
      {children}
    </div>
  );
}

LayoutSidebar.propTypes = {
  opened: pt.bool,
};

export default LayoutSidebar;
