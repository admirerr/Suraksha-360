// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Dmlogin from './pages/DM/Dmlogin';
// import Navbar from './pages/Navbar';
// import Register from './pages/Register';
// import Success from './pages/Success';
// import LandingPage from './pages/landingPage';
// import PrivateRoute from './PrivateRoute';
// import DMregister from './pages/DM/DMregister';
// import LandingPageDM from './pages/DM/landingPageDM';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />

//       <Routes>
//         {/* user */}
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         <Route path="/LandingPage" element={<LandingPage />} />

//         {/* DM */}
//         <Route path="/DM/dmlogin" element={<Dmlogin />} />
//         <Route path="/DM/dmregister" element={<DMregister />} />
//         <Route path="/DM/landingPageDM" element={<LandingPageDM />} />

//         <Route path="/" element={<PrivateRoute />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/success" element={<Success />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;




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
import LandingPageDM from './pages/DM/landingPageDM';
import Hosplogin from './pages/Hospital/Hosplogin';
import Hospregister from './pages/Hospital/Hospregister';
import LandingPageHos from './pages/Hospital/landingPageHos';
import Trafficlogin from './pages/Traffic/Trafficlogin';
import Trafficregister from './pages/Traffic/Trafficregister';
import LandingPageTraf from './pages/Traffic/landingPageTraf';
import Transportlogin from './pages/Transport/Transportlogin';
import Transportregister from './pages/Transport/Transportregister';
import LandingPageTrans from './pages/Transport/landingPageTrans';
import DMT from './pages/data/dmt';
import TranT from './pages/data/trant';
import HosT from './pages/data/host';
import TrafT from './pages/data/traft';
import TrafPR from './pages/data/trafPR';
import TrafRR from './pages/data/trafRR';


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
        <Route path="/DM/landingPageDM" element={<LandingPageDM />} />

        {/* Hospital */}
        <Route path="/Hospital/hosplogin" element={<Hosplogin />} />
        <Route path="/Hospital/hospregister" element={<Hospregister />} />
        <Route path="/Hospital/landingPageHos" element={<LandingPageHos />} />

        {/* Traffic */}
        <Route path="/Traffic/trafficlogin" element={<Trafficlogin />} />
        <Route path="/Traffic/trafficregister" element={<Trafficregister />} />
        <Route path="/Traffic/landingPageTraf" element={<LandingPageTraf />} />

        {/* transport */}
        <Route path="/Transport/transportlogin" element={<Transportlogin />} />
        <Route
          path="/Transport/transportregister"
          element={<Transportregister />}
        />
                <Route path="/Transport/landingPageTrans" element={<LandingPageTrans />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />


          <Route path="/data/dmt" element={<DMT />} />
          <Route path="/data/trant" element={<TranT />} />
          <Route path="/data/host" element={<HosT />} />
          <Route path="/data/traft" element={<TrafT />} />
          <Route path="/data/trafPR" element={<TrafPR />} />
          <Route path="/data/trafRR" element={<TrafRR />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
