import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UpdateVideo() {
  const [file, setFile] = useState(null);
  const [thumbnailUploadProgress, setThumbnailUploadProgress] = useState(null);
  const [thumbnailUploadError, setThumbnailUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(
          `https://quoterider-server.onrender.com/api/video/getvideos?videoId=${videoId}`
        );
        const data = await res.json();
        if (!res.ok) {
          setPublishError(data.message);
          return;
        }
        setFormData(data.videos[0]);
        setPublishError(null);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchVideo();
  }, [videoId]);

  const handleUploadThumbnail = async () => {
    try {
      if (!file) {
        setThumbnailUploadError("Please select a thumbnail");
        return;
      }
      setThumbnailUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setThumbnailUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setThumbnailUploadError("Thumbnail upload failed");
          setThumbnailUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setThumbnailUploadProgress(null);
            setThumbnailUploadError(null);
            setFormData({ ...formData, thumbnail: downloadURL });
          });
        }
      );
    } catch (error) {
      setThumbnailUploadError("Thumbnail upload failed");
      setThumbnailUploadProgress(null);
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://quoterider-server.onrender.com/api/video/updatevideo/${formData._id}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      setPublishError(null);
      navigate(`/video/${data.slug}`);
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update Video</h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <input
            type="text"
            placeholder="Title"
            required
            id="title"
            className="border border-gray-300 rounded-md p-2 flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title || ""}
          />
        </div>
        <div className="flex flex-col gap-4 items-center border-4 border-teal-500 border-dotted p-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="mb-4"
          />
          <button
            type="button"
            onClick={handleUploadThumbnail}
            disabled={thumbnailUploadProgress}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md flex items-center"
          >
            {thumbnailUploadProgress ? (
              <div className="w-16 h-16">
                <CircularProgressbar
                  value={thumbnailUploadProgress}
                  text={`${thumbnailUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "Upload Thumbnail"
            )}
          </button>
        </div>
        {thumbnailUploadError && (
          <div className="bg-red-100 border border-red-400 text-red-700 rounded p-3">
            {thumbnailUploadError}
          </div>
        )}
        {formData.thumbnail && (
          <img
            src={formData.thumbnail}
            alt="Uploaded"
            className="w-full h-72 object-cover mt-4"
          />
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <input
            type="text"
            placeholder="YouTube Video URL"
            required
            id="video"
            className="border border-gray-300 rounded-md p-2 flex-1"
            onChange={(e) =>
              setFormData({ ...formData, video: e.target.value })
            }
            value={formData.video || ""}
          />
        </div>

        {formData.video && (
          <div className="w-full h-72 mt-4">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${
                formData.video.split("v=")[1]
              }`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
        )}

        <ReactQuill
          theme="snow"
          value={formData.content || ""}
          placeholder="Write something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md"
        >
          Update Video
        </button>
        {publishError && (
          <div className="bg-red-100 border border-red-400 text-red-700 rounded p-3 mt-5">
            {publishError}
          </div>
        )}
      </form>
    </div>
  );
}
