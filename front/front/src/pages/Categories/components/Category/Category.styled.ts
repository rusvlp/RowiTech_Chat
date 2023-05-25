import styled, { keyframes, css } from 'styled-components';
import { Box, Text } from '../../../../components/styledComponents';
import { device } from '../../../../constants/device';

export const TitleContainer = styled(Box).attrs({
  bg: 'mainColor',
  position: 'relative',
  zIndex: '10',
  px: 3,
  py: 5,
  maxHeight: 61,
  minWidth: 180,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 10px 0 32px 10px ${({ theme }) => theme.colors.blackBoxShadow};
`;

export const Title = styled(Text).attrs({
  variant: 'size1',
})`
  letter-spacing: .125rem;
  text-align: center;
  user-select: none;
`;

export const LabelContainer = styled(Box).attrs({
  bg: 'subMainColor',
  position: 'relative',
  zIndex: '10',
  px: 3,
  py: 5,
  minWidth: 180,
  height: 200,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 10px 0 32px 10px ${({ theme }) => theme.colors.blackBoxShadow};
  opacity: 0.8;
`;

export const Label = styled(Text).attrs({
  variant: 'size2',
})`
  color: #353b48;
  letter-spacing: .125rem;
  text-align: center;
  user-select: none;
`;

const appearanceOfCategories = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

type ContainerProps = {
  width: number | string,
  height: number | string,
  delay: number,
}

export const Container = styled(Box).attrs<ContainerProps>(({
  width,
  height,
}) => ({
  width,
  height,
  position: 'relative',
  zIndex: 10,
}))<ContainerProps>`
  cursor: pointer;
  transition: all .5s;
  opacity: 0;
  
  @media (${device.tablet}) {
    width: 40%;
    margin: 8px 0;
  }

  @media (${device.mobileL}) {
    width: 95%;
  }
  
  &:hover {
    transition: all .5s;
    ${TitleContainer},
    ${LabelContainer} {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .05);
        transition: all .5s;
      }
    }

    ${TitleContainer} {
      &::before {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }

    ${LabelContainer} {
      &::before {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
  animation: ${appearanceOfCategories} 1.5s forwards;
  
  ${({ delay }) => delay && css`
    animation-delay: ${delay}s;
  `}
`;