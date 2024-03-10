import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(131, 158, 194);
`;

export const HeaderLink = styled(NavLink)`
  // margin-left: 60px;
  text-decoration: none;
  font-size: 18px;
  color: white;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 60px;
`;
