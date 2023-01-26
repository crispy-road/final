import React from 'react'
import styled from 'styled-components';

function HeroSection() {
  return (
  <Container>
    <TextWrapper>
        <Text>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
         </Text>
    </TextWrapper>
    <ImageWrapper>
        <img src ="./icons_assets/restauranfood.jpg" alt='Greek Tapas special' width={'100%'}/>
    </ImageWrapper>
  </Container>
  )
}

export default HeroSection
const Container = styled.div`
 grid-column:1/13;
 grid-row:2/5;
 background:#495E57;
 display:flex;
 flex-direction: row;
 justify-content:center;
`
const TextWrapper = styled.div`
width:40%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-around;

`
const Text = styled.div`
width:60%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

h1{
    color:#F4CE14;
    font-size:64px;
    margin:0;
    padding:0;
    font-family: 'Markazi Text', serif;
    font-weight:500;
}
h2{
    color:#EDEFEE;
    font-weight:100;
    font-size:40px;
    margin:0;
    padding-bottom:10px;
    font-family: 'Markazi Text', serif;
    font-weight:400;
}
P{
    color:#EDEFEE;
    font-size:18px;
    right-padding:30 px;
    line-height: 1.5;
    margin:0;
    padding-bottom:40px;
    font-family: 'Karla', serif;
}
button{
    width:80%;
    height:13%;
    border-radius:15px;
    background-color:#F4CE14;
    font-size:24px;
    font-weight:600;
    cursor:pointer;
    letter-spacing:1px;
    &:hover{
     opacity:0.8;
     border:2px solid black;   
    }
}
`
const ImageWrapper = styled.div`
width:25%;
height:50vh;
position:relative;
border-radius:25px;
top:5vh;
img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius:25px;
  }
`
