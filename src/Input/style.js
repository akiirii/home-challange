import styled from 'styled-components';
import { COLORS } from '../constants';

export const InputContainer = styled.div`
  padding: 16px 0;
  width: 100%;
  box-sizing: border-box;

  & input {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${COLORS.greyLight};
    padding: 8px 0;
    box-sizing: border-box;
    color: ${COLORS.primary};
    transition: border-color 0.5s;

    &::-moz-placeholder {
      color: lighten(${COLORS.primary}, 20%);
    }
  }
`;

export const Label = styled.label`
  margin: 10px 0;
`;
