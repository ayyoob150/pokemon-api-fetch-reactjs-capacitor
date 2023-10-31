import React from 'react'

const Card = ({data,index}) => {

  // console.log(data);
  // console.log(index+1);
  return (
    <div className='container'>
    <div className='card-main-container'>
      <div className='card-container' >
        <img className='card-img'  src={(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index}.png`)?`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index}.png` : `logo192.png`} alt='Pokemon'/>
        <div className='card-name'>{data.name.toUpperCase()}</div>
      </div>
    </div>
    </div>
  )
}

export default Card