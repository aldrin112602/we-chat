import Post from "./components/Post";
const posts = [
  {
    profile: "https://via.placeholder.com/40",
    name: "John Doe",
    time_posted: "2 hours ago",
    captions: "Had a great time at the beach today!",
    body: "The weather was perfect and the water was refreshing.",
  },
  {
    profile: "https://via.placeholder.com/40",
    name: "Jane Smith",
    time_posted: "1 day ago",
    captions: "Loving the new coffee shop in town!",
    body: "The ambiance is cozy and the coffee is fantastic.",
  },
  {
    profile: "https://via.placeholder.com/40",
    name: "Mike Johnson",
    time_posted: "3 days ago",
    body: "Just finished reading a great book on modern JavaScript development. Highly recommended!",
  },
];

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3 max-h-full overflow-y-auto p-5"></div>
        <div className="col-span-4 max-h-full overflow-y-auto">
          {/* POST CONTENT */}
          <Post posts={posts}/>
        </div>
        <div
          style={{
            maxHeight: "100vh",
          }}
          className="col-span-3 overflow-y-auto p-5 border-l-2 border-b-gray-400"
        >
          <div className="p-4 overflow-hidden">
            <div className="bg-white p-6 rounded shadow-md my-4">
              <div className="">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Groups
                </h4>
                <div>
                  <button
                    style={{
                      height: "30px",
                      width: "70px",
                    }}
                    className="bg-indigo-600 rounded-md border-0 text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-100 text-sm font-bold"
                  >
                    Create
                  </button>
                  &nbsp;
                  <button
                    style={{
                      height: "30px",
                      width: "120px",
                    }}
                    className="mx-5 rounded-md border-0 text-blue-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm font-bold"
                  >
                    Explore & Join
                  </button>
                </div>
              </div>
              <div className="border my-5"></div>
              <p className="text-gray-600 text-sm mt-5">
                Create and join group chats to stay connected with multiple
                people.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md my-4">
              <div className="">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Groups
                </h4>
                <div>
                  <button
                    style={{
                      height: "30px",
                      width: "70px",
                    }}
                    className="bg-indigo-600 rounded-md border-0 text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-100 text-sm font-bold"
                  >
                    Create
                  </button>
                  &nbsp;
                  <button
                    style={{
                      height: "30px",
                      width: "120px",
                    }}
                    className="mx-5 rounded-md border-0 text-blue-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm font-bold"
                  >
                    Explore & Join
                  </button>
                </div>
              </div>
              <div className="border my-5"></div>
              <p className="text-gray-600 text-sm mt-5">
                Create and join group chats to stay connected with multiple
                people.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md my-4">
              <div className="">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Groups
                </h4>
                <div>
                  <button
                    style={{
                      height: "30px",
                      width: "70px",
                    }}
                    className="bg-indigo-600 rounded-md border-0 text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-100 text-sm font-bold"
                  >
                    Create
                  </button>
                  &nbsp;
                  <button
                    style={{
                      height: "30px",
                      width: "120px",
                    }}
                    className="mx-5 rounded-md border-0 text-blue-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm font-bold"
                  >
                    Explore & Join
                  </button>
                </div>
              </div>
              <div className="border my-5"></div>
              <p className="text-gray-600 text-sm mt-5">
                Create and join group chats to stay connected with multiple
                people.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md my-4">
              <div className="">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Groups
                </h4>
                <div>
                  <button
                    style={{
                      height: "30px",
                      width: "70px",
                    }}
                    className="bg-indigo-600 rounded-md border-0 text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-100 text-sm font-bold"
                  >
                    Create
                  </button>
                  &nbsp;
                  <button
                    style={{
                      height: "30px",
                      width: "120px",
                    }}
                    className="mx-5 rounded-md border-0 text-blue-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm font-bold"
                  >
                    Explore & Join
                  </button>
                </div>
              </div>
              <div className="border my-5"></div>
              <p className="text-gray-600 text-sm mt-5">
                Create and join group chats to stay connected with multiple
                people.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow-md my-4">
              <div className="">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Groups
                </h4>
                <div>
                  <button
                    style={{
                      height: "30px",
                      width: "70px",
                    }}
                    className="bg-indigo-600 rounded-md border-0 text-white ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-slate-100 text-sm font-bold"
                  >
                    Create
                  </button>
                  &nbsp;
                  <button
                    style={{
                      height: "30px",
                      width: "120px",
                    }}
                    className="mx-5 rounded-md border-0 text-blue-500 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-sm font-bold"
                  >
                    Explore & Join
                  </button>
                </div>
              </div>
              <div className="border my-5"></div>
              <p className="text-gray-600 text-sm mt-5">
                Create and join group chats to stay connected with multiple
                people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
