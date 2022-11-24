import loadable from 'utils/loadable';
import React from 'react';
import { PlaceHolderLoadable } from './style';

export default loadable(() => import('./index'), {
  fallback: <PlaceHolderLoadable />,
});
