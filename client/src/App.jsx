import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "../src/pages/RegisterPage";
import LoginPage from "../src/pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import TicketByIdPage from "./pages/TicketByIdPage";
import TicketsPage from "./pages/TicketsPage";
import TicketsFormPage from "./pages/TicketsFormPage";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>DASHBOARD</h1>} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<ProtectedRoute/>}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/ticket/:id" element={<TicketByIdPage/>}/>
            <Route path="/tickets" element={<TicketsPage/>}/>
            <Route path="/ticket/add" element={<TicketsFormPage/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;