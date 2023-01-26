import React, {useState} from 'react'
import { submitAPI } from '../BookingsApi';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';

function BookingForm({state, statechangingF}) {
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [name, setname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');

    
const formValues={
  nombre: name,
  phone: phone,
  email: email, 
  time:time,
  guests:guests,
  occasion:occasion
  }
  const navigate = useNavigate();

    function handleSubmit(){
     if(submitAPI(formValues) === true){
      navigate("/confirmation");
     }
    }

    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="left">
            <div className='calendarSection'>
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              onChange={(e) => statechangingF(e.target.value)}
            />
          </div>
          <div className='sittingSection'>
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time "
              value={time}
              onChange={(event) => setTime(event.target.value)}
            >
              {state.map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </div>
          <div className='dinerSection'>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
            />
          </div>
          <div className='ocassionSection'>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(event) => setOccasion(event.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
           </div>
          </div>
          <div className="right">
            <div className="fullName">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={name}
                onChange={(event) => setname(event.target.value)}
              />
            </div>
            <div className="phoneNumber">
              <label htmlFor="phone">Phone number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1-3454-XXX-XX"
                required
                value={phone}
                onChange={(event) => setphone(event.target.value)}
              />
            </div>
            <div className="emailUser">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="john_doe@gmail.com"
                required
                value={email}
                onChange={(event) => setemail(event.target.value)}
              />
            </div>
            <div className='buttonSection'>
          <input id='button' type="submit" value="Ready!"/>
          </div>
          </div>
        </form>
      </Container>
    );
}

export default BookingForm
const Container = styled.div`
width:80%;
height:100%;
form{
  width:100%;
  height:90%;
  background:#EDEFEE;
  display:flex;
  flex-direction:row;
  align-items:center;
  border-bottom-left-radius:16px;
  border-bottom-right-radius:16px;
}

label{
  font-size:24px;
  font-family:'Karla', 'serif';
  font-weight:500;
}
.left{
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  alig-items:center;


  .calendarSection, .sittingSection, .dinerSection, .ocassionSection{
    width:100%;
    height:25%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;


    .checkSection{

      width:100%;
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
    }

  }

}
.right{
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  alig-items:center;
  .fullName, .phoneNumber, .emailUser, .buttonSection{
    width:100%;
    height:25%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
  }
}

.buttonSection{
  #button{
    width:50%;
    height:50%;
    border-radius:15px;
    background-color:#F4CE14;
    font-size:18px;
    font-weight:600;
    cursor:pointer;
    &:hover{
     opacity:0.8;
     border:2px solid black;
    }
}
}

`