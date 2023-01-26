import React from 'react'
import styled from 'styled-components'
import About from '../Components/About'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import Highlights from '../Components/Highlights'
import Testimonials from '../Components/Testimonials'

function Homepage() {
  return (
    <Container>
    <HeroSection/>
    <Highlights/>
    <Testimonials/>
    <About/>
    <Footer/>
    </Container>
  )
}

export default Homepage
const Container = styled.div`
display: grid;
grid-column:1/13;
grid-template-columns: repeat(12, 1fr); /* 12 columns of equal width */
grid-template-rows: repeat(22, 1fr);
grid-gap: 10px; /* space between columns */
`