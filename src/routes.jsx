import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Resources from './pages/Resources.jsx'
// import Signup from './pages/Signup.jsx'
// import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CareerRecommendations from './pages/CareerRecommendations.jsx'
import TrendTracker from './pages/TrendTracker.jsx'
import FeatureOverview from './pages/FeatureOverview.jsx'
// import Settings from './pages/Settings.jsx'
// import TermsOfService from './pages/TermsOfService.jsx'

export default function routes() {
	return (
		<div className="page-content">
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Resources" element={<Resources />} />
				<Route path="/features" element={<FeatureOverview />} />
				{/* Disabled for now (zero functionality). */}
				{/* <Route path="/Signup" element={<Signup />} />
				<Route path="/Login" element={<Login />} /> */}
				<Route path="/Profile" element={<Profile />} />
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/Career-Recommendations" element={<CareerRecommendations />} />
				<Route path="/Trend-Tracker" element={<TrendTracker />} />
				{/* Disabled for now (zero functionality). */}
				{/* <Route path="/Settings" element={<Settings />} /> */}
				{/* <Route path="/terms-of-service" element={<TermsOfService />} /> */}
			</Routes>
		</BrowserRouter>
		</div>
	)
}