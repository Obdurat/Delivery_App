import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ContextProvider from './context/ContextProvider';
import Routes from './routes/index.routes';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
