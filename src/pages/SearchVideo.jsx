import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

export default function SearchVideo() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
  });

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      const urlParams = new URLSearchParams(location.search);
      const searchQuery = urlParams.toString();
      try {
        const res = await fetch(`/api/video/getvideos?${searchQuery}`);
        if (!res.ok) {
          setLoading(false);
          return;
        }
        const data = await res.json();
        setVideos(data.videos);
        setLoading(false);
        if (data.videos.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');

    if (searchTermFromUrl || sortFromUrl) {
      setSidebarData({
        searchTerm: searchTermFromUrl || '',
        sort: sortFromUrl || 'desc',
      });
    }

    fetchVideos();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    Object.entries(sidebarData).forEach(([key, value]) => {
      if (value) urlParams.set(key, value);
    });
    navigate(`/search?${urlParams.toString()}`);
  };

  const handleShowMore = async () => {
    const startIndex = videos.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    try {
      const res = await fetch(`/api/video/getvideos?${searchQuery}`);
      if (!res.ok) return;
      const data = await res.json();
      setVideos((prevVideos) => [...prevVideos, ...data.videos]);
      setShowMore(data.videos.length === 9);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <div className='flex items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              Search Term:
            </label>
            <input
              placeholder='Search...'
              id='searchTerm'
              type='text'
              value={sidebarData.searchTerm}
              onChange={handleChange}
              className='border rounded-md p-2'
            />
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <select
              onChange={handleChange}
              value={sidebarData.sort}
              id='sort'
              className='border rounded-md p-2'
            >
              <option value='desc'>Latest</option>
              <option value='asc'>Oldest</option>
            </select>
          </div>
          <button
            type='submit'
            className='bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md'
          >
            Apply Filters
          </button>
        </form>
      </div>
      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5'>
          Videos results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading && videos.length === 0 && (
            <p className='text-xl text-gray-500'>No videos found.</p>
          )}
          {!loading &&
            videos.map((video) => <VideoCard key={video._id} video={video} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className='text-teal-500 text-lg hover:underline p-7 w-full'
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
