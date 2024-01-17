// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaxiBooking from './Components/TaxiBooking/TaxiBooking';
import { SignUp } from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';
import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import BookingDetail from './Components/Bookingetails/Bookingetails';
import CoustomerInput from './Components/CoustomerInput/CoustomerInput';
import CBookingetails from './Components/CBookingetails/CBookingetails';
import SetTime from './Components/SetTime/SetTime';
import SelectVehicle from './Components/SelectVahicle/Selectvahicle';
import InputDetail from './Components/InputDetail/InputDetails';
import AdminDash from './Components/AdminDash/Adimdash';
import Addvehicle from './Components/AdminAddVehical/Addvehicle';
import AdminAddDrives from './Components/AdminAddDrives/AdminAddDrives';
import AdminAddClients from './Components/AdminAddClients/AdminAddClients';
import AdminBokingDetails from './Components/AdminBokingDetails/AdminBokingDetails';
import { BookingProvider } from './Components/BookingContext/BookingContext';
import CancelBooking from './Components/CancelBooking/CancelBooking';
import AdminDashboad from './Components/AdminDashboad/AdminDashboad';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <BookingProvider> {/* .. */}
          <Routes>
            <Route path="/" element={<TaxiBooking />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/Nav" element={<Nav />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/BookingDetails" element={<BookingDetail />} />
            <Route path="/CoustomerInput" element={<CoustomerInput />} />
            <Route path="/CBookingetails" element={<CBookingetails />} />
            <Route path="/CancelBooking" element={<CancelBooking />} />
            <Route path="/SetTime" element={<SetTime />} />
            <Route path="/SelectVehicle" element={<SelectVehicle />} />
            <Route path="/InputDetail" element={<InputDetail />} />
            <Route path="/AdminDash" element={<AdminDash />} />
            <Route path="/Addvehicle" element={<Addvehicle />} />
            <Route path="/AdminAddDrives" element={<AdminAddDrives />} />
            <Route path="/AdminAddClients" element={<AdminAddClients />} />
            <Route path="/AdminDashboad" element={<AdminDashboad />} />
            <Route path="/Admin" element={<Admin />} />

          </Routes>
        </BookingProvider>
      </Router>
    </div>
  );
}

export default App;
