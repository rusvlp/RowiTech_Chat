import styled from 'styled-components';
import { color, compose, space, variant } from 'styled-system';

export const Text = styled('div')(
  compose(
    color,
    space,
  ),
  {
    fontFamily: 'Roboto-Regular, sans-serif',
    fontWeight: 400,
    color: 'white',
  },
  variant({
    variants: {
      size1: {
        fontFamily: 'Roboto-Light, sans-serif',
        fontSize: '1.125rem',
        fontWeight: 300,
        transition: 'all .25s .5s',
      },
      size2: {
        fontFamily: 'Roboto-Light, sans-serif',
        fontSize: '1rem',
        fontWeight: 300,
        transition: 'all .25s .5s',
      },
      size3: {
        fontFamily: 'Roboto-Light, sans-serif',
        fontSize: '.875rem',
        fontWeight: 300,
        transition: 'all .25s .5s',
      },
      size4: {
        fontFamily: 'Roboto-Light, sans-serif',
        fontSize: '1.4rem',
        fontWeight: 300,
        transition: 'all .25s .5s',
      },
    },
  }),
);
