import React from 'react';
import ReactDOM from 'react-dom';


const render = async (): Promise<void> => {
  const App = (await import(/* webpackChunkName: "App" */ './App')).default;

  ReactDOM.render(<App />, document.getElementById('root'));
};

render();