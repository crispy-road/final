import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

function Testimonials() {
const User =[
    {rating:5, url:'https://picsum.photos/id/237/100/100',name:'Matt Jones', review:'"loved the enviorement, the staff was really welcoming. delicous food!."'},
    {rating:4, url:'https://picsum.photos/id/238/100/100',name:'Brianna Lin', review:'"BEST bruchetta i have ever tried, will defenitely come back."'},
    {rating:4.5, url:'https://picsum.photos/id/239/100/100',name:'Desmond Williams', review:'"Presentation of the food, full of flavor and fresh. Always my must go on the weekends."'},
    {rating:5, url:'https://picsum.photos/id/240/100/100',name:'Lucy James', review:'"Loved the place, excellent food. Best dessert in the city."'}
]
  return (
    <Container>
        <Top>
            <span>Testimonials</span>
        </Top>
        <Bottom>
        {User.map((item)=> {
                return(
                <Card key={item.name}>
                    <Rating>
                       <span>Rating:</span> <AiFillStar/>{item.rating}
                    </Rating>
                    <Profile>
                        <div className='mid_section'>
                            <img src={item.url} alt="Person's face"/>
                            <span>{item.name}</span>
                        </div>
                        <Review>
                            <p><b>Review:</b> {item.review}</p>
                        </Review>
                    </Profile>
                </Card>
                )
            })}
        </Bottom>

    </Container>
  )
}

export default Testimonials
const Container = styled.div`
grid-column:3/11;
grid-row:11/14;

`
const Top = styled.div`
height:20%;
: 'Markazi Text', serif;
font-weight:500;
font-size:40px;
text-align:center;

`
const Bottom = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
height:80%;
width:100%;
`
const Card = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
width:24%;
height:100%;
background:#EDEFEE;
padding:2vh;
border-radius:16px;
`
const Rating = styled.div`
display:flex;
align-items:center;
gap:5px;
width:100%;
height:10%;
span{
color:#EE9972;
}
`
const Profile = styled.div`
width:100%;
height:80%;
display:flex;
flex-direction:column;
justify-content:space-around;;
.mid_section{
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-around;
 font-size:18px;
 :'Karla','serif';
 font-weight:700;

}
`
const Review = styled.div`
font-size:16px;
font-weight:300;
:'Karla', 'serif';
`