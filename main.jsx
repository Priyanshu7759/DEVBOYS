import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import "./index.css";
import BecomeTheTutor from "./components/BecomeTheTutor/BecomeTheTutor.jsx";
import TutorSignUp from "./components/TutorSignUp/TutorSignUp.jsx";
import TutorDashboard from "./components/DashBoard/TutorDashboard.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<Home />}></Route>
      <Route path="SignUp" element={<SignUp />}></Route>
      <Route path="BecomeTheTutor" element={<BecomeTheTutor />}></Route>
      <Route path="TutorSignup" element={<TutorSignUp />}></Route>
      <Route path="TutorDashboard" element={<TutorDashboard />}></Route>

      <Route path="*" element={<div>Not Found</div>}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>{<RouterProvider router={router} />}</StrictMode>
);
