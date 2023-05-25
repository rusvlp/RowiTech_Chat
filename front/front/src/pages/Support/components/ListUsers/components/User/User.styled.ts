import styled from 'styled-components';
import { color } from 'styled-system';
import { Box, Text } from '../../../../../../components/styledComponents';

export const Container = styled(Box).attrs({
  width: '100%',
  height: 58,
  bg: 'rgba(138, 148, 255, .2)',
  mb: 3,
})`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  transition: all .25s;
  
  &:hover {
    filter: hue-rotate(35deg);
    transition: all .25s;
  }
`;

export const UserName = styled(Text).attrs({
  variant: 'size2',
  color: 'black',
})`
  ${color};
`;

export const ImageContainer = styled(Box).attrs({
  width: 50,
  height: 50,
  mr: 3,
  ml: 2,
})`
  border-radius: 50%;
`;

export const Image = styled('img').attrs({
  width: '100%',
  height: '100%',
})`
  border-radius: 50%;
`;