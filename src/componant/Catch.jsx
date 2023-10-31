import React, { useContext } from 'react'
import { context } from '../App'

const Catch = () => {
  const { list, setList} = useContext(context)

  const remove =(n)=>{
     const newList = list.filter((el)=>(
      el.name !== n
     ))
     setList(newList)
  }
  return (
    <div>
      <div className='heading'>
      <div>Id</div>
        <div>Nick name</div>
        <div>Spacies</div>
        <div>Image</div>
        <div>Delete</div>

      </div>
     
      {list?.map((el, i)=><div className='table' key={i}>
        <div>{i+1}</div>
        <div>{el.nick_name}</div>
        <div>{el.name}</div>
        <div><img width='80px' src={(el?.sprites?.other?.home?.front_default)? el?.sprites?.other?.home?.front_default : `logo192.png` } alt='pokemon'/></div>
        <button onClick={()=>remove(el.name)} className='catch-btn'>Remove</button>
      </div>)}
    </div>
  )
}

export default Catch