import React from 'react'
import styled from 'styled-components';

function About() {
  return (
    <Container id='about'>
      <Left>
        <Title>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
        </Title>
        <Text>
         <p>Little Lemon is a cozy, family-owned restaurant serving up fresh, 
          homemade meals made with the finest ingredients. 
          Come and enjoy our delicious menu options, including vegetarian and gluten-free
          options, in a warm and inviting atmosphere.</p>
        </Text>
      </Left>
      <Right>
        <img id='img2' src='./icons_assets/restaurant.jpg' width={400} alt="Little Lemon's Head Chef"/>
        <img id='img1' src='./icons_assets/Mario and Adrian b.jpg' width={400} alt="Little Lemon's Head Chef"/>
      </Right>
    </Container>
  )
}

export default About

const Container = styled.div`
grid-column:3/11;
grid-row:15/19;
display:flex;
flex-direction:row;
`

const Left = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-around;
padding:2vh;
`

const Title = styled.div`
font-family: 'Markazi Text', serif;
h2{
  font-size:64px;
  color:#F4CE14;
}
h3{
  font-size:40px;
  font-weight:400;
  color:#495E57;
}
padding:0;
margin:0;
`

const Text = styled.div`
height:100%;
display:flex;
align-items:center;
font-family: 'Karla', serif;
p{
  font-size:24px;
  text-align:justify;
}
`

const Right = styled.div`
width:50%;
#img1{
  position:relative;
  left:12vh;
  bottom:4vh;
  z-index:1;
}
#img2{
  position:relative;
  top:4vh;
  left:2vh;
  z-index:5;
}
`