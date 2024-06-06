import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { NoPage } from "./pages/NoPage";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";


const apiBaseUrl = import.meta.env.API_BASE_URL || 'http://localhost:3000';

const App = () => {
  // handle login
  const handleLogin = (data: { username: string; password: string }) => {
    axios.post(`${apiBaseUrl}/api/user/signIn`, data)
      .then(res => {

        console.log(res.data)
        // const token = res.data.token;
        // Cookies.set("userToken", token);
        // window.location.reload();
      })
      .catch(err => {
        // console.error("Login error:", err);
        console.log(err.response.data)
      });
  };
  

  // handle signup
  const handleSignup = (data: {
    name: string;
    email: string;
    username: string;
    password: string;
  }) => {
    axios.post(`${apiBaseUrl}/api/user/signUp`, data)
      .then(res => {

        console.log(res.data)
        // const token = res.data.token;
        // Cookies.set("userToken", token);
        // window.location.reload();
      })
      .catch(err => {
        // console.error("Login error:", err);
        console.log(err.response.data)
      });
  };

  // check Auth user
  const checkAuthUser = (): string | undefined | null => {
    return Cookies.get("userToken");
  };

  return (
    <>
      <Router>
        <Navbar isAuth={ checkAuthUser } />
        <Routes>
          {!checkAuthUser() && (
            <>
              <Route path="/login" element={<Login onSubmit={handleLogin} />} />
              <Route
                path="/signup"
                element={<Signup onSubmit={handleSignup} />}
              />
              <Route index path="/" element={<Home />} />
            </>
          )}

          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
