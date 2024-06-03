import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Home } from "./pages/Home"
import { Navbar } from "./pages/Navbar"
import { NoPage } from "./pages/NoPage"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
