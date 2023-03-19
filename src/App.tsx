import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/header';
import MainPage from './pages/mainPage';
import AboutUs from './pages/about';
import PageNotFound from './pages/notFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/404" element={<PageNotFound />}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
