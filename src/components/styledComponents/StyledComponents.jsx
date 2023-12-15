import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-inline: 11.45%;
  padding-top: 21.2rem;
  padding-bottom: 5.6rem; 
`

export const H1 = styled.h1`
  color: var(--white);
  font-family: "Antonio";
  font-size: 8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
`

export const P = styled.p`
  margin-top: 2.3rem;
  color: var(--white);
  font-family: 'League Spartan', sans-serif; 
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
  `

 export const ImgCont = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 60%;
 ` 

 export const SourceSpan = styled.span`
  color: rgba(255, 255, 255, 0.2);
  font-family: 'League Spartan', sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.5rem;
 `

 export const WikiSpan = styled(SourceSpan)`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  text-decoration-line: underline;
 `

 export const SourceCont = styled.div`
  margin-top: 2.4rem;
 `
export const BtnCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.9rem;
  gap: 1.6rem;
`

export const Btn = styled.div`
  width: 350px;
  height: 4.8rem;
  background-color: transparent;
  padding-left: 2.8rem;
  display: flex;
  align-items: center;
  gap: 2.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  &:hover{
    background-color: rgba(216, 216, 216, 0.2)
  }
  background: ${(props) => props.background}

`

export const BtnSpan1 = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'League Spartan', sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 2.571px;
  text-transform: uppercase;
`

export const BtnSpan2 = styled(BtnSpan1)`
  color: var(--white);
`

export const StatsCont = styled.div`
  display: flex;
  margin-top: 8.7rem;
  gap: 3rem;
`

export const StatsItemSty = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  width: 25.5rem;
  height: 12.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  gap: 4px;
`

export const StatsSpan1 = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: 'League Spartan', sans-serif;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const StatsSpan2 = styled.span`
  color: #FFF;
  font-family: 'Antonio';
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -1.5px;
  text-transform: uppercase;
`
