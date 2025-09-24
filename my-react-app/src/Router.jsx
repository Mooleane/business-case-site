import {BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home.jsx'
import Resources from './Resources.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Resources" element={<Resources />} />
				<Route path="/Signup" element={<Signup />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}