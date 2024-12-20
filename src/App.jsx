import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tables from './pages/Tables'
import Billing from './pages/Billing'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/tables' element={<Tables/>} />
        <Route path='/billing' element={<Billing/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      
    </div>
  )
}

export default App