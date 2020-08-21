import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFrown} from '@fortawesome/free-solid-svg-icons'

const Ciudad = (props) =>{
    
    if (props.ciudad === "vacio"){
        return( 
            <>  
                <div className="mensajeError">
                    <h1>Ups!</h1>
                    <FontAwesomeIcon className="carita" icon={faFrown}/>
                    <h2>No city found</h2>
                </div>
                
            </>
        )
    }else if(props.ciudad.nombre!== []){
        if (props.ciudad.nombre.includes(" ")){
            var nombreLimpio = props.ciudad.nombre.toLowerCase().replace(/\s/g, '-')
            
        }else if(!props.ciudad.nombre.includes(" ")){
            var nombreLimpio = props.ciudad.nombre.toLowerCase()
        }
        var foto = require(`../images/${nombreLimpio}1.jpg`)
        return(
            <>  
                
                <div className ="ciudadFiltro" style={{backgroundImage: `url(${foto})`}}>
                <li>{props.ciudad.nombre + ", "+props.ciudad.pais +"."}</li>
                </div>
            </>
        )
    }
}

export default Ciudad