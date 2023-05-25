import styled from 'styled-components';
import { Box } from '../components/styledComponents';
import { size, device } from '../constants/device';

export const AppContainer = styled(Box).attrs({
  position: 'relative',
  width: '100vw',
  height: '100vh',
})`
  overflow: hidden;
`;

export const Container = styled(Box).attrs({
  minWidth: size.mobileS,
  maxWidth: size.laptopL,
  height: '100vh',
  mx: 'auto',
})`
  @media (${device.laptopL}) {
    max-width: ${size.laptop};
  };

  @media (${device.laptop}) {
    max-width: ${size.tablet};
  };

  @media (${device.tablet}) {
    max-width: 100%;
  };
`;