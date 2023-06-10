
import './App.css'
import Navbar from "./components/Nabvar/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"


function App() {

  return (
    <>
      <Navbar/>
      <div>
        <ItemListContainer greeting ="Elemento para la proxima entrega"/>
      </div>
      


     
    </>
  )
}

export default App
