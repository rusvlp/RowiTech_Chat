import styled from 'styled-components';
import { color, compose, layout, position, space } from 'styled-system';

export const Box = styled('div')(
  compose(
    color,
    layout,
    position,
    space,
  ),
);
