import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//scss
import './styles/Navbar.scss';
import './styles/Footer.scss';
//scss

const Render = () => {
    const rootElement = document.getElementById('root');

    if (rootElement) {
      ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
};
Render();