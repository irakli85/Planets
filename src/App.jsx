import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import GlobalStyles from "./components/styledComponents/GlobalStyles";
import data from './data.json'

function App() {
  const [index, setIndex] = useState(0) 

  return (
    <>
      <GlobalStyles/>
      <Header onClick={e => setIndex(e.target.id)}/>
      <Content data={data} index={index}/>       
    </>
  )
}

export default App
