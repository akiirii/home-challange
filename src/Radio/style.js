import styled from 'styled-components';
import { COLORS } from '../constants';

export const InputContainer = styled.div`
  padding: 16px 0;
  width: 100%;
  box-sizing: border-box;
`;

export const Label = styled.label`
  margin: 10px 0;
`;


export const ErrorContainer = styled.div`
  color: ${COLORS.red};
  padding: 8px 2px;
`;
