import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DashVideos() {
  const { currentUser } = useSelector((state) => state.user);
  const [userVideos, setUserVideos] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [videoIdToDelete, setVideoIdToDelete] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://quoterider-server.onrender.com/api/video/getvideos?userId=${currentUser._id}`
        );
        const data = await res.json();
        if (res.ok) {
          setUserVideos(data.videos);
          if (data.videos.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchVideos();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userVideos.length;
    try {
      const res = await fetch(
        `https://quoterider-server.onrender.com/api/video/getvideos?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setUserVideos((prev) => [...prev, ...data.videos]);
        if (data.videos.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteVideo = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `https://quoterider-server.onrender.com/api/video/deletevideo/${videoIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserVideos((prev) =>
          prev.filter((video) => video._id !== videoIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-3 md:mx-auto overflow-x-auto">
      {currentUser.isAdmin && userVideos.length > 0 ? (
        <>
          <div className="shadow-md border border-gray-200 dark:border-gray-700 rounded-md overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date Updated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Video Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Video Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Delete
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {userVideos.map((video) => (
                  <tr key={video._id}>
                    <td className="px-6 py-4">
                      {new Date(video.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/video/${video.slug}`}>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-20 h-10 object-cover bg-gray-500"
                        />
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        className="font-medium text-gray-900 dark:text-white"
                        to={`/video/${video.slug}`}
                      >
                        {video.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setVideoIdToDelete(video._id);
                        }}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        className="text-teal-500 hover:underline"
                        to={`/update-video/${video._id}`}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 text-sm py-4 mt-4"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no videos yet!</p>
      )}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
            <div className="text-center">
              <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
              <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this video?
              </h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleDeleteVideo}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
