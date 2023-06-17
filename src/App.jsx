
import './App.css'
import Navbar from "./components/Nabvar/Navbar.jsx"

//react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage/HomePage";
import CategoryPage from './pages/Category/CategoryPage';
import DetailPage from "./pages/DetailPage/DetailPage"



function App() {
  
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/category/:categoryId" element={<CategoryPage/>}/>
          <Route path="/detail/:detailId" element={<DetailPage/>}/>
         
        </Routes>
      
      
      </div>
    </Router>
    
      
      
      
      


     
    
  )
}

export default App
