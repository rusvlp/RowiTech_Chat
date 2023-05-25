import styled, { css } from 'styled-components';
import { compose, color, space, layout, position } from 'styled-system';
import { Box, Text } from '../../../../components/styledComponents';

export const TabNavDot = styled(Box).attrs({
  as: 'span',
  position: 'fixed',
  top: '52%',
  right: '1.25rem',
  zIndex: 4,
  p: '.625rem 1.25rem .625rem .625rem',
})`
  ${compose(color, space, layout, position)};
  
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: .375rem;
    height: .375rem;
    margin-right: .625rem;
    position: fixed;
    background-color: #111E25;
    border: 0;
    transition: all 0.25s;
  }
  &:hover::before {
    width: .625rem;
    height: .625rem;
    margin-top: -.125rem;
    margin-left: -.125rem;
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
`;

type TabLabelProps = {
  mt: string,
}

export const TabLabel = styled('label')<TabLabelProps>`
  ${compose(color, space, layout, position)};
  
  ${({ mt }) => mt && css`
    ${TabNavDot} {
      margin-top: ${mt};
    }
  `}
`;

export const TabText = styled(Text).attrs({
  as: 'span',
  position: 'fixed',
  top: 'calc(50% - 4rem)',
  left: '50%',
  width: '70vw',
  color: '#000',
  p: '3.125rem 0 1.5rem',
})`
  ${compose(color, space, layout, position)}
  
  transform: translate(-50%, -300%);
  text-transform: uppercase;
  opacity: 0;
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: .125rem;
  transition: all .4s cubic-bezier(.4, .25, .8, .3) .05s;
`;

type FieldProps = {
  isActive: boolean,
}

export const TabField = styled('input').attrs({
  position: 'fixed',
  top: '50%',
  left: '50%',
  width: '70vw',
  color: '#000',
})<FieldProps>`
  ${compose(color, layout, position, space)};
  
  display: block;
  padding: .25rem 0;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
  outline: 0;
  background: transparent;
  letter-spacing: .125rem;
  
  ${({ isActive }) => isActive ? css`
    opacity: 1;
    transform: translate(-50%, -100%);
    transition: all .4s cubic-bezier(.1, .45, .1, .85) .5s;
    z-index: 10;

    & ~ input {
      transform: translate(-50%, 500%);
      transition: all .5s ease-in;
    }

    & + ${TabLabel} ${TabNavDot}:before {
      background-color: ${({ theme }) => theme.colors.mainColor};
      box-shadow: 0 0 0 .15rem #111,
                  0 0 .05rem .26rem ${({ theme }) => theme.colors.mainColor};
    }

    & ~ ${TabLabel} ${TabText} {
      transform: translate(-50%, 300%);
      transition: all .5s ease-in;
    }
    
    & + ${TabLabel} ${TabText} {
      opacity: 1;
      transform: translate(-50%, -100%);
      transition: all .3s cubic-bezier(.1, .45, .1, .85) .4s;
    }
  ` : css`
    opacity: 0;
    transform: translate(-50%, -300%);
    transition: all .5s cubic-bezier(.4, .25, .8, .3);
  `};
`;