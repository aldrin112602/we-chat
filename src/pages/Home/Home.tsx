const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Introduction Section */}
        <section className="text-center my-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 my-5">
            Welcome to the Future of Real-Time Chat app
          </h2>
          <p className="text-gray-600 mb-6 text-xl my-5">
            Experience seamless communication with our WeChat alternative.{" "}
            <br /> Stay connected with friends and family, anytime, anywhere.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section id="features" className="my-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Real-Time Messaging
              </h4>
              <p className="text-gray-600">
                Send and receive messages instantly with our real-time chat
                system.
              </p>
              <img src="./img_1.webp" className="w-full my-5 mx-auto" alt="Real-Time Messaging" />
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Multimedia Sharing
              </h4>
              <p className="text-gray-600">
                Share photos, videos, and files effortlessly.
              </p>
              <img src="./img_2.webp" className="w-full my-5 mx-auto" alt="Multimedia Sharing" />
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Group Chats
              </h4>
              <p className="text-gray-600">
                Create and join group chats to stay connected with multiple
                people.
              </p>
              <img src="./img_1.jpg" className="w-full my-5 mx-auto" alt="Group Chats" />
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
