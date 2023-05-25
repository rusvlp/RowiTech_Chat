import { useTheme } from 'styled-components';
import * as Styled from './Circle.styled';


export function Circle() {
  const {
    colors: {
      blue,
    }, 
  } = useTheme();

  return (
    <>
      <Styled.Circle
        width={30}
        height={30}
        background={'#CF97FF'}
        bottom={-15}
        left={-10}
        zIndex={2}
        animationDelay={'0s, 1s'}
      />
      <Styled.Circle
        width={10}
        height={10}
        background={blue}
        bottom={-5}
        left={-5}
        zIndex={3}
        animationDelay={'0.2s, 1.2s'}
        animationDuration='1s,25s/2'
      />
      <Styled.Circle
        width={20}
        height={20}
        background={'#D1CEFF'}
        bottom={-10}
        left={15}
        zIndex={1}
        animationDelay={'0.4s, 1.4s'}
      />
      <Styled.Circle
        width={15}
        height={15}
        background={'#98D2FF'}
        bottom={-8}
        left={30}
        zIndex={2}
        animationDelay={'0s, 1s'}
        animationDuration='1s,(25s/2+ 25s/4)'
      />
      <Styled.Circle
        width={20}
        height={20}
        background={'#FF9AE5'}
        bottom={-11}
        left={41}
        zIndex={2}
        animationDelay={'0.5s, 1.5s'}
        animationDuration='1s,25s/2'
      />
      <Styled.Circle
        width={30}
        height={30}
        background={'#B1DDFF'}
        bottom={-15}
        left={50}
        zIndex={1}
        animationDelay={'0s, 1s'}
      />
      <Styled.Circle
        width={35}
        height={35}
        background={'#8A94FF'}
        bottom={-16}
        right={-14}
        zIndex={3}
        animationDelay={'0.3s, 1.3s'}
        animationDuration='1s,((25s/2)+4s)'
      />
      <Styled.Circle
        width={15}
        height={15}
        background={'#F4ACFF'}
        bottom={-8}
        right={15}
        zIndex={2}
        animationDelay={'0.7s, 1.7s'}
        animationDuration='1s,(25s/2+ (25s/5))'
      />
      <Styled.Circle
        width={8}
        height={8}
        background={'#CDE9FF'}
        bottom={6}
        right={15}
        zIndex={4}
        animationDelay={'0.9s, 1.9s'}
        animationDuration='1s,(25s/2+2s)'
      />
    </>
  );
}