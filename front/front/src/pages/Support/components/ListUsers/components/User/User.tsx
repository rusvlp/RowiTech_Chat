import * as Styled from './User.styled';
import { UserProps } from './User.types';

export function User({
  avatar,
  userName,
  userSurname,
}: UserProps) {
  return(
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.Image src={avatar}/>
      </Styled.ImageContainer>
      <Styled.UserName>
        {userName} {userSurname}
      </Styled.UserName>
    </Styled.Container>
  );
}