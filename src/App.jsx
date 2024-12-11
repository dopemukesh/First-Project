import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Members from './Components/Pages/Members'
import Resources from './Components/Pages/Resources'
import Store from './Components/Pages/Store'
import About from './Components/Pages/About'
import Loader from './Loader'

const App = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App