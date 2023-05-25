import styled from 'styled-components';
import { Box } from '../../../components/styledComponents';

type CircleProps = {
  width: number,
  height: number,
  background: string,
  bottom: number,
  left?: number,
  right?: number,
  zIndex: number,
  animationDelay: string,
  animationDuration?: string,
};

export const Circle = styled(Box).attrs<CircleProps>(({
  width,
  height,
  background,
  bottom,
  left,
  right,
  zIndex,
}) => ({
  width: width + 'vw',
  height: height + 'vw',
  bg: background,
  position: 'absolute',
  bottom: bottom + 'vw',
  left: left + 'vw',
  right: right + 'vw',
  zIndex: zIndex,
}))<CircleProps>`
  opacity: 0;
  border-radius: 50%;
  box-shadow: 10px 0 32px 10px ${({ theme }) => theme.colors.blackBoxShadow};
  animation: appear 1s forwards, moveUpDown 25s linear infinite;
  animation-delay: ${({ animationDelay }) => animationDelay};
  animation-duration: ${({ animationDuration }) => animationDuration};

  @keyframes appear{
    from{
      opacity: 1;
      transform: translateY(40vw);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes moveUpDown{
    0%{
      transform: translateY(0vw);
    }
    25%{
      transform: translateY(-2vw);
    }
    50%{
      transform: translateY(0vw);
    }
    75%{
      transform: translateY(2vw);
    }
    100%{
      transform: translateY(0vw);
    }
  }
`;