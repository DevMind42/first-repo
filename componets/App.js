import React from "react";
import Navbar from "./Navbar";
import { Foot } from "./Footer";
import { Photo } from "../styles/Container.style";
import { GlobalStyles } from "../styles/GlobalStyles.styled";
function App(){
    return(
      <>
      <div>
        <GlobalStyles/>
        <Navbar/>
      </div>

      <div>
        <Photo src="./images/adidas.jpg" alt=""/>
      </div>
       <footer>
        <Foot/>
       </footer>
      </>

    )
  }

export default App