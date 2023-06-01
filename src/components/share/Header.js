import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { styled } from 'styled-components'

const Hero = styled.div `
background:url("../../bg.jpg") no-repeat center;
background-size:cover;
color : #fff;
font-size:20 px;
text-align:center;
display:grid;
grid-template-columns:10 px 2 fr 10px;
grid-template-rows:5fr 1fr 20px;
grid-gap:20px;
img{
    margin : auto;
    padding-top:1 rem;
    grid-columns :2/3;
    grid-row:1/2;
    height:165px;
}
article{
    grid-columns:2/3;
    grid-row:2/3;
}
article p{
    font-size:18px;
    font-weight:600;
    line-height:22px;
    color : white;
}
h2{
    font-size:1rem;
    text-transform:uppercase;
    font-weight:600;
}
button{
    background-color :#fff;
    border-radius :4px;
    border :#fff;
    color: #2abadf;
    font-size:1rem;
    padding:5px 10px;
    margin:0.75rem auto 0;
    cursor:pointer;
}
`

const Header = () => {
  return (
    <Hero>
        <img src='../../logo512.png' alt='ini backgorundnya'/>
        <article>
            <h2>
                Welcome to Ade Kurniawan
            </h2>
            <p>masih di pikir</p>
            <button>get started<FontAwesomeIcon icon={faAngleDoubleRight}/></button>
        </article>
    </Hero>
  )
}

export default Header
