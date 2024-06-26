import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyle } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Movies">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);

//basename="/goit-react-hw-05-movies"
