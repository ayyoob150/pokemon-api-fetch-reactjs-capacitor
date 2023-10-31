import React, { useEffect, useState,useContext } from 'react'
import { context } from '../App';


const Pokemon = () => {

  const [pdata, setPdata]=useState()

  const [image, setImage]=useState()






  const {
    data,setData,
    url,setUrl,
    baseUrl,
    pkmurl, setPkmurl,
    list , setList,
    name,setName,
  } = useContext(context);
  const dImage = pdata?.sprites?.other?.home?.front_default;


  // const [alrt , setAlrt] = useState(name)

  useEffect(()=>{
    fetch(pkmurl)
    .then((res)=>res.json())
    .then((data)=>setPdata(data))

  setImage(dImage)

  },[dImage])



  const [but , setBut] = useState("Catch")
  console.log(pdata);
  const inputChange = (e)=>{

    setName(e.target.value)

  }

  const handlerList = () =>{

    if(name === "" || name === "Nick name"){
      alert("Please give a nick name")
      return
    }
   setList(list.concat({...pdata, nick_name : name }))

    setBut("Catched")

  }

  // console.log(but);

  return (<>
  
    <div className='product-con'>
    <div className= 'name-img'>{pdata?.name.toUpperCase()}</div>

    <div className='product-uncon'>

    
    <img className='big-img' src={image ? image : `logo192.png` } height="400px" width='450px' alt='pokemon'/>

    <div className='s-con' >
    <img  className='s-img-con' onMouseOver={()=>setImage(pdata?.sprites?.other?.home?.front_default)} src={(pdata?.sprites?.other?.home?.front_default)? pdata?.sprites?.other?.home?.front_default : `logo192.png` } alt='pokemon'/>
    <img className='s-img-con' onMouseOver={()=>setImage(pdata?.sprites?.other?.dream_world.front_default)} src={ (pdata?.sprites?.other?.dream_world.front_default) ? pdata?.sprites?.other?.dream_world.front_default : `logo192.png`}  alt='pokemon'/>
    <img className='s-img-con' onMouseOver={()=>setImage(pdata?.sprites?.other?.home?.front_shiny)} src={ (pdata?.sprites?.other?.home?.front_shiny)? pdata?.sprites?.other?.home?.front_shiny : `logo192.png`}  alt='pokemon'/>
    <img className='s-img-con' onMouseOver={()=>setImage(pdata?.sprites?.back_shiny)} src={ (pdata?.sprites?.back_shiny)? pdata?.sprites?.back_shiny : `logo192.png`}  alt='pokemon'/>
    </div>

    </div>
    <h2>Details & Catch</h2>
    </div>

<div  className='ability'>
    <div >
      <h2>Abilities</h2>
      {
        pdata?.abilities?.map((el , i)=><div key={i} >{el.ability.name}</div>
        )
      }
    </div>

    <div>
      <h2>Forms</h2>
      {
        pdata?.forms?.map((el , i)=><div key={i} >{el.name}</div>
        )
      }
    </div>

    <div>
      <h2>Moves</h2>
      {
        pdata?.moves?.slice(0,8).map((el , i)=><div key={i} >{el.move.name}</div>
        )
      }
    </div>

    </div>

    <div className='location'>

    {(pdata?.held_items.length !== 0 ) &&<div>
      <h2>Held Items</h2>
      {
        pdata?.held_items?.map((el , i)=><div key={i} >{el.item.name}</div>
        )
      }
    </div>}

    <div>
      <h2>Weight</h2>
      <div>{pdata?.weight}</div>
    </div>
    <div>
      <h2>Height</h2>
      <div>{pdata?.height}</div>
    </div>

    </div>

    <div className='catch'>
    <h3  >
      Catch Your Pokemon - {name}
    </h3>
    </div>

    <div className='input'>
      <input className='catch-input' onChange={(e) =>inputChange(e)} type='text' placeholder='Nick name' />
      <button className='catch-btn' disabled={(but==="Catched")?true:false} onClick={handlerList}>{but}</button>
    </div>

    </>
  )
}

export default Pokemon