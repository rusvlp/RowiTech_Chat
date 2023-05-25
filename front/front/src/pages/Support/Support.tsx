import { ListUsers } from './components/ListUsers';
import * as Styled from './Support.styled';
import { Chat } from '../../components/Chat';

export function Support() {
  return (
    <Styled.Container>
      <Styled.ChatWrapper>
        <ListUsers/>
        <Chat/>
      </Styled.ChatWrapper>
    </Styled.Container>
  );
}