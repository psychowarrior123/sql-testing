import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navigation: FC<any> = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" activeStyle={{ color: 'green' }} exact>
          First page
        </NavLink>
      </li>
      <li>
        <NavLink to="/second" exact>
          Second Page
        </NavLink>
      </li>
      <li>
        <NavLink to="/third" exact>
          Third page
        </NavLink>
      </li>
    </ul>
  </nav>
);
