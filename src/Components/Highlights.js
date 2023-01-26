import React from 'react'
import styled from 'styled-components';
import { MdDirectionsBike } from 'react-icons/md';


function Highlights() {

const CardData=[
    {img:'./icons_assets/greek salad.jpg',alt:'Greek Salad',title:'Greek Salad',price:'12.99',description:'The famous grook salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons.'},
    {img:'./icons_assets/bruchetta.svg',alt:'Bruchetta',title:'Bruchetta',price:'5.99',description:'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'},
    {img:'./icons_assets/lemon dessert.jpg',alt:'Lemon Dessert',title:'Lemon Dessert',price:'5.00',description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"}
]
  return (
    <Container id='menu'>
        <Top>
            <SectionTitle>
                This week's specials!
            </SectionTitle>
            <button>Online Menu</button>
        </Top>
        <Bottom>
            {CardData.map((item)=> {
                return(
                <Card key={item.title}>
                    <Image>
                        <img src={item.img} alt={item.alt}/>
                    </Image>
                    <Title>
                        <div>
                        {item.title}
                        </div>
                        <div className='price'>
                        {item.price}
                        </div>
                    </Title>
                    <Description>
                        {item.description}
                    </Description>
                    <Order>
                        <div>
                        <a href='#'>Order a delivery</a>
                        </div>
                        <div>
                        <MdDirectionsBike id='icondelivery'/>
                        </div>
                    </Order>
                </Card>
                )
            })}
        </Bottom>
    </Container>
  )
}

export default Highlights

const Container = styled.div`
grid-column:3/11;
grid-row:5/10;
`
const Top = styled.div`
width:100%;
height:20%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:flex-end;
button{
    width:25%;
    height:40%;
    border-radius:15px;
    background-color:#F4CE14;
    font-size:24px;
    font-weight:600;
    cursor:pointer;
    &:hover{
     opacity:0.8;
     border:2px solid black;
    }
`
const SectionTitle = styled.text`
font-size:40px;
font-family:'Karla', 'serif'
font-weight:800;
`
const Bottom = styled.div`
width:100%;
height:80%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
const Card = styled.div`
margin-top:10vh;
width:30%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
background:#EDEFEE;
border-top-left-radius:16px;
border-top-right-radius:16px;
`
const Image = styled.div`
width:100%;
height:40%;
img{
    border-top-left-radius:16px;
    border-top-right-radius:16px;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
`
const Title = styled.div`
font-size:18px;
font-family:'Karla','serif';
font-weight:700;
padding:2vh;
display:flex;
justify-content:space-between;

.price{
    color:#EE9972
}
`
const Description = styled.div`
padding:2vh;
`
const Order = styled.div`
display:flex;
flex-direction:row;
padding:2vh;
gap:10px;

a{
    text-decoration:none;
    color:#333333;
    &:hover{
        color:#F4C14E;
    }
}
&:hover{
    color:#F4C14E;
}
`