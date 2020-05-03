import styled from 'styled-components';
import { COLORS, MEDIA_QUERY } from '../constants';

export const StepContainer = styled.div`
 padding: 16px;
`;

export const BasicButton = styled.button`
  border: none;
  min-width: 100px;
  height: 32px;
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 16px;
  margin: 8px 0;
`;

export const ButtonPrimary = styled(BasicButton)`
  color: ${COLORS.white};
  background-color: ${COLORS.blue};
};

  &:hover {
    filter: brightness(105%);
  }
`;

export const ButtonSecondary = styled(BasicButton)`
  background-color: transparent;
  color: ${COLORS.secondaryFont};

  &:hover {
    color: ${COLORS.blue};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column-reverse;
  
  ${MEDIA_QUERY.s} {
    justify-content: space-between;
    flex-flow: row;
  }
`;
