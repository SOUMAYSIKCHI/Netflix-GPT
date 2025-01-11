import React, { useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import { Body } from './Pages/Body'
import Browse from './Pages/Browse'
import PrivateRoute from './Pages/PrivateRoute'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Body/>} />
      <Route path='/*' element={<NotFound/> }/>
      <Route path='/browse' element={
        <PrivateRoute>
           <Browse/>
        </PrivateRoute>
      }/>
    </Routes>
  )
}

export default App