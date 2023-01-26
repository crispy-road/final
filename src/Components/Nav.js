import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (
    <Container >
      <Header>
        <img src="./icons_assets/Logo.svg" alt="Little Lemon logo" width={'160px'} />
      </Header>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="/Booking">Reservations</a>
        </li>
        <li>
          <a href="/booking">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </Container>
  );
}

export default Nav;
const Container = styled.nav`
width:60%;
height:10vh;
display:flex;
flex-direction:row;
align-items:center;

ul{
width:70%;
height:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin:0;
padding:0;

li{
  list-style:none;
  a{
    text-decoration:none;
    color:black;
    font-size:18px;
    font-weight:bold;
    font-family:'Karla','serif';
    letter-spacing:2px;
  }
}
}
`
const Header = styled.div`
width:30%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:Center;
`