
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col">
      <img src="/wechat-logo.webp" alt="Wechat logo" className="sm:hidden md:hidden lg:w-32 lg:block" />
      <form className="shadow-lg px-10 pt-1 pb-4 bg-white sm:w-3/4 lg:w-1/3 rounded-md">
        <h1 className="text-2xl font-semibold text-gray-600 my-5">Sign In</h1>
        <div className="border my-4 border-1"></div>
        <div className="mt-4">
          <label htmlFor="uname">Username</label>
          <input required type="text" className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="uname" />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input required type="password" className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="password" />
        </div>
        <div className="text-right">
          <a href="#" className="text-gray-600 hover:text-indigo-600">Forgot Password?</a>
        </div>
        <div className="mt-4">
          <button className="block w-full rounded-md border-0 py-1.5 px-5 text-slate-100 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset bg-indigo-900 focus:ring-indigo-500 sm:text-sm sm:leading-6">Login</button>
        </div>
        <div className="border my-4 border-1"></div>
        <div className="text-center my-3">
          Sign In with
        </div>
        <button type="button" className="block w-full rounded-md border-0 py-1.5 px-5 text-slate-100 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset bg-indigo-600 focus:ring-indigo-500 sm:text-sm sm:leading-6">Facebook</button>

        <button type="button" className="block w-full rounded-md border-0 py-1.5 px-5 text-black mt-2 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset bg-slate-100 focus:ring-indigo-500 sm:text-sm sm:leading-6">Google</button>
      </form>
    </div>
  )
}

export default Login
