import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AlmeriaPage from './pages/AlmeriaPage';
import CadizPage from './pages/CadizPage';
import CordobaPage from './pages/CordobaPage';
import GranadaPage from './pages/GranadaPage';
import NotFoundPage from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="almeria" element={<AlmeriaPage />} />
          <Route path="cadiz" element={<CadizPage />} />
          <Route path="cordoba" element={<CordobaPage />} />
          <Route path="granada" element={<GranadaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
