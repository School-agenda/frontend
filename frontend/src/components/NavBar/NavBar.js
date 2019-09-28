import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className = "Nav">
            <StyledTitle>School Planner</StyledTitle>
            <StyledDiv>
                <StyledLink to = "/">Home</StyledLink>
           
                <StyledLink to = "/about">About</StyledLink>
            
                <StyledLink to = "/login">Log In</StyledLink>
           
                <StyledLink to = "/assignments">Assignments</StyledLink>
           
                <StyledLink to = "/profile">Profile</StyledLink>
            </StyledDiv>
        </div>

    )
};

export default NavBar

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-right: 3%;
  
`

const StyledDiv = styled.div`
  display: flex;
  margin-left: 60%;
  padding-top: 3%;
  margin-top: -5%;
`

const StyledTitle = styled.h2`
  display: flex;
  margin-bottom: -2%;
  margin-left: 8%;
  color: #E90C4F;
`

const StyledNav = styled.div`
  background-color:
`