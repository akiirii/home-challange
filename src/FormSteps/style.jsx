import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  overflow: hidden;
`;

export const Steps = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;  
`;

export const Step = styled.div`
 width: 300px;
  flex-shrink: 0;
  height: 100%;
  scroll-snap-align: start;
`;
