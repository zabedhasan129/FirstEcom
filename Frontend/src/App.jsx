import React from 'react';
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, } from "react-router-dom";
import Registration from './pages/Registration';
import OtpVarification from './pages/OtpVarification';
import Login from './pages/Login';
import GotoGmail from './pages/GotoGmail';
import Forgetpassword from './pages/Forgetpassword';
import Changepass from './pages/Changepass';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Registration />}
      />
      <Route
        path="/forgetpassword"
        element={<Forgetpassword />}
      />
      <Route
        path="/changepass/:token"
        element={<Changepass />}
      />
      <Route
        path="/gotogmail"
        element={<GotoGmail />}
      />
      <Route
        path="/otpvarification/:email/:otp"
        element={<OtpVarification />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App
