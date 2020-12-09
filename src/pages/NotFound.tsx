import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '@bizone/ui-bundle/esm/Header';
import styled from 'styled-components';

import Logo from 'assets/img/page-404.svg';

const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: calc(25vh - 48px);
`;

const NotFoundLogo = styled.img.attrs((props) => ({ src: props.src }))`
  width: 128px;
`;

const NotFoundPage: FC<any> = () => {
  return (
    <NotFoundContainer>
      <NotFoundLogo src={Logo} />
      <Header size={32} />
      <h3>This page doesn&apos;t exist</h3>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
