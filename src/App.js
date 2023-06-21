import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import { Suspense } from "react";
import { lazy } from "react";
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login/login"));
const Register = lazy(() => import("./pages/register/register"));
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
