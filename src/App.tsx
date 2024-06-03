import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { NoPage } from "./pages/NoPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

  // handle login
  const handleLogin = ( data: {
    username: string
    password: string
  }) => {
    console.log( data );
  }

  // handle signup
  const handleSignup = ( data: {
    name: string;
    email: string;
    username: string;
    password: string;
  }) => {
    console.log( data );
  }


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login onSubmit={ handleLogin }/>} />
          <Route path="/signup" element={<Signup onSubmit={ handleSignup }/>} />
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
