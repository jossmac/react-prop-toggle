// @flow

import React from 'react';
import PropToggle, { defaultProps } from './PropToggle';

type ProviderProps = { isActive: boolean };
const LifeCycleProvider = ({ isActive, ...props }: Props & ProviderProps) =>
  isActive ? <PropToggle {...props} /> : null;

LifeCycleProvider.defaultProps = defaultProps;

export default LifeCycleProvider;
