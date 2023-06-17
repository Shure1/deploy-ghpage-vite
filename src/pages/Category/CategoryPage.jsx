import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CardUser from "../../components/CardUser/CardUser";

const CategoryPage = () => {
    const [chars, setChars]=useState([]);

    let {categoryId} = useParams();

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

    let filtro = chars.filter( char => {return char.image !== "" && char.house === categoryId})
   

   
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

export default CategoryPage