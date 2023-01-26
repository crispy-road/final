import React from 'react'
import styled from 'styled-components';
import BookingForm from '../Components/BookingForm'
function BookingPage({state, statechangingF}) {



 return (
   <Container>
     <div className="title">
       <h1>Book Now</h1>
     </div>
    <BookingForm state={state} statechangingF={statechangingF}/>
   </Container>
 );
}

export default BookingPage

const Container = styled.div`
width:100%;
height:90vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
.title{
  width:80%;
  height:20%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#495E57;
  border-top-left-radius:16px;
  border-top-right-radius:16px;
  color:#F4CE14;
  font-family:'Markazi Text', 'serif';
  font-size:64px;
  font-weight:500;
}
`