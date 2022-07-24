import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  padding: 10px 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: black;

  &.active {
    color: red;
  }
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
`;

export const InfoContainer = styled.div`
margin-left: 40px;
`;
