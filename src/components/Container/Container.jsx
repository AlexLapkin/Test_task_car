//  import css from './Container.module.css';
import { StyledContainer } from './Container.styled';

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
