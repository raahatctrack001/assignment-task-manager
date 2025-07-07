import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskDashboard from "./pages/Dashboard"
import ProtectedPage from "./pages/ProtectedRoute"
import Header from "./components/common/Header"
import LoginPage from "./pages/Login"
import HomePage from "./pages/Homepage"

function App() {

  return <BrowserRouter>
    <Header />
    <Routes>
      {/* //as there is nothing to show on homepage but user will land here at first anyhow. so adding routing algorithm here */}
      <Route 
        path="/"
        element={<HomePage />} />

      {/* //dashboard as protected route; no entry without authentication */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedPage> 
            <TaskDashboard /> 
          </ProtectedPage> 
        }/>

      {/* authentication page */}
      <Route 
        path="/login" 
        element={<LoginPage />} />      
    </Routes>

  </BrowserRouter>
}

export default App
