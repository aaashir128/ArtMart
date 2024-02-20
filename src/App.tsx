import "./App.css";
// import SignUpForm from "./components/SignUpForm";
// import Login from "./components/Login";
import React, { Suspense } from "react";
import Profile from "./components/Profile";
// import AuthPage from "./pages/Auth/AuthPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginServices from "./components/Login";
import SignupServices from "./components/SignUpForm";
import SellerInfoServices from "./components/SellerInfoForm";
import ArtTypeServices from "./components/ArtTypeForm";
import MoreInfoFormServices from "./components/MoreInfoForm";

function App() {
  // const LoginServices = React.lazy(() => import("./components/Login"));
  // const SignupServices = React.lazy(() => import("./components/SignUpForm"));

  return (
    // <React.Suspense fallback={<NotFound />}>
    // <Suspense fallback={<LoadingScreen />}>
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/login" element={<LoginServices />} />
        <Route path="/register" element={<SignupServices />} />
        <Route path="/register/info" element={<SellerInfoServices />} />
        <Route path="/register/art" element={<ArtTypeServices />} />
        <Route path="/register/more-info" element={<MoreInfoFormServices />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    // </Suspense>
  );
}

export default App;
