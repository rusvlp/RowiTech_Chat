import * as Styled from './Message.styled';
import { MessageProps } from './Message.types';



export function Message({
  isRightOrientation,
  text,
}: MessageProps) {


  return (
    <Styled.Message isRightOrientation={isRightOrientation}>
      <Styled.MessageText>
        {text}
      </Styled.MessageText>
    </Styled.Message>
  );
}