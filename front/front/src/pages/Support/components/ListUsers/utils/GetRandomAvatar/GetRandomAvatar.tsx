import { avatars } from '../../constants';

export function getRandomAvatar() {
  const min = 0;
  const max =  avatars.length - 1;

  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  return avatars[randomNumber];
}