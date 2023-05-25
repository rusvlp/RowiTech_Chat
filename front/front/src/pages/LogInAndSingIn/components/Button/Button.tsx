import * as Styled from './Button.styled';
import { ButtonProps } from './Button.types';

export function Button({
  label,
  mb = 0,
}: ButtonProps) {
  return(
    <Styled.Button mb={mb}>
      <Styled.ButtonText>
        {label}
      </Styled.ButtonText>
    </Styled.Button>
  );
}