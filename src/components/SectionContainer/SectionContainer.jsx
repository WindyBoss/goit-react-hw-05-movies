import React from 'react';
import PropTypes from 'prop-types';

import { Section } from './SectionContainer.styled';

const SectionContainer = ({ children, isEmpty }) => {
  return <Section isEmpty={isEmpty}>{children}</Section>;
};

SectionContainer.propTypes = {
  children: PropTypes.any,
  isEmpty: PropTypes.bool,
}

export default SectionContainer;