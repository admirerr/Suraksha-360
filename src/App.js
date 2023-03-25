import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Dmlogin from './pages/DM/Dmlogin';
import Navbar from './pages/Navbar';
import Register from './pages/Register';
import Success from './pages/Success';
import LandingPage from './pages/landingPage';
import PrivateRoute from './PrivateRoute';
import DMregister from './pages/DM/DMregister';
import Hosplogin from './pages/Hospital/Hosplogin';
import Hospregister from './pages/Hospital/Hospregister';
import Trafficlogin from './pages/Traffic/Trafficlogin';
import Trafficregister from './pages/Traffic/Trafficregister';
import Transportlogin from './pages/Transport/Transportlogin';
import Transportregister from './pages/Transport/Transportregister';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* user */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/LandingPage" element={<LandingPage />} />

        {/* DM */}
        <Route path="/DM/dmlogin" element={<Dmlogin />} />
        <Route path="/DM/dmregister" element={<DMregister />} />

        {/* Hospital */}
        <Route path="/Hospital/hosplogin" element={<Hosplogin />} />
        <Route path="/Hospital/hospregister" element={<Hospregister />} />

        {/* Traffic */}
        <Route path="/Traffic/trafficlogin" element={<Trafficlogin />} />
        <Route path="/Traffic/trafficregister" element={<Trafficregister />} />

        {/* transport */}
        <Route path="/Transport/transportlogin" element={<Transportlogin />} />
        <Route
          path="/Transport/transportregister"
          element={<Transportregister />}
        />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
