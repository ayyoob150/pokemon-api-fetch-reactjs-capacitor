import './App.css';
import {  Routes,Route, BrowserRouter } from 'react-router-dom';
import Layout from './componant/Layout';
import Pokemon from './componant/Pokemon';
import Home from './componant/Home';
import React, {createContext, useEffect, useState } from 'react'
import Catch from './componant/Catch';

export const context = createContext(null);

function App() {
  const [data, setData] = useState();
  const [pkmurl, setPkmurl] = useState();

  const [list, setList] = useState([]);
  const [name, setName] = useState('Nick name');
  const [ind , setInd] = useState(0);



  
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const [url , setUrl] = useState(baseUrl);


  useEffect(()=>{
    fetch(`${url}`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[url])

  return (
    <context.Provider value = {
      {
        data, setData,
        url , setUrl,
        baseUrl,
        pkmurl, setPkmurl,
        list, setList,
        name,setName,
        ind , setInd
      }
    }>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path='/pokemon-one' element={<Pokemon/>}/>
       <Route path='/catch' element={<Catch/>}/>
     </Route>
    </Routes>
  </BrowserRouter> 
   
    </context.Provider>
  );
}

export default App;
