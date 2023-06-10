
import CarWidget from "../Car-Widget/CarWidget"
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
        <body>
            <header>
                <a  href="#" className="logo">Foods</a>
                <div id="menu-icon"><MenuIcon/></div>

                <ul className="navbar">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#"><CarWidget/></a></li>
                </ul>



            </header>
        </body>
        
        
        
        
    </>
    
  )
}

export default Navbar