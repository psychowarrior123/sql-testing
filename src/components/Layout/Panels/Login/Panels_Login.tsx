import React, { FC, useCallback, useState } from 'react';
import styles from './styles';
// @ts-ignore
import { useAuthStore } from 'stores/authStore';
// @ts-ignore
import ls from 'utils/localstorage';
import { useTranslation } from 'react-i18next';

import Block from 'uikit/Block';
import Button from 'uikit/Button';
import Checkbox from 'uikit/Checkbox';
import Form from 'uikit/Form';
import Icon from 'uikit/Icon';
import IconButton from 'uikit/IconButton';
import Input from 'uikit/Input';
import Message from 'uikit/Message';
import Text from 'uikit/Text';

const LoginPanel: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { reauthorize } = useAuthStore();
  const [t] = useTranslation('LoginPage');
  const [authError, setAuthError] = useState(null);

  const handleAuth = useCallback(async authData => {
    const { password, username, rememberMe } = authData;
    setAuthError(null);
    try {
      ls.set(ls.keys.useRefreshToken, rememberMe);
      await reauthorize({ password, username });
      onClose();
    } catch (error) {
      setAuthError(error);
    }
  }, []);
  return (
    <styles.Wrapper>
      <Block
        title={t('Header')}
        separateHeader
        headerControls={<IconButton icon="close" basic onClick={onClose} />}
      >
        <styles.FormWrapper>
          <Form
            onSubmit={handleAuth}
            initialValues={{
              rememberMe: ls.get(ls.keys.useRefreshToken),
            }}
          >
            {({ handleSubmit, invalid, submitting }) => {
              return (
                <>
                  <styles.Note>
                    <Icon glyph="info" size={24} />
                    <Text size={14} as="div">
                      Вы находитесь в системе, как гость. Если у вас уже есть
                      учетная запись, авторизуйтесь.
                    </Text>
                  </styles.Note>
                  <Form.Item name="username">
                    <Input
                      icon="profile"
                      placeholder={t('Input_username')}
                      fluid
                    />
                  </Form.Item>
                  <Form.Item name="password">
                    <Input
                      icon="key"
                      type="password"
                      placeholder={t('Input_password')}
                      fluid
                      /* chrome doesn't give a fuck anyway */
                      autoComplete="chrome-off"
                    />
                  </Form.Item>
                  <Form.Item name="rememberMe">
                    <Checkbox label={t('Checkbox_rememberMe')} />
                  </Form.Item>
                  {authError && (
                    <Message icon="error" error>
                      {authError}
                    </Message>
                  )}
                  <Button
                    rich
                    primary
                    fluid
                    disabled={invalid || submitting}
                    onClick={handleSubmit}
                    type="submit"
                  >
                    {t('common:Button.log_in')}
                  </Button>
                </>
              );
            }}
          </Form>
        </styles.FormWrapper>
      </Block>
    </styles.Wrapper>
  );
};

export default LoginPanel;
