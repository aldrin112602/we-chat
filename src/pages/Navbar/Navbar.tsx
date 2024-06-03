import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="w-full p-5 px-10 bg-white shadow-lg flex items-center justify-between">
        <h3 className="font-bold text-xl">Wechat</h3>
        <ul className="flex items-center justify-end gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
