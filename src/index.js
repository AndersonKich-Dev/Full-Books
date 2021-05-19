import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Fonts from './fonts'
import GlobalStyles from './styles/GlobalStyle'
import GlobalContextProvider from './Context/GlobalContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Fonts/>
      <GlobalStyles/>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

