import "./Navbar.css"

import { Link } from "react-router-dom";
import img from "./logo.png"

const Navbar = () => {
  return (
    <>
       
          
          <nav className="navbar">
            <div className="logo">
              <Link className="a" to="/">
                <img src={img} alt="" />
              </Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/category/Gryffindor">
                  Gryffindor
                </Link>
              </li>
              
              <li>
                <Link to="/category/Slytherin">
                  Slytherin
                </Link>
              </li>
              
              <li>
                <Link to="/category/Ravenclaw">
                  Ravenclaw
                </Link>
              </li>
              
              <li>
                <Link to="/category/Hufflepuff">
                  Hufflepuff
                </Link>
              </li>
            </ul>
          </nav>



            
        
        
        
        
        
    </>
    
  )
}

export default Navbar