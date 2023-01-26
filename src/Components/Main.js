import React, {useReducer}from 'react'
import styled from 'styled-components'
import {  Route, Routes } from "react-router";
import Nav from '../Components/Nav';
import Homepage from '../Routes/Homepage';
import BookingPage from '../Routes/BookingPage';
import {fetchAPI} from '../BookingsApi'
import Confirmation from '../Routes/Confirmation';

function Main() {


    const availableTimesReducer = (state, action) => {
        switch (action.type) {
          case 'UPDATE_TIMES':
            return updateTimes(state, action.payload);
          default:
            return state;
        }
      }

      const updateTimes = (state, selectedDate) => {
        return fetchAPI(selectedDate)
      }

      const initializeTimes = (state, selectedDate) => {
        return fetchAPI(selectedDate);
      }

      const [availableTimes, dispatch] = useReducer(availableTimesReducer, initializeTimes());

      const handleDateChange = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
      }

  return (
    <Container>
        <Nav />
        <Routes>
             <Route path='/' element={<Homepage/>}/>
             <Route path="/booking" element={<BookingPage state={availableTimes} statechangingF={handleDateChange}/>}/>
             <Route path="/confirmation" element={<Confirmation/>}/>
        </Routes>
    </Container>
  )
}

export default Main
const Container = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`