import React from 'react'
import { Link } from 'react-router-dom'
import source from '../assets/icon-source.svg'
import { Main, Container, ImgCont, InfoCont, H1, P, SourceCont, SourceSpan, WikiSpan, BtnCont, Btn, BtnSpan1, BtnSpan2, StatsCont, StatsItemSty, StatsSpan1, StatsSpan2 } from './styledComponents/StyledComponents' 

const Content = ({data, index}) => {
  return (
    <Main>

      <Container>
        <ImgCont>
          <img src={`../src/assets/${data[index].images.planet}`} alt={data[index].images.planet} />
        </ImgCont>

        <InfoCont>
          <H1>{data[index].name}</H1>
          <P>{data[index].overview.content}</P>

          <SourceCont>
            <SourceSpan>Source :</SourceSpan>
            <Link to={data[index].overview.source}>
              <WikiSpan> Wikipedia </WikiSpan>
              <img src={source} alt="source" />              
            </Link>
          </SourceCont>

          <BtnCont>
            <Button num='01' desc='OVERVIEW'/>
            <Button num='02' desc='Internal Structure'/>
            <Button num='03' desc='Surface Geology'/>
          </BtnCont>

        </InfoCont>

      </Container>

      <StatsCont>
        <StatsItem title='ROTATION TIME' stats={data[index].rotation}/>
        <StatsItem title='REVOLUTION TIME' stats={data[index].revolution}/>
        <StatsItem title='radius' stats={data[index].radius}/>
        <StatsItem title='AVERAGE TEMP.' stats={data[index].temperature}/>      
      </StatsCont>

    </Main>
  )
}

const StatsItem = ({title, stats}) => {
  return(
    <StatsItemSty>
      <StatsSpan1>{title}</StatsSpan1>
      <StatsSpan2>{stats}</StatsSpan2>
    </StatsItemSty>
  )
}

const Button = ({num, desc}) => {
  return(
    <Btn>
      <BtnSpan1>{num}</BtnSpan1>
      <BtnSpan2>{desc}</BtnSpan2>
    </Btn>
  )
}

export default Content

