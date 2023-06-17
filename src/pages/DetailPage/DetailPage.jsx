import { useState, useEffect} from 'react'

import axios from 'axios'

import CardUser from '../../components/CardUser/CardUser'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const [chars, setChars]= useState([])

    let { detailId } = useParams()

    useEffect(()=>{
        const url = `https://hp-api.onrender.com/api/characters/`;
    
        axios(url)
          .then((datos)=>{
          setChars(datos.data)
        })
          .catch((error) =>{
            console.log('no se ha podido conectar a la api', error)
          })
        
    },[])

    let filtro = chars.filter( char => {return char.image !== "" && char.id === detailId})

  return (
    <div>
        <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        {filtro.map((char) =>{
        return(
          <div className="Card" key={char.id}>
            <CardUser char ={char}/>
          </div>
        )
      })}
    </div>
        
    </div>
  )
}

export default DetailPage