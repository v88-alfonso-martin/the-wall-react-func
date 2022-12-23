import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/login/login";
import Signup from "./views/signup/signup";
import Wall from "./views/wall/wall";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />}></Route>
				<Route exact path="/signup" element={<Signup />}></Route>
				<Route exact path="/wall" element={<Wall />}></Route>
			</Routes>
		</Router>	
	);
}