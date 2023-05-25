import styled from 'styled-components';
import { Box } from '../../components/styledComponents';
import { device } from '../../constants/device';

export const Container = styled(Box).attrs({
  width: '100%',
  height: '100vh',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (${device.tablet}) {
    justify-content: space-around;
  }

  @media (${device.mobileL}) {
    overflow-y: scroll;
  }
`;