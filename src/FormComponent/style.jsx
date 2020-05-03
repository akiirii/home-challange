import styled from 'styled-components';
import { COLORS } from '../constants';

export const Container = styled.div`
  padding: 25px;
  margin: 25px 0;
  box-shadow: 0 5px 10px ${COLORS.greyLight};
  background-color: ${COLORS.white};
`;


export const SuccessContainer = styled(Container)`
  padding: 50px;
  text-align: center;
`;
