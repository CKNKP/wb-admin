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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<CreateUser />} />
      <Route path="/manage-user" element={<ManageUser />} />
      <Route path="/view-users" element={<ViewUser />} />
      <Route path="/update-user" element={<UpdateUser />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
