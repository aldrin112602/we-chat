
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200">
      <form className="shadow-lg p-10 bg-white sm:w-3/4 lg:w-1/2 rounded-md">
        <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
        <div className="mt-2">
          <label htmlFor="uname">Enter username or email</label>
          <input required type="text" placeholder="Username or email" className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="uname" />
        </div>
        <div className="mt-2">
          <label htmlFor="password">Enter password</label>
          <input required type="password" placeholder="Password" className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="password" />
        </div>
        <div className="mt-2">
          <button className="block w-full rounded-md border-0 py-1.5 px-5 text-slate-100 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset bg-indigo-900 focus:ring-indigo-500 sm:text-sm sm:leading-6">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
