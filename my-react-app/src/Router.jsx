import {BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home.jsx'
import Resources from './Resources.jsx'
import Signup from './Signup.jsx'
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import Dashboard from './Dashboard.jsx'
import CareerRecommendations from './CareerRecommendations.jsx'
import TrendTracker from './TrendTracker.jsx'

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Resources" element={<Resources />} />
				<Route path="/Signup" element={<Signup />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Profile" element={<Profile />} />
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Career-Recommendations" element={<CareerRecommendations />} />
				<Route path="/Trend-Tracker" element={<TrendTracker />} />
			</Routes>
		</BrowserRouter>
	)
}