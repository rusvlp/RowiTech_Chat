import * as Styled from './Categories.styled';
import { Category } from './components/Category';
import { categoriesData } from './constants';

export function Categories() {
  return(
    <Styled.Container>
      {categoriesData.map((category) => (
        <Category { ...category }/>
      ))}
    </Styled.Container>
  );
}