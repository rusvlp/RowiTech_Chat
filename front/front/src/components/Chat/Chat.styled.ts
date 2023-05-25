import styled, { css } from 'styled-components';
import { device } from '../../constants/device';
import { Box, Text } from '../styledComponents';

export const ChatContainer = styled(Box).attrs({
  width: '100%',
  height: '90vh',
  bg: 'transparent',
  position: 'relative',
  zIndex: 10,
})`
  box-sizing: border-box;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  
  display: flex;
  flex-direction: column;
  
  // @media (${device.laptop}) {
  //   width: 70%;
  // }

  @media (${device.mobileL}) {
    width: 80%;
  }
`;

type HeaderProps = {
  isUser: boolean
}

export const Header = styled(Box).attrs({
  width: '100%',
  bg: 'mainColor',
  px: 4,
  py: 5,
  maxHeight: 60,
})<HeaderProps>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: ${({ isUser }) => isUser ? 'space-between' : 'flex-end'};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (${device.mobileL}) {
    height: 15%;
  }
`;

export const Title = styled(Text).attrs({
  variant: 'size1',
})`
  color: black;
  letter-spacing: .125rem;
`;


export const MessageContainer = styled(Box).attrs({
  as: 'section',
  height: '100%',
  width: '95%',
  bg: 'opacityMainColor',
  mx: 'auto',
  my: 5,
  px: 4,
  py: 3,
})`
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  overflow-y: scroll;

  
  

  @media (${device.mobileL}) {
    height: 70%;
  }
`;


export const InputContainer = styled(Box).attrs({
  width: '95%',
  height: '7%',
  bg: 'white',
  mx: 'auto',
  mb: 4,
})`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
`;


export const Input = styled('input').attrs({
  placeholder: 'Написать...',
})`
  width: 85%;
  height: 100%;
  border: none;
  padding: 0;
  font-size: 1rem;
  font-weight: 300;
  transition: all .25s .5s;

  :focus {
    outline: none;
  }

  @media (${device.mobileL}) {
    width: 80%;
  }

  @media (${device.mobileS}) {
    width: 75%;
  }
`;