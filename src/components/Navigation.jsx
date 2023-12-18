import React from 'react'
import styled from 'styled-components'
import data from '../data.json'

const Navigation = ({onClick}) => {
  return (
    <Header>
        <p>THE PLANETS</p>
        <nav>
            {data.map((item, i) => <NavItem onClick={onClick} id={i} background={item.color} key={item.name}>{item.name}</NavItem>)}
        </nav>
    </Header>
  )
}

const Header = styled.header`
    padding: 2.2rem 3.2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--opacity02);
    p{
        color: var(--white);
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -1.05px;
        text-transform: uppercase;
    }

    nav{
        display: flex;
        gap: 3.3rem;
        align-items: center;       
    }
`

const NavItem = styled.span` 
        color: var(--white);
        font-family: 'League Spartan';
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.5rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        transition: all 0.2s ease-in-out;
        &:hover::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 4px;
            background-color: ${(props) => props.background};
            top: -2.8rem;
            left: 0;            
        }        
`

export default Navigation