import SVG from 'react-inlinesvg';
import styled, { css } from 'styled-components';
import { Box } from '../../components/styledComponents';

type ImageContainerProps = {
  width: number;
  height: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  rotate: number;
  fillHover: string;
  fillActive: string;
}
export const ImageContainer = styled(Box).attrs<ImageContainerProps>(({
  width,
  height,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => ({
  width,
  height,
  mr: marginRight,
  ml: marginLeft,
  mt: marginTop,
  mb: marginBottom,
}))<ImageContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: .25s all;
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};

  ${({ fillHover, fillActive }) => css`
    &:hover {
      & path {
        fill: ${fillHover};
      }
    }
  
    &:active {
      & path {
        fill: ${fillActive};
      }
    }
  `};

`;

type ImageProps = {
  fill: string;
}

export const Image = styled(SVG).attrs({
  width: '100%',
  height: '100%',
})<ImageProps>`
  transition: .25s all;

  & path {
    fill: ${({ fill }) => fill};
  }
`;
