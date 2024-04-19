import React from "react";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser.jsx";
import ManageUser from "./components/ManageUser/ManageUser.jsx";
import ViewUser from "./components/ViewUser/ViewUser.jsx";
import UpdateUser from "./components/UpdateUser/UpdateUser.jsx";
import LoginUser from "./components/Login/LoginUser.jsx";
import HomePage2 from "./components/HomePages/HomePage2.jsx";
import HomePage3 from "./components/HomePages/HomePage3.jsx";
import HomePage5 from "./components/HomePages/HomePage5.jsx";
import ResetPassword from "./components/ResetPassword/ResetPassword.jsx";
import HomePage1 from "./components/HomePages/HomePage1.jsx";
import Header from "./components/Header/Header.jsx";
import Vehicle from "./components/Vehicle/Vehicle.jsx";
import Transporter from "./components/Transporter/Transporter.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginUser />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/manage-user" element={<ManageUser />} />
      <Route path="/view-users" element={<ViewUser />} />
      <Route path="/update-user" element={<UpdateUser />} />
      <Route path="/home1" element={<HomePage1 />} />
      <Route path="/home2" element={<HomePage2 />} />
      <Route path="/home3" element={<HomePage3 />} />
      <Route path="/home5" element={<HomePage5 />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/header" element={<Header />} />
      <Route path="/vehicle" element={<Vehicle />} />
      <Route path="/transporter" element={<Transporter />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
