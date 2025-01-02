import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Authentification from './pages/Authentification';
import ProMenage from './pages/ProMenage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/menage" element={<ProMenage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
