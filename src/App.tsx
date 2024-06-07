import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { NoPage } from "./pages/NoPage";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const apiBaseUrl = import.meta.env.API_BASE_URL || "http://localhost:3000";

const App = () => {
  // handle login
  const handleLogin = (data: { username: string; password: string }) => {
    axios
      .post(`${apiBaseUrl}/api/user/signIn`, data)
      .then((res) => {
        const { data } = res,
          { message } = data;
        const token = data.user._id;
        Swal.fire({
          title: "Success!",
          text: message,
          icon: "success",
        });
        Cookies.set("userToken", token, { expires: 7, path: apiBaseUrl, secure: true });
        window.location.reload();
      })
      .catch((err) => {
        const { response } = err,
          { data } = response,
          { message } = data;
        Swal.fire({
          title: "Authentication failed!",
          text: message,
          icon: "error",
        });
      });
  };

  // handle signup
  const handleSignup = (data: {
    name: string;
    email: string;
    username: string;
    password: string;
  }) => {
    axios
      .post(`${apiBaseUrl}/api/user/signUp`, data)
      .then((res) => {
        const token = res.data.user._id;
        Cookies.set("userToken", token, {
          expires: 7,
          path: apiBaseUrl,
          secure: true,
        });
        window.location.reload();
      })
      .catch((err) => {
        console.error("Login error:", err);
        // console.log(err.response.data)
      });
  };

  // check Auth user
  const checkAuthUser = (): string | undefined | null => {
    return Cookies.get("userToken");
  };

  return (
    <>
      <Router>
        <Navbar isAuth={checkAuthUser} />
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
