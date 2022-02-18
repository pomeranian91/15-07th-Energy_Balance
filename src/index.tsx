import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './SearchPage';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SearchPage />
  </React.StrictMode>,
  document.getElementById('root'),
);
