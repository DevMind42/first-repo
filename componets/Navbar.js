
import { NavBar } from "../styles/NavBar.style";
const Navbar=()=>{
   const Active =()=>{
   const bar = document.querySelector(".menu");
   const links = document.querySelector(".links");
   bar.classList.toggle("active");
   links.classList.toggle("active");
   };
      return(
     <NavBar bg="green">
      <div className="nav">
        <h1 className="logo">DEV<span className="logospan">-</span>MIND</h1>
        <div className="navtitles">
          <ul className="links">
            <li className="item">Home</li>
            <li className="item">Tutorials</li>
            <li className="item">PDF</li>
          </ul>
        </div>
        <div className='searchContainer'>
        <div className='searchBar'>
            <input className='search' placeholder='Search' typeof='search'></input>
        </div>
        <div className='searchBtn'>
            <button className='searchBtn'>Search</button>
        </div>
        <div>
          <p className="show"></p>
        </div>
        </div>
        <div className="menu" onClick={Active}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
     </NavBar>
    )
  }
export default Navbar