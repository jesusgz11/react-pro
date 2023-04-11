import { lazy } from 'react';
import { Route } from '../interfaces/router-dom';
import NoLazy from '../01-lazyload/pages/NoLazy';

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    name: 'Dashboard Lazy',
    Component: LazyLayout,
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    name: 'No Lazy',
    Component: NoLazy,
  },
];
