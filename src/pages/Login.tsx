import React, { FC, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation, Trans } from 'react-i18next';
import { Redirect } from 'react-router-dom';

import { Button } from '@bizone/ui-bundle/esm/Button';
import { Header } from '@bizone/ui-bundle/esm/Header';
import { Message } from '@bizone/ui-bundle/esm/Message';
import { Overlay } from '@bizone/ui-bundle/esm/Overlay';
import { Text } from '@bizone/ui-bundle/esm/Text';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import api from 'api';
import CPTLogo from 'assets/img/cpt.svg';
import { FormItem } from 'components/FormItem';
import { InputController } from 'components/InputController';
import Layout from 'components/Layout';
import { withCls } from 'components/withCls';
import { AuthStoreContext } from 'stores/AuthStore';

const PromoContainer = styled.div`
  display: flex;
  margin: 64px 0px 32px 32px;
  gap: 16px;
`;

const PromoHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const PromoTitle = styled(withCls(Header))`
  font-family: Ubuntu, sans-serif;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: normal;
  color: rgb(255, 255, 255);
  margin-bottom: 8px;
`;

const PromoDescription = styled(withCls(Text))`
  font-family: Ubuntu, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: rgb(255, 255, 255);
  opacity: 0.4;
  white-space: wrap;
`;

const Logo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 84px;
  height: 84px;
`;

const HeaderContainer = styled.div`
  width: 400px;
  margin: 30vh 0px 32px;
`;

const FormContainer = styled.div`
  width: 400px;
`;

interface ILoginForm {
  email: string;
  password: string;
}

const LoginPage: FC<any> = observer(({ pathname }: { pathname: string }) => {
  const [t] = useTranslation('common');
  const { authorize, isAuthorized } = useContext(AuthStoreContext);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const { control, errors, handleSubmit } = useForm<ILoginForm>({
    mode: 'onBlur',
    defaultValues: { email: '', password: '' },
  });
  const onSubmit = async (data: ILoginForm): Promise<void> => {
    setProcessing(true);
    try {
      await authorize(data);
    } catch (err) {
      if (err.isAxiosError) {
        setError(
          err.response.status === 403 ? 'Error' : api.getErrorMessage(err),
        );
      }

      setProcessing(false);
    }
  };

  if (isAuthorized) {
    return <Redirect to={pathname} />;
  }

  if (isAuthorized === null) {
    return <Overlay fullscreen loader />;
  }

  return (
    <Layout direction="row">
      <Layout.Promo>
        <PromoContainer>
          <Logo src={CPTLogo} />
          <PromoHeader>
            <PromoTitle>
              Continuous Penetration
              <br />
              Testing
            </PromoTitle>
            <PromoDescription>
              <Trans i18nKey="common:Titles.promo.desc">
                Continuous external IT perimeter <br /> monitoring as a service
              </Trans>
            </PromoDescription>
          </PromoHeader>
        </PromoContainer>
      </Layout.Promo>
      <Layout.Login>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HeaderContainer>
            <Header size={20}>{t('common:Titles.login')}</Header>
          </HeaderContainer>
          <FormContainer>
            <FormItem label={t('common:Forms.titles.email')}>
              <InputController
                name="email"
                errors={errors}
                fluid
                placeholder="admin@mail.com"
                control={control}
                icon="letter"
              />
            </FormItem>

            <FormItem label={t('common:Forms.titles.password')}>
              <InputController
                name="password"
                errors={errors}
                fluid
                control={control}
                placeholder="P@ssw0rd"
                type="password"
                icon="key"
              />
            </FormItem>

            <FormItem>
              <Button loading={processing} primary rich fluid type="submit">
                {t('common:Button.login')}
              </Button>
            </FormItem>

            {error && (
              <Message icon="error" error>
                {error}
              </Message>
            )}
          </FormContainer>
        </form>
      </Layout.Login>
    </Layout>
  );
});

export default LoginPage;
