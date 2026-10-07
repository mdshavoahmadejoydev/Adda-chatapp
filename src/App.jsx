import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';
import RootLayout from './components/RootLayout';
import Massage from './pages/Massage';
import Notifications from './pages/Notifications';
import Setting from './pages/Setting';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration />}> </Route>
    <Route path="/login" element={<Login />}> </Route>

    <Route path="/deshboard" element={<RootLayout />}>
      <Route path="home" element={<Home />}></Route>
      <Route path="massage" element={<Massage />}></Route>
      <Route path="notifications" element={<Notifications />}></Route>
      <Route path="setting" element={<Setting />}></Route>
    
    </Route>

    </>   
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App