import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Page from './pages/page'

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/page" element={<Page />} />
  </Routes>
)

export default RoutesPages
