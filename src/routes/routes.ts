import { lazy } from 'react';
import { Route } from '../interfaces/router-dom';

const LazyPage1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const LazyPage2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const LazyPage3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    name: 'Lazy-1',
    Component: LazyPage1,
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    name: 'Lazy-2',
    Component: LazyPage2,
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    name: 'Lazy-3',
    Component: LazyPage3,
  },
];
