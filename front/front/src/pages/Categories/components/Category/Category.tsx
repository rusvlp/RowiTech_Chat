import { useEffect, useState } from 'react';
import * as Styled from './Category.styled';
import { CategoryProps } from './Category.types';
import { PATH } from '../../../../constants/path';
import { useAppDispatch } from '../../../../hooks/StoreHooks';
import { setActivePathAction } from '../../../../redux/reducers/navigation';
import { onSetCategoryAction } from '../../../../redux/reducers/user';

export function Category({
  title,
  label,
  delay,
  id,
  height = 'auto',
  width = '28%',
}: CategoryProps) {
  const dispatch = useAppDispatch();

  function onClickSetActiveIdPathHandler() {
    dispatch(setActivePathAction(PATH.support + id));
    dispatch(onSetCategoryAction(title));
  }

  return(
    <Styled.Container
      height={height}
      width={width}
      onClick={onClickSetActiveIdPathHandler}
      delay={delay}
    >
      <Styled.TitleContainer>
        <Styled.Title>
          {title}
        </Styled.Title>
      </Styled.TitleContainer>

      <Styled.LabelContainer>
        <Styled.Label>
          {label}
        </Styled.Label>
      </Styled.LabelContainer>
    </Styled.Container>
  );
}