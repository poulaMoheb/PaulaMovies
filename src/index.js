import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/all.css"
import { LoaderProvider, useLoader } from './Loader';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoaderProvider>

    <App />
  </LoaderProvider>
);

