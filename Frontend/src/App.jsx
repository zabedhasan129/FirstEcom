import React from 'react';
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, } from "react-router-dom";
import Registration from './pages/Registration';
import OtpVarification from './pages/OtpVarification';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Registration/>}
      />
      <Route
        path="/otpvarification/:email"
        element={<OtpVarification/>}
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
