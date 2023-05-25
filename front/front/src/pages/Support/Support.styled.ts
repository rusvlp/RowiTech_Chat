import styled, { keyframes } from 'styled-components';
import { Box } from '../../components/styledComponents';

const appearanceOfCategories = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled(Box).attrs({
  position: 'relative',
  zIndex: 10,
  width: '100%',
  height: '100vh',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s;
  animation: ${appearanceOfCategories} 1s;
`;

export const ChatWrapper = styled(Box).attrs({
  width: '75%',
  height: '90vh',
  mx: 'auto',
  position: 'relative',
  zIndex: 10,
})`
  box-sizing: border-box;
  
  display: flex;
`;