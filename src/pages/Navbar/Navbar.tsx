import { Outlet, Link } from "react-router-dom";

interface FormProps {
  isAuth: () => string | undefined | null;
}

const Navbar = ({ isAuth }: FormProps) => {
  const userToken = isAuth();

  return (
    <>
      <nav className="w-full p-5 px-10 bg-white shadow-lg flex items-center justify-between">
        <h3 className="font-bold text-xl">Wechat</h3>
        <ul className="flex items-center justify-end gap-10">
          {/* if user is not Auth */}
          {!userToken && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}

          {/* if user isAuth */}
          {userToken && (
            <>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/friends">Friends</Link>
              </li>
              <li>
                <Link to="/messages">Messages</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
