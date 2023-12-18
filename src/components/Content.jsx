import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import arrow from '/images/icon-source.svg'

const Content = ({data, index}) => {

    const [status, setStatus] = useState('internal')

    const handleOverview = () => {
        setStatus('overview')
    }

    const handleInternal = () => {
        setStatus('internal')
    }

    const handleGeology = () => {
        setStatus('geology')
    }

  return (
    <Container>
      <PlanetInfo>
        <Image>
            { status === 'overview' && <img src={data[index].images.planet} alt={data[index].name} />}
            { status === 'internal' && <img src={data[index].images.internal} alt={data[index].name} />}
            { status === 'geology' && (
                <>
                    <img src={data[index].images.planet} alt={data[index].name} />
                    <GeologyImg src={data[index].images.geology}/>
                </>
            ) }
        </Image>
        <Buttons>
            <h2>{data[index].name}</h2>
            <p className='content'>{data[index].overview.content}</p>
            <Source>Source:
                <LinkSty to={data[index].overview.source} target='_blank'>
                    Wikipedia
                    <img src={arrow} alt="source" />
                </LinkSty> 
            </Source>
            <div className='btn-container'>
                <Button onClick={handleOverview} num='01' content='overview'  color={data[index].color} active={status === 'overview' ? true : false}/>
                <Button onClick={handleInternal} num='02' content='Internal Structure' color={data[index].color} active={status === 'internal' ? true : false}/>
                <Button onClick={handleGeology} num='03' content='Surface Geology' color={data[index].color} active={status === 'geology' ? true : false}/>        
            </div>
        </Buttons>
      </PlanetInfo>

      <PlanetStats>
        <Stats title='ROTATION TIME' stat={data[index].rotation}/>
        <Stats title='REVOLUTION TIME' stat={data[index].revolution}/>
        <Stats title='radius' stat={data[index].radius}/>
        <Stats title='AVERAGE TEMP.' stat={data[index].temperature}/>
      </PlanetStats>

    </Container>
  )
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    padding: 21.2rem 11% 5.6rem;

`

const PlanetInfo = styled.div`
    display: flex;
    justify-content: space-between;
`
const Image = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Buttons = styled.div`
    width: 30%;
    h2{
        color: var(--white);
        font-size: 8rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
    }

    .content{
        color: var(--white);
        font-family: 'League Spartan';
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.5rem;
        width: 27rem;
        margin-top: 2.3rem;
    }
    
    .btn-container{
        display: flex;
        flex-direction: column;
        margin-top: 4rem;
        gap: 1.6rem;
    }
`

const Button = ({num, content, color, active, onClick}) => {
    return(
        <ButtonSty>
            <Btn onClick={onClick} background={active ? color : 'transparent'}>
                <span>{num}</span>
                <p>{content}</p>
            </Btn>
        </ButtonSty>
    )

}

const ButtonSty = styled.div`    
        display: flex;
        flex-direction: column;       
`

const Btn = styled.button`
    display: flex;
    align-items: center;
    height: 4.8rem;
    background-color: ${(props) => props.background};
    border: 1px solid var(--opacity02);
    padding: 1.2rem 2.8rem;
    cursor: pointer;
    &:hover{
        background-color: var(--btnHover);
    }
        span{
            color: var(--opacity05);
            font-family: 'League Spartan';
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 700;
            line-height: 2.5rem;
            letter-spacing: 2.571px;
            text-transform: uppercase;
        }

        p{
            color: var(--white);
            font-family: 'League Spartan';
            font-size: 1.2rem;
            font-style: normal;
            font-weight: 700;
            line-height: 2.5rem;
            letter-spacing: 2.571px;
            text-transform: uppercase;
            margin-left: 2.8rem;
        }   
    
`

const Source = styled.span`
    display: inline-block;
    margin-top: 2.4rem;
    color: var(--opacity05);
    font-family: 'League Spartan';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.5rem;
`
const LinkSty = styled(Link)`
    color: var(--opacity05);
    font-family: 'League Spartan';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.5rem;
    text-decoration-line: underline;
    margin-left: 5px;
    img{
        margin-left: 8px;
    }
`

const PlanetStats = styled.div`
    display: flex;
    gap: 2%;
    margin-top: 8.7rem;
`

const Stats = ({title, stat}) => {
    return(
        <StatItem>
            <span>{title}</span>
            <p>{stat}</p>
        </StatItem>
    )
}

const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 2rem 2.3rem;
    border: 1px solid var(--opacity02);
    width: 23%;
    span{ 
        color: var(--opacity05);
        font-family: 'League Spartan';
        font-size: 1.1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.5rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    p{
        color: var(--white);
        font-size: 4rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -1.5px;
        text-transform: uppercase;
    }    
`

const GeologyImg = styled.img`
    /* display: none; */
    position: absolute;
    top: 35rem;
    left: 50%;
    width: 15.8rem;
    height: 16.5rem;
    z-index: 1;
    transform: translateX(-50%);
`



export default Content