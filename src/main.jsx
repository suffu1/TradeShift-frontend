// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import { MainLayout } from './layouts/MainLayout';
import { LoginPage } from './pages/Login/LoginPage';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { PortfolioPage } from './pages/Portfolio/PortfolioPage';
import { MarketsPage } from './pages/Markets/MarketsPage';
import { TradingPage } from './pages/Trading/TradingPage';
import { ResearchPage } from './pages/Research/ResearchPage';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'markets', element: <MarketsPage /> },
      { path: 'trading', element: <TradingPage /> },
      { path: 'research', element: <ResearchPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);