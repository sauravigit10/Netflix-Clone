import React from 'react'
import Home from './Pages/Home/Home'
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/player/Player'
import { getDatabase } from 'firebase/database'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/player/:id' element={<Player/>}></Route>
      </Routes>
    </div>
  )
}

export default App