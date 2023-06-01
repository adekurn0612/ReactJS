import React from 'react'
import {Outlet} from "react-router-dom"
import Nav from './nav'
import { styled } from 'styled-components'
import Sidebar from './sidebar'
import Main from './main'
import Fotter from './fotter'
import Header from './Header'


const Layout = () => {
  const MainSidebar =styled.div`
  display :grid;
  margin :1rem auto;
  grid-template-columns:180px 2fr;
  grid-template-areas:"aside main main";
  
  aside{
    grid-area:aside;
  }
  main{
    grid-area:main;
  }
`


  return (
    <>
    <div>
      <Header/>
        <Nav/>
        <MainSidebar>
        <Sidebar/>
        <Main>
         {<Outlet />}
        </Main>
        </MainSidebar>
        <Fotter/>
    </div>
    </>
  )
}

export default Layout
