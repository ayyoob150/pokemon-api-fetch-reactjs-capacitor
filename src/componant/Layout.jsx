import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import Pokemon from './Pokemon'
import { Link } from 'react-router-dom'
import { context } from '../App'

const Layout = () => {
  const {list} = useContext(context)
  return (
    <>
    <div className='navBar'>
      <div  className='logo-con'>
      <img className='logo-p' src='logo.png' alt='logo'/>
      <Link to={'/'}><span className='logo-n'><span className='p'>P</span>okemon</span></Link>  
      <Link to={'/catch'}><div className='navCart'>Catch {list.length}</div></Link>
      </div>
      {/* <div className='logo-p'>Pokemon</div> */}
    </div>
    <Outlet/>
    </>
  )
}

export default Layout