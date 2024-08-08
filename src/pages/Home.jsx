import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import VideoCard from "../components/VideoCard";
import GooeyComponent from "../components/GooeyComponent";
import VideoPostAnimation from "../components/VideoPostAnimation";
import Play from "../components/Play";
import TopComments from "../components/TopComments";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await fetch("/api/video/getVideos");
      const data = await res.json();
      setVideos(data.videos);
    };
    fetchVideos();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const recentPosts = posts && posts.length > 0 ? posts.slice(3, 6) : [];
  const recentVideos = videos && videos.length > 0 ? videos.slice(0, 3) : [];

  return (
    <div>
      <div className="flex gap-6 py-2 sm:py-28 px-3 max-w-7xl mx-auto">
        <h1 className="text-7xl font-bold sm:text-8xl mt-[20vh] sm:mt-0 sm:absolute sm:w-[800px]">
        "Encourages expressing<br />
        ideas through impactful quotes"
        </h1>
        <GooeyComponent />
      </div>
      <VideoPostAnimation />
      <Play />

      <div className="max-w-7xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {recentPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/all-posts"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto p-3 flex flex-col gap-8 py-7">
        {videos && videos.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">
              Recent Videos
            </h2>
            <div className="flex flex-wrap gap-4">
              {recentVideos.map((video) => (
                <VideoCard key={video._id} video={video} />
              ))}
            </div>
            <Link
              to={"/all-videos"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all videos
            </Link>
          </div>
        )}
      </div>
      <div className="w-full h-[25vh] sm:h-[50vh] bg-[#e5ded8] pt-[2.5vh] sm:pt-[3vh]">
        <TopComments />
      </div>
    </div>
  );
}
