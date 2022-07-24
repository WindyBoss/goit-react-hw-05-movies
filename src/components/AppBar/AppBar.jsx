import React from 'react';
import { Button } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { StyledNavLink, Navigation } from './AppBar.styled';
import MainContainer from '../MainContainer';

export default function AppBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      location?.state
        ? `${location?.state?.pathname}${location?.state?.search}`
        : -1
    );
  };

  return (
    <>
      <header>
        <Navigation>
          <Button
            sx={goBackBtnStyle}
            size="large"
            onClick={() => handleClick()}
          >
            Go back
          </Button>
          <StyledNavLink to="/goit-react-hw-05-movies/">Home</StyledNavLink>
          <StyledNavLink to="/goit-react-hw-05-movies/movies">Movies</StyledNavLink>
        </Navigation>
      </header>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}

const goBackBtnStyle = {
  color: 'black',
  fontFamily: 'inherit',
  fontSize: '16px',
  fontWeight: 'bold',
  marginRight: '40px',
};
