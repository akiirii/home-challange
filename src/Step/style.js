import styled from 'styled-components';

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

export const ButtonPrimary = styled(BasicButton)``;

export const ButtonSecondary = styled(BasicButton)``;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;
