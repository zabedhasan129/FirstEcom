import React from 'react';
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider, } from "react-router-dom";
import Registration from './pages/Registration';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Registration />}
      />
      <Route
        path="/otpvarification"
        element={<OtpVarifiacation/>}
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
