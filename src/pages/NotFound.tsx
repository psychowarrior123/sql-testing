import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '@bizone/ui-bundle/esm/Header';
import { Text } from '@bizone/ui-bundle/esm/Text';
import styled from 'styled-components';

import Logo from 'assets/img/page-404.svg';

const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: calc(25vh - 48px);

  .NotFound-message {
    margin-top: 8px;
  }
`;

const NotFoundLogo = styled.img.attrs((props) => ({ src: props.src }))`
  width: 128px;
`;

const NotFoundPage: FC<any> = () => {
  const [t] = useTranslation('pages.NotFound');
  return (
    <NotFoundContainer>
      <NotFoundLogo src={Logo} />
      <Header size={32}>{t('pages:NotFound.title')}</Header>
      <Text cls="NotFound-message">{t('pages:NotFound.message')}</Text>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
