import styled, { css } from 'styled-components';
import { compose, color, space, layout, position } from 'styled-system';
import { Box, Text } from '../../components/styledComponents';

export const RootForm = styled(Box).attrs({
  as: 'form',
  width: '100%',
  height: '100%',
})``;

export const TipWrapper = styled(Box).attrs({
  position: 'fixed',
  top: '57%',
  left: '50%',
  width: '70%',
})`
  ${compose(color, space, layout, position)};
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateX(-50%);
`;

type TipProps = {
  isActive: boolean,
}

export const TipContainer = styled(Box)`
  display: flex;
`;

type ValidateErrorProps = {
  isActive: boolean,
}

export const ValidateError = styled(Text).attrs({
  color: 'mainColor',
})<ValidateErrorProps>`
  ${compose(color, space, layout, position)};
  
  font-size: .875rem;
  font-weight: 300;
  letter-spacing: .125rem;
  text-transform: uppercase;
  transition: opacity .25s .5s;

  ${({ isActive }) => isActive ? css`
    opacity: 1;
  ` : css`
    opacity: 0;
  `};
`;

export const Tip = styled(Text).attrs({
  as: 'p',
  color: 'black',
  ml: 3,
})<TipProps>`
  ${compose(color, space, layout, position)};
  
  font-size: .875rem;
  font-weight: 300;
  letter-spacing: .125rem;
  text-transform: uppercase;
  text-align: right;
  transition: opacity .25s .5s;
  white-space: nowrap;
  
  ${({ isActive }) => isActive ? css`
    opacity: 1;
  ` : css`
    opacity: 0;
  `};
`;

type EntranceProps = {
  isActive: boolean,
}

export const Entrance = styled(Text).attrs<EntranceProps>(({ isActive }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: isActive ? 0 : -1,
  width: '70vw',
  bg: 'mainColor',
  p: '.25em 0',
  color: 'rgba(#fff, 0.85)',
}))<EntranceProps>`
  ${compose(color, space, layout, position)};
  
  border: 0;
  outline: 0;
  font-size: 2rem;
  line-height: 3.6rem;
  letter-spacing: .0625rem;
  box-shadow: 0 3px 5px 1px rgba(#000, 0.25);
  text-shadow: 0 -2px 0 rgba(#000, 0.25), 0 1px 0 rgba(#fff, 0.2);
  transform: translate(-50%, -100%);
  text-align: center;
  cursor: pointer;
  transition: opacity .4s .3s;

  ${({ isActive }) => isActive ? css`
    opacity: 1;
  ` : css`
    opacity: 0;
  `};
`;