import React from 'react';
import styled from 'styled-components';
import Main from './Components/Main';
function App() {

  return (
    <Container >
      <Main/>
    </Container>
  );
}

export default App;

const Container = styled.div`
height:auto;
width:100%;
height:auto;
display:flex;
justify-content:center;
// display: grid;
// grid-template-columns: repeat(12, 1fr);
// grid-template-rows: repeat(15, 1fr);
// grid-gap: 10px;
`