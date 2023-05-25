import React, { ChangeEvent } from 'react';
import * as Styled from './Tab.styled';

import { TabProp } from './Tab.types';
import { useAppDispatch } from '../../../../hooks/StoreHooks';

export function Tab({
  isActive,
  label,
  mt,
  connection,
  onClickSetActiveNavDotHandler,
  id,
  isActiveNavDot,
  setValueAction,
  type = 'text',
  placeholder = '',
  isRequired = true,
}: TabProp) {
  const dispatch = useAppDispatch();
  function onChangeSetValueInFieldHandler(event: ChangeEvent<HTMLInputElement>) {
    dispatch(setValueAction(event.target.value));
  }

  return(
    <>
      <Styled.TabField
        isActive={isActive}
        id={connection}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChangeSetValueInFieldHandler}
      />
      <Styled.TabLabel mt={mt} htmlFor={connection}>
        <Styled.TabText>{label}</Styled.TabText>
        {isActiveNavDot && <Styled.TabNavDot onClick={() => onClickSetActiveNavDotHandler(id)}/>}
      </Styled.TabLabel>
    </>
  );
}