// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box } from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage.jsx";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage.jsx";
import HomePage from "./pages/HomePage.jsx";


function App() {
	return (
		<>
		<Box
			minW={"100vw"}
			minH={"100vh"}
			paddingX={"15px"}
			paddingY={"10px"}
			bgColor={"#f0f2f5"}>
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/home' element={<HomePage />} />
			</Routes>
		</Box>
		</>
	);
}

export default App;
