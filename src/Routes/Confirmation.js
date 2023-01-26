import React from 'react'
import styled from 'styled-components'

function Confirmation() {
  return (
    <Container>
        <Wrapeer>
            <h1>Your reservation has been confirmed!</h1>
            <h2>We look forward to welcoming you. Kindly note that in the event of a delay, please contact us to inform us of your new arrival time. Thank you!</h2>
        </Wrapeer>
    </Container>
  )
}

export default Confirmation
const Container = styled.div`
display:flex;
width:100%;
height:90vh;
justify-content:center;
align-items:center

`
const Wrapeer = styled.div`
height:80%;
background:#495E57;
display:flex;
flex-direction:column;
justify-content:center;
text-align: center;

h1,h2{
    padding:10vh;
    margin:0;
    letter-spacing:2px;
}
h1{
    font-size:64px;
    font-family:'Markazi Text', 'serif';
    color:#F4C143
}
h2{
 font-size:40px;
 font-family:'Karla', 'serif';
 font-weight:500;
 color:white;
}

`