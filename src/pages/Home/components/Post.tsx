interface PostProps {
    posts: Array<{
      profile?: string;
      name: string;
      time_posted: string;
      captions?: string;
      body?: string;
    }>;
  }
  
  const Post: React.FC<PostProps> = ({ posts }) => {
    return (
      <>
        {posts && posts.map((post, i) => (
          <div key={i} className="p-4 border-b my-5">
            <div className="flex items-center mb-2">
              {post?.profile && <img src={post.profile} alt={post.name} className="w-10 h-10 rounded-full mr-3" />}
              <div>
                <h2 className="font-semibold">{post.name}</h2>
                <span className="text-sm text-gray-500">{post.time_posted}</span>
              </div>
            </div>
            <div>
              <p>{post.captions || post.body}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
  
  export default Post;
  