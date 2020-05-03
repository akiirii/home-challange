import styled from 'styled-components';
import { COLORS } from '../constants';

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
  flex-flow: row;
  justify-content: space-between;
`;
