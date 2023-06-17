import  { useState, useEffect } from "react";
import axios from "axios";
import CardUser from "../CardUser/CardUser";

import "./ItemlistContainer.css"
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [chars, setChars] = useState([]);

console.log(`listado de objetos: ${chars}`)
  useEffect(()=>{
    const url = 'https://hp-api.onrender.com/api/characters';

    axios(url)
      .then((datos)=>{
      setChars(datos.data)
    })
      .catch((error) =>{
        console.log('no se ha podido conectar a la api', error)
      })
    
  },[])

  let filtro = chars.filter( char => {return char.image !== ""})

  console.log(chars)
  return (
    <div className="listado">
      {filtro.map((char) =>{
        return(
          <div className="Card" key={char.id}>
            <Link to ={`detail/${char.id}`}>
              <CardUser char ={char}/>
            </Link>
            
          </div>
        )
      })}
       
    </div>
  )
}


export default ItemListContainer