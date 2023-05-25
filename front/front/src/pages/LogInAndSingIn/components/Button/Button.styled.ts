import styled from 'styled-components';
import { color, compose } from 'styled-system';
import { Box, Text } from '../../../../components/styledComponents';

// button,
// .signup-button {
//   padding: .25em 0;
//   border: 0;
//   outline: 0;
//   background: $primary;
//   color: rgba(#fff, 0.85);
//   font-size: 2rem;
//   line-height: 3.6rem;
//   letter-spacing: .0625rem;
//   box-shadow: 0 3px 5px 1px rgba(#000, 0.25);
//   text-shadow: 0 -2px 0 rgba(#000, 0.25), 0 1px 0 rgba(#fff, 0.2);
// }

type ButtonProps = {
  mb: number,
}
export const Button = styled(Box).attrs<ButtonProps>(({ mb }) => ({
  as: 'button',
  width: '100%',
  bg: 'blue',
  mb,
}))<ButtonProps>`
  cursor: pointer;
  box-shadow: 2px 4px 4px ${({ theme }) => theme.colors.black2BoxShadow};
  border: none;
`;

export const ButtonText = styled(Text).attrs({
  variant: 'medium24',
  color: 'white',
  py: 3,
})`
  ${compose(color)};
  
  text-align: center;
  user-select: none;
`;