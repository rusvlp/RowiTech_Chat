import { User } from './components/User';
import { usersData } from './constants';
import * as Styled from './ListUsers.styled';
import { ListUsersProps } from './ListUsers.types';
import { getRandomAvatar } from './utils/GetRandomAvatar';
import avatar1 from '../../../../assets/img/avatar1.png';

export function ListUsers({
  usersList,
}: ListUsersProps) {
  return(
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>
          Список пользователей
        </Styled.Title>
      </Styled.Header>

      <Styled.ListUsers>
        {Array.isArray(usersData) && usersData.map((user) => (
          <User
            { ...user }
            avatar={getRandomAvatar()}
          />
        ))}
      </Styled.ListUsers>
    </Styled.Container>
  );
}