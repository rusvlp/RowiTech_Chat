import styled from 'styled-components';
import { Box, Text } from '../../../../components/styledComponents';

export const Container = styled(Box).attrs({
  width: '65%',
  height: '100%',
  bg: 'subMainColor',
})`
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Header = styled(Box).attrs({
  width: '100%',
  bg: 'mainColor',
  px: 4,
  py: 5,
  position: 'relative',
  maxHeight: 60,
})`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top-left-radius: 10px;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 11;
    transform: translateY(-50%);
    width: 1px;
    height: 60%;
    background-color: ${({ theme }) => theme.colors.black2BoxShadow};
  }
`;

export const Title = styled(Text).attrs({
  variant: 'size1',
})`
  color: black;
  letter-spacing: .125rem;
`;

export const ListUsers = styled(Box).attrs({
  height: 'calc(100% - 60px)',
  py: 4,
  px: 3,
})`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;