import { useState } from "react";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import GlobalStyles from "./components/styledComponents/GlobalStyles";
import data from './data.json'


function App() {
  const [index, setIndex] = useState(0);
  
  const handleClick = (e) => {
    index !== e.target.id && setIndex(e.target.id);
  }

  return (
    <>
      <GlobalStyles/>
      <Navigation onClick={handleClick}/>
      <Content data={data} index={index}/>
    </>
  )
}

export default App
