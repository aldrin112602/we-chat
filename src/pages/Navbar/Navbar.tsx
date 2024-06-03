import { Link, Outlet } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav className="w-full">
                <ul className="flex items-center justify-end gap-3">
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
    )
}

export default Navbar
