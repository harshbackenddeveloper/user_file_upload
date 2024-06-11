import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../Pages/Index';
import Login from '../Common/Login';
import GuestRoute from '../Common/GuestRoute/GuestRoute';
import PrivateRoute from '../Common/PrivateRoute/PrivateRoute';
import CreateLink from '../Pages/CreateLink';
import ThankYou from '../Pages/ThankYou';
import ForgetPassword from '../Pages/ForgetPassword';
import Conframp from '../Pages/Conframp';
import UploadDetails from '../Pages/UploadDetails';

export default function Routing() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GuestRoute> <Login /> </GuestRoute>} />
          <Route path='/dashboard' element={<PrivateRoute> <Index /> </PrivateRoute>} />
          <Route path='/createlink' element={<PrivateRoute> <CreateLink /> </PrivateRoute>} />

          {/* coomon route user can access without login */}
          <Route path='/thankyou' element={<ThankYou />} />
          <Route path="/uploadDetails/:key" element={<UploadDetails />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/confirmpassword/:token" element={<Conframp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}