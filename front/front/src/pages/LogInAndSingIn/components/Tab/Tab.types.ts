import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export type TabProp = {
  // Включен ли данный таб
  isActive: boolean,
  // Подпись к табу
  label: string,
  // Отступ, на который смещается инпут без фокуса
  mt: string,
  // Связь по id и htmlFor
  connection: string,
  // Обязательное ли поле
  isRequired?: boolean,

  // Переключатель по дотам
  onClickSetActiveNavDotHandler: (id: number) => void,
  // Id таба
  id: number,
  // активна ли навигация по табам
  isActiveNavDot: boolean,
  // Подсказка к полю вводы в табе
  placeholder?: string,
  // Тип поля
  type?: string,
  setValueAction: ActionCreatorWithPayload<string>,
}