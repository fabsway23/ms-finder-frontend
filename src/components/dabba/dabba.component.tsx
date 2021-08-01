import React from 'react';
import styled from 'styled-components';
import { colors } from '../../infrastructure/theme';

import DabbaProps from './dabba.types';

const StyledDabba = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${colors.brand.primary};
`;

const Dabba = ({text}: DabbaProps) => {
  return <StyledDabba />
};

/*
    <Dabba>
        Hello
    </Dabba>
*/

export default Dabba;