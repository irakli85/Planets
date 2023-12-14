import React from 'react'
import styled from 'styled-components'
import data from '../data.json'

const Header = ({onClick}) => {
  
  return (
    <Heading>
      <Name>the planets</Name>
      <Nav>
        {data.map((i, index) => <NavItem onClick = {onClick} key={i.name} id={index}>{i.name}</NavItem>)}
      </Nav>
    </Heading>
  )
}

const Heading = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.2rem 3.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const Name = styled.h2`
  color: var(--white);
  font-family: "Antonio";
  font-size: 2.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.3rem;
`

const NavItem = styled.p`
  color: var(--white);
  font-family: 'League Spartan', sans-serif;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
`

export default Header