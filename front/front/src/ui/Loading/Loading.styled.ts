import styled from 'styled-components';
import { Box } from '../../components/styledComponents';

export const Container = styled(Box).attrs({
  width: '100%',
  height: '100%',
  top: '50%',
  left: '50%',
})`
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
