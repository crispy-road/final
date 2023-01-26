import React from 'react';
import styled from 'styled-components';

function Footer() {
  const Footer_Info=[
    {title:'Navigation',Links:['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login']},
    {title:'Contact',Links:['Adress', 'Phone Number', 'E-mail']},
    {title:'Social Media',Links:['Instagram','Facebook']}
  ]
  return (
    <Container id='contact'>
      <LogoFooter>
        <img src='./icons_assets/Logo1.svg' alt='little lemon logo'/>
      </LogoFooter>
       {Footer_Info.map((item)=> {
                return( 
                <Card key={item.title}>
                   <Title>
                    <span>{item.title}</span>
                   </Title>
                   <Links>
                   {item.Links.map((link)=>{
                    return(
                    <a key={link} href={"#"}><span>{link}</span></a>
                    )
                   })}
                   </Links>
                </Card>
                )
            })}
    </Container>
  );
}

export default Footer;
const Container = styled.div`
grid-column:1/13;
grid-row:20/23;
background:white ;
background:#495E57;
display:flex;
flex-direction:row;
`
const LogoFooter =  styled.div`
width:25%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`
const Card = styled.div`
width:25%;
height:100%;
`

const Title = styled.div`
height:20%;
display:flex;
align-items:center;
text-align:left;
font-family:'Markazi Text', 'serif';
font-size:24px;
font-weight:600;
color:#F4CE14;
`
const Links = styled.div`
height:80%;
display:flex;
flex-direction:column;
display:flex;
gap:3vh;
text-aling:left;
font-family:'Karla', 'serif';
font-size:18px;
font-weight:600;
a{
text-decoration:none;
color:#EDEFEE;
&:hover{
  text-decoration:underline;
}
}
`

