import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    color: black;

    &.active {
        color: red;
    }

    :not(:last-child){
        margin-right: 20px;
    };
`;

export const Navigation = styled.nav`
    display: flex;
    padding: 10px 30px;
    margin-bottom: 30px;
    align-items: center;
    border: 1px solid black;
    -moz-box-shadow:    3px 3px 5px 6px #ccc;
    -webkit-box-shadow: 3px 3px 5px 6px #ccc;
    box-shadow:         3px 3px 5px 6px #ccc;

`;