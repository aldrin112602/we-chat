
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 flex-col p-5">
      <img style={{ filter: 'hue-rotate(150deg)', marginTop: '-2rem' }}
        src="/wechat-logo.webp" alt="Wechat logo" className="hidden w-32 lg:block md:block" />
      <form className="shadow-lg px-10 py-6 bg-white w-full md:w-1/3 lg:w-1/3 rounded-md">
        <h1 className="text-2xl font-semibold text-gray-600 my-5">Sign Up</h1>
        <div className="border my-4 border-1"></div>
        <div className="mt-2">
          <label htmlFor="name">Name</label>
          <input name="name" required type="text" className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="name" />
        </div>
        <div className="mt-2">
          <label htmlFor="email">Email</label>
          <input name="email" required type="email" className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="email" />
        </div>
        <div className="mt-2">
          <label htmlFor="uname">Username</label>
          <input name="username" required type="text" className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="uname" />
        </div>
        <div className="mt-2">
          <label htmlFor="password">Password</label>
          <input name="password" required type="password" className="form-input block w-full rounded-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" id="password" />
        </div>
        
        <div className="mt-2">
          <button className="block w-full rounded-md border-0 py-1.5 px-5 text-slate-100 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset bg-indigo-900 focus:ring-indigo-500 sm:text-sm sm:leading-6">Sign up</button>
        </div>
        <div className="border my-4 border-1"></div>
        <div className="text-center">
          Already have an account? <a href="#">Login</a>
        </div>
        <br />
      </form>
      <br /><br /><br />
    </div>
  )
}

export default Signup
