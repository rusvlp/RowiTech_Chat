import React, { useEffect } from 'react';
import {
  Route, Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import * as Styled from './App.styled';

import { Circle } from './components/Circle';
import { PATH } from '../constants/path';
import {
  useAppDispatch,
  useAppSelector,
} from '../hooks/StoreHooks';

import { LogInAndSingIn } from '../pages';
import { Categories } from '../pages/Categories';
import { Support } from '../pages/Support';
import { setActivePathAction } from '../redux/reducers/navigation';

export function App() {
  const routes = [
    {
      path: PATH.login,
      name: 'login',
      element: <LogInAndSingIn/>,
    },
    {
      path: PATH.categories,
      name: 'Categories',
      element: <Categories/>,
    },
    {
      path: PATH.support + ':id',
      name: 'Support',
      element: <Support/>,
    },
  ];

  const dispatch = useAppDispatch();
  const {
    isLogged,
  } = useAppSelector((state) => state.auth);
  const {
    activePath,
  } = useAppSelector((state) => state.navigation);

  const navigate = useNavigate();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!isLogged) {
      if (pathname !== PATH.login) dispatch(setActivePathAction(PATH.login));
    } else if (isLogged && (pathname === PATH.login || pathname === '/')) {
      dispatch(setActivePathAction(PATH.categories));
    }
  }, [navigate, pathname, isLogged, hash]);

  useEffect(() => {
    navigate(activePath);
  }, [activePath]);

  return (
    <Styled.AppContainer>
      <Styled.Container>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={route.name}
            />
          ))}
        </Routes>
      </Styled.Container>
      {isLogged && <Circle/>}
    </Styled.AppContainer>
  );
}