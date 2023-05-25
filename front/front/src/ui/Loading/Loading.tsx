import { CircleLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import * as Styled from './Loading.styled';

export function Loading() {
  const { colors : { blue } } = useTheme();

  return (
    <Styled.Container>
      <CircleLoader
        size={80}
        color={blue}
        speedMultiplier={1}
      />
    </Styled.Container>
  );
}
