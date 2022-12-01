/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper className={`${size}-size`}>
      <ProgressElement 
        role="progressbar" 
        aria-valuenow={value} 
        aria-valuemin="0" 
        aria-valuemax="100" 
        value={value}   
      />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100%;
  overflow: hidden;


  &.large-size {
    height: 24px;
    padding: 4px;
    border-radius: 8px;
  }

  &.medium-size {
    height: 12px;
  }

  &.small-size {
    height: 8px;
  }
`;

const ProgressElement = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: ${({ value }) => value}%;
  padding: 4px;
  border-radius: 4px;
`;


export default ProgressBar;
