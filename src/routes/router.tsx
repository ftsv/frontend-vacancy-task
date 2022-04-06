import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import ROUTES from '../constants/index';
import Wrapper from '../pages/Wrapper/Wrapper';
import SearchPage from '../pages/SearchPage/SearchPage';
import TokenPage from '../pages/TokenPage';
import TokensPage from '../pages/TokensPage/TokensPage';
import { menu } from '../menu';


interface RoutingProps {
  auth?: boolean;
}

export const Routing: React.FC<RoutingProps> = (props) => {
  const routes = {
    path: '/',
    element: <Wrapper />,
    children: [
      { path: '/', element: <Navigate to={`/${menu[0].id}`} /> },
      { path: '*', element: <Navigate to={`/${menu[0].id}`} /> },
      { path: `/${menu[0].id}`, element: <TokensPage /> },
      { path: `/${menu[1].id}`, element: <SearchPage /> },
      { path: `/${ROUTES.TOKEN}/:id`, element: <TokenPage /> },
    ],
  };

  const router = useRoutes([routes]);

  return <>{router}</>;
};
