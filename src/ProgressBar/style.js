import styled from 'styled-components';
import { COLORS } from '../constants';

export const ProgressContainer = styled.div`
  width: 100%;
  height: 20px;
  border: 1px solid ${COLORS.green};
`;

export const Progress = styled.div`
  background-color: ${COLORS.green};
  height: 100%;
`;
