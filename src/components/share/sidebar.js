import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Sidebarstyled=styled.aside`
background-color:#F7F7F7;
ul{
    list-style-type:none;
}
ul li a{
    display:inline-block;
    text-decoration:none;
    width:60%;
    padding:0% .75rem 1rem;
    color:#212f54;
    border-bottom:solid 1px rgba{255,255,255, .5rem};
    transition:0ms .14s ease-in-out;
}
li a:hover{
    color:#36bae6;
    background:#e0e5eb;
}

`

const Sidebar = (props) => {
  return (
    <Sidebarstyled>
        <ul>
            <li>
                <Link to="/calculator">Calculator</Link>
            </li>
            <li>
                <Link to="/listproduct">List product</Link>
            </li>
            <li>
                <Link to="/dataobject">Data object</Link>
            </li>
        </ul>
    </Sidebarstyled>
  )
}

export default Sidebar
