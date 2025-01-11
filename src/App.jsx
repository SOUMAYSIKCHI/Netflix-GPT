import React from 'react'
import { Route,Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import { Body } from './Pages/Body'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Body/>} />
      <Route path='/*' element={<NotFound/> }/>
    </Routes>
  )
}

export default App