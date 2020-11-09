import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = (): JSX.Element => (
  <nav>
    <ul>
      <li>
        <Link to="/">First page</Link>
      </li>
      <li>
        <Link to="/second">Second Page</Link>
      </li>
      <li>
        <Link to="/third">Third page</Link>
      </li>
    </ul>
  </nav>
);
