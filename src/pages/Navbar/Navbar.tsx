
const Navbar = () => {
    return (
        <>
            <nav className="w-full p-5 px-10 bg-white shadow-lg flex items-center justify-between">
                <h3 className="font-bold text-xl">Wechat</h3>
                <ul className="flex items-center justify-end gap-10">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/signup">Signup</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
