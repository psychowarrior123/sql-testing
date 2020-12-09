import React, { FC, ReactElement, useMemo } from 'react';
import {
  useHistory,
  useLocation,
  matchPath,
  useRouteMatch,
} from 'react-router-dom';

import { Dropdown } from '@bizone/ui-bundle/esm/Dropdown';
import { Icon } from '@bizone/ui-bundle/esm/Icon';
import { Text } from '@bizone/ui-bundle/esm/Text';
import { nanoid } from 'nanoid';
import styled, { css } from 'styled-components';

import Link from 'components/Link';

interface ActionContainerProps {
  active?: boolean;
}

const ActionContainer = styled.div<ActionContainerProps>`
  align-items: center;
  background-color: ${({ active }) =>
    active ? `rgba(0, 0, 0, 0.3)` : `transparent`};
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  display: flex;
  padding: 0 16px;
  transition: 0.2s ease-out;

  .Icon + .Text {
    margin-left: 8px;
  }

  .Text {
    color: rgba(255, 255, 255, 0.8);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.8);
  }
`;

interface ActionProps {
  children?: string;
  dropdownContent?: ReactElement;
  icon?: string;
  onClick?: () => void;
  link?: string;
}

const Action: FC<ActionProps> = ({
  children,
  dropdownContent,
  icon,
  link,
  onClick,
}) => {
  const dropdownEvent = useMemo(() => `navbar-dropdown-${nanoid()}`, []);
  const history = useHistory();
  const location = useLocation();

  const active = matchPath(location.pathname, { path: link }) !== null;

  const Component = (
    <ActionContainer
      active={active}
      onClick={link ? () => history.push(link) : onClick}
    >
      {icon && <Icon size={24} glyph={icon} />}
      {children && <Text>{children}</Text>}
    </ActionContainer>
  );

  if (!dropdownContent) {
    return Component;
  }

  return (
    <Dropdown
      on="click"
      onCustom={dropdownEvent}
      position="bottom right"
      content={
        <div
          onClick={() => setTimeout(() => Dropdown.dispatch(dropdownEvent), 0)}
        >
          {dropdownContent}
        </div>
      }
    >
      {Component}
    </Dropdown>
  );
};

interface DropdownItemProps {
  clickable: boolean;
  active: boolean;
}

const DropdownItem = styled.div<DropdownItemProps>`
  align-items: center;
  box-sizing: border-box;
  cursor: ${({ active, clickable }) =>
    // eslint-disable-next-line no-nested-ternary
    active ? `default` : clickable ? `pointer` : `default`};
  display: flex;
  min-width: 200px;
  padding: 10px 16px;

  ${({ active }) => {
    if (active) {
      return css`
        background: #18a8cc1f;
      `;
    }
  }}

  &:hover {
    background: #18a8cc1f;
  }
`;

interface ItemProps {
  link?: string;
  onClick?: () => void;
  clickable?: boolean;
  newTab?: boolean;
}

export const Item: FC<ItemProps> = ({
  children,
  clickable = true,
  link,
  newTab,
  onClick,
}) => {
  const linkMatchesCurrentLocation = !!useRouteMatch({
    path: link,
    strict: true,
    sensitive: true,
  });

  const item = (
    <DropdownItem
      active={linkMatchesCurrentLocation}
      clickable={clickable}
      onClick={onClick}
    >
      {children}
    </DropdownItem>
  );

  return link ? (
    <Link newTab={newTab} to={link}>
      {item}
    </Link>
  ) : (
    item
  );
};

export const Splitter = styled.div`
  background-color: #e6e6e6;
  height: 1px;
  margin: 8px 0;
  width: 100%;
`;

export default Action;
