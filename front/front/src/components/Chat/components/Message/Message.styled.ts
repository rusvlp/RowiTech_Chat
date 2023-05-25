import styled, { css } from 'styled-components';
import { Box, Text } from '../../../styledComponents';

type MessageProps = {
  isRightOrientation: boolean
}

export const Message = styled(Box).attrs({
  width: '60%',
  bg: 'rgb(138, 148, 255, 0.2)',
  p: 2,
})<MessageProps>`
  border-radius: 4px;
  
  ${({ isRightOrientation }) => isRightOrientation ? css`
    margin-left: auto;
  ` : css`
    margin-right: auto;
  `};
`;

export const MessageText = styled(Text).attrs({
  variant: 'size2',
})`
  color: black;
  letter-spacing: .125rem;
`;