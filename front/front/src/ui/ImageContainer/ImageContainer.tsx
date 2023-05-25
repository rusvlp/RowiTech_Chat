import { useTheme } from 'styled-components';
import * as Styled from './ImageContainer.styled';
import { ImageContainerProps } from './ImageContainer.types';

export function ImageContainer({
  width,
  height,
  image,
  fill = '',
  fillHover = '',
  fillActive = '',
  rotate = 0,
  marginTop = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
}: ImageContainerProps) {
  const theme = useTheme();
  const colorImage = fill ? fill : theme.colors.lightGray;
  const colorImageHover = fillHover ? fillHover : colorImage;
  const colorImageActive = fillActive ? fillActive : colorImageHover;

  return (
    <Styled.ImageContainer
      width={width ? width : height}
      height={height ? height : width}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      rotate={rotate}
      fillHover={fillHover ? fillHover : colorImageHover}
      fillActive={fillActive ? fillActive : colorImageActive}
    >
      <Styled.Image
        src={image}
        fill={fill ? fill : colorImage}
      />
    </Styled.ImageContainer>
  );
}
