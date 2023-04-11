import { ActiveNavLink } from '../interfaces/router-dom';

export const activeNavlink = ({ isActive }: ActiveNavLink) =>
  isActive ? 'nav-active' : '';
