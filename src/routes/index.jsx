import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Overview,Agents,Articles,Contacts,Ideas,Settings,Tickets,Subsricption } from '../pages'


function CustomRoutes() {
  return (
    <div className='w-[80%] h-[100vh] overflow-y-auto bg-[#f7f8fc]'>
    <Routes>
        <Route path='/' element = {<Overview/>} />
        <Route path='/tickets' element = {<Tickets/>} />
        <Route path='/ideas' element = {<Ideas/>} />
        <Route path='/contacts' element = {<Contacts/>} />
        <Route path='/agents' element = {<Agents/>} />
        <Route path='/articles' element = {<Articles/>} />
        <Route path='/settings' element = {<Settings/>} />
        <Route path='/subsriction' element = {<Subsricption/>} />
    </Routes>
    </div>
  )
}

export default CustomRoutes