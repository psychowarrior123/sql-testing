/* eslint-disable global-require */

import React, { FC } from 'react';

import { Header } from '@bizone/ui-bundle/esm/Header';
import styled, { css } from 'styled-components';

import CPTLogo from 'assets/img/cpt.svg';

const logoCss = css`
  height: 32px;
  margin-right: 8px;
`;

const StyledBrand = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  & .Header {
    --text-color: #f5f5f5;
    font-weight: 500;
  }
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  ${logoCss}
`;

const Brand: FC = () => {
  return (
    <StyledBrand>
      <Logo src={CPTLogo} alt={webpack.APP_NAME} />
      <Header size={16}>{webpack.APP_NAME}</Header>
    </StyledBrand>
  );
};

export default Brand;
