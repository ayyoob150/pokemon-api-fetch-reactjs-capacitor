import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import { context } from '../App';

const Home = () => {
  const {
    data,setData,
    url,setUrl,
    baseUrl,
    pkmurl, setPkmurl,
    setName,
    ind , setInd
  } = useContext(context);

  // console.log(data);

  const pokemonhandler =(pkurl)=>{
    setPkmurl(pkurl)
    setName("Nick name")
  }

    const handler =()=>{
      setInd(ind+20)
      setUrl(data.next)
    }
  
    const prehandler =()=>{
      setInd(ind-20)
      setUrl(data.previous)
    }
  
  return (
    <div className='home'>
      {
        data?.results.map((el,i)=>
        <Link key={i} onClick={()=>pokemonhandler(el.url)} to='/pokemon-one'>
      <Card  data={el} index={i+ind+1}/>
    </Link>
        )
    
}
      <div className='float'>
         {(data?.previous != null) && <button className='page-button' onClick={prehandler}>Previous</button>}
         <button className='page-button' onClick={handler}>
            Next
         </button>
      </div>
    </div>
  )
}

export default Home