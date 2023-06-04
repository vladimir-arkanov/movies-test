import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';
import { MovieSpec } from './components/MovieSpec/MovieSpec';
import { Header } from './components/Header/Header';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="main-page">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/shows" replace />} />
        <Route path="/shows" element={<HomePage />} />
        <Route path="/shows/favorites" element={<FavoritePage />} />
        <Route path="/shows/:id" element={<MovieSpec />} />
      </Routes>
    </div>
  );
};
