import styled from 'styled-components';
import { COLORS } from '../constants';

export const RadioContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin: 6px 0;
  
  label {
      position: relative;
      padding: 0 0 0 30px;
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;
  }
  
  input[type=radio] {
      opacity: 0;
      position: absolute;
  
      + label:before {
          content: '';
          background-color: ${COLORS.white};
          border: 1px solid ${COLORS.greyLight};
          border-radius: 50%;
          display: inline-block;
          vertical-align: middle;
          width: 16px;
          height: 16px;
          position: absolute;
          box-sizing: border-box;
          top: 0;
          left: 0;
      }
  
      &:checked + label:after {
          content: "";
          border-radius: 50%;
          background-color: ${COLORS.blue};
          width: 10px;
          height: 10px;
          display: inline-block;
          position: absolute;
          top: 3px;
          left: 3px;
      }
}
`;

export const Label = styled.label`
  margin: 10px 0;
`;
