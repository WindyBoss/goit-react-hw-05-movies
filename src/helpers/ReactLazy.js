import { lazy } from 'react';

export const ReactLazy = componentName => {
  return lazy(() => import(`../pages/${componentName}`));
};
