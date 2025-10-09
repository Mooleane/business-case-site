import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Resources from './pages/Resources.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CareerRecommendations from './pages/CareerRecommendations.jsx'
import TrendTracker from './pages/TrendTracker.jsx'

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