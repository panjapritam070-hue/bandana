import React from 'react'
import Main_header from './Header_section/Main_header'
import Home from './Header_section/Home'
import About from './Header_section/About'
import Business_with_us from './Header_section/Business_with_us'
import Products from './Header_section/Products'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Main_header />

      <Routes>

        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Business_with_us />} path='/businesswithus' />
        <Route element={<Products />} path='/products' />

      </Routes>
    </>
  )
}

export default App
