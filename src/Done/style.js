import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  margin: 16px 0;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-right: 5px;
  &:after {
    content: ':';
  }
`;
