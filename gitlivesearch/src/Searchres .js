import React from 'react'
import "./serc.css"

const Searchres  = (props) => {

    const image =  `https://source.unsplash.com/400x300/? ${props.name}`;

  

    return (
        <div className='adiv'>


             <div className="wrpares">

            
              <h1 style={{textAlign:"center" ,color:"#fff"}}>this is search {props.name}</h1>
             <img src={image} alt="" />

             <button>doownload my immage</button>
             </div>
             
        </div>
         

    )
}

export default Searchres ;
