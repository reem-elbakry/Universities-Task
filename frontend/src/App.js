import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Universities from "./components/Universities";
import UniversityModal from "./components/UniversityModal";
import Error from "./pages/Error";
import UniversityForm from "./components/UniversityForm";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Navigate to={"/"} />} />
          <Route path="/universities/:id" element={<UniversityModal />} />
          <Route path="/" element={<Home />}>
            <Route path="universities" element={<Universities />} />
          </Route>
          <Route path="universities/add" element={<UniversityForm />} />
          <Route path="universities/edit/:id" element={<UniversityForm />} />

          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
