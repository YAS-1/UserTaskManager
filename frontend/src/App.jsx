import React from 'react'
import {Box} from "@chakra-ui/react"
import LoginPage from './pages/LoginPage.jsx'
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage.jsx'

function App() {
  return (
    <Box minW={"100vw"} minH={"100vh"} paddingX={"15px"} paddingY={"10px"} bgColor={"blue.50"}>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
      </Routes>
    </Box>
  )
}

export default App
