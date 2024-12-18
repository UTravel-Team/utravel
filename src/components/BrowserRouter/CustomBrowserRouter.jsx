import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import AlmeriaPage from '../../pages/AlmeriaPage';
import CadizPage from '../../pages/CadizPage';
import CordobaPage from '../../pages/CordobaPage';
import GranadaPage from '../../pages/GranadaPage';
import NotFoundPage from '../../pages/404';
import Cluster from '../../components/Cluster/Cluster';
import JaenPage from '../../pages/JaenPage';
import HuelvaPage from '../../pages/HuelvaPage';
import SevillaPage from '../../pages/SevillaPage';
import MalagaPage from '../../pages/MalagaPage';
import Layout from '../Layout/Layout'; 
import ProvinceNews from '../News/ProvincesNews';


function CustomBrowserRouter (){
    return ( 
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="cluster" element={<Cluster />} />
            <Route path="almeria" element={<AlmeriaPage />} />
            <Route path="cadiz" element={<CadizPage />} />
            <Route path="/province/:province" element={<ProvinceNews />} />

            <Route path="cordoba" element={<CordobaPage />} />
            <Route path="granada" element={<GranadaPage />} />
            <Route path="malaga" element={<MalagaPage />} />
            <Route path="jaen" element={<JaenPage />} />
            <Route path="huelva" element={<HuelvaPage />} />
            <Route path="sevilla" element={<SevillaPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default CustomBrowserRouter;