import React,{useState} from 'react'
import Searchres from './Searchres ';
import "./App.css"



const Search  = () => {

    const [input, setinput] = useState("");
    const events=(e)=>{


       
        setinput(e.target.value);

    }
    return (
        <div className='search_bar'>
        <div className="input">
        <input type="text"  placeholder='search any items' onChange={events} value={input} />


        </div>

         
               <div className="output">

                  {(input !== "") ?  <Searchres name={input} /> : <li className='li'>not any search</li>}


                  {/* {

                      if(input !== ""){

                          return ( <Searchres name={input} /> )
                      }else{

                          return<li className='li'>not any </li>
                      }
                  } */}



               </div>
              
        </div>
    )
}

export default Search ;
