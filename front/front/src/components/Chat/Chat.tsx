import * as Styled from './Chat.styled';
import { ChatProps } from './Chat.types';
import { Message } from './components/Message';
import BackImage from '../../assets/icons/back.svg';
import SendImage from '../../assets/icons/send.svg';
import { PATH } from '../../constants/path';
import { useAppDispatch, useAppSelector } from '../../hooks/StoreHooks';
import { setActivePathAction } from '../../redux/reducers/navigation';
import { ImageContainer } from '../../ui/ImageContainer';


export function Chat({
  isUser = true,
}: ChatProps) {
  const dispatch = useAppDispatch();
  const {
    category = 'Кабербек неопознан',
  } = useAppSelector((state) => state.users);
    
  function onClickSetActivePathCategoriesHandler() {
    dispatch(setActivePathAction(PATH.categories));
  }

  return (
    <Styled.ChatContainer>
      <Styled.Header isUser={isUser}>
        {isUser && (
          <div onClick={onClickSetActivePathCategoriesHandler}>
            <ImageContainer width={30} height={30} image={BackImage}/>
          </div>
        )}

        <Styled.Title>
          {category}
        </Styled.Title>
      </Styled.Header>

      <Styled.MessageContainer>
        <Message isRightOrientation={false} text={'Добро пожаловать в нашу службу поддержки! Чем могу помочь вам сегодня?'}/>
        <Message isRightOrientation={true} text={'Здравствуйте! Я интересуюсь вашими бизнес-решениями.'}/>
        <Message isRightOrientation={false} text={'Конечно! У нас есть широкий спектр бизнес-решений для различных отраслей. Что именно вас интересует?'}/>
        <Message isRightOrientation={true} text={'Мне нужна система управления клиентами (CRM). У вас есть подходящее решение?'}/>
        <Message isRightOrientation={false} text={'Да, у нас есть отличная CRM-система, которая поможет вам эффективно управлять вашими клиентами. Она включает в себя такие функции, как управление контактами, сделками, задачами и аналитикой.'}/>
        <Message isRightOrientation={true} text={'Отлично! Какие интеграции доступны с вашей CRM-системой?'}/>
        <Message isRightOrientation={false} text={'Наша CRM-система интегрируется с различными популярными инструментами, такими как электронная почта, календари, социальные сети и многое другое. Вы сможете синхронизировать данные и улучшить эффективность работы вашей компании.'}/>
        <Message isRightOrientation={true} text={'Отлично! Как я могу начать использовать вашу CRM-систему?'}/>
        <Message isRightOrientation={false} text={'Чтобы начать использовать нашу CRM-систему, вам нужно создать аккаунт на нашем веб-сайте и подписаться на соответствующий план. После этого вы сможете настроить систему и начать управлять вашими клиентами.'}/>
        <Message isRightOrientation={true} text={'Спасибо за информацию! Я обязательно ознакомлюсь с вашей CRM-системой.'}/>


      </Styled.MessageContainer>

      <Styled.InputContainer>
        <Styled.Input/>
        <ImageContainer width={30} height={30} image={SendImage}/>
      </Styled.InputContainer>
    </Styled.ChatContainer>
  );
}