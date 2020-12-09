import React, { ReactNode, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

interface LinkProps {
  children: ReactNode;
  to: string;
  newTab?: boolean;
}

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LinkWrapper = ({
  children,
  newTab,
  to,
  ...rest
}: LinkProps): ReactElement => {
  const target = newTab ? '_blank' : undefined;
  return (
    <LinkContainer>
      <Link
        to={to}
        style={{ textDecoration: 'none' }}
        target={target}
        {...rest}
      >
        {children}
      </Link>
    </LinkContainer>
  );
};

export default LinkWrapper;
