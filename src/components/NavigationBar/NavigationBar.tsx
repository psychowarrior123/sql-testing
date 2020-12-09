import React, { FC, useContext } from 'react';

import { Text } from '@bizone/ui-bundle/esm/Text';
import styled from 'styled-components';

import Brand from 'components/Brand';
import Link from 'components/Link';
import Action, { Item, Splitter } from 'components/NavigationBarAction';
import { AuthStoreContext } from 'stores/AuthStore';

export const NavBarWrapper = styled.div`
  background-color: #2a3a4e;
  display: flex;
  justify-content: space-between;
  height: 48px;
  padding-right: 8px;
`;

export const NavBarGroup = styled.div`
  display: flex;

  & .withDivider {
    border-right: 1px solid rgb(255, 255, 255, 0.2);
    margin: 12px 16px;
  }
`;

export const NavBarDivider = styled.div`
  border-right: 1px solid rgb(255, 255, 255, 0.2);
  margin: 12px 16px;
`;

const NavigationBar: FC = (props) => {
  const { deauthorize } = useContext(AuthStoreContext);

  return (
    <NavBarWrapper>
      <NavBarGroup>
        <Link newTab to="/dashboard">
          <Brand />
        </Link>
        <Action icon="dashboard" link="/dashboard">
          Dashboard
        </Action>
      </NavBarGroup>
      <NavBarGroup>
        <Action
          icon="settings"
          dropdownContent={
            <>
              <Item link="/settings">
                <Text>Settings</Text>
              </Item>

              <Item link="/users">
                <Text>users</Text>
              </Item>

              <Item link="/roles">
                <Text>Roles</Text>
              </Item>

              <Item link="/companies">
                <Text>Companies</Text>
              </Item>
            </>
          }
        />

        <Action
          icon="profile"
          dropdownContent={
            <React.Fragment>
              <Item link="/profile">
                <Text>Profile</Text>
              </Item>

              <Splitter />

              <Item onClick={deauthorize}>
                <Text>Logout</Text>
              </Item>
            </React.Fragment>
          }
        />
      </NavBarGroup>
    </NavBarWrapper>
  );
};

export default NavigationBar;
