import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import TiptapEditor from "../components/Tiptap/Tiptap";

export default function CreateVideo() {
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailUploadProgress, setThumbnailUploadProgress] = useState(null);
  const [thumbnailUploadError, setThumbnailUploadError] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleUploadThumbnail = async () => {
    try {
      if (!thumbnailFile) {
        setThumbnailUploadError("Please select a thumbnail");
        return;
      }
      setThumbnailUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + thumbnailFile.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, thumbnailFile);

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
        "https://quoterider-server.onrender.com/api/video/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, videoUrl }),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/all-videos`);
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto h-350vh mb-[40vh]">
      <h1 className="text-3xl font-semibold text-center my-8">
        Create a Video
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Title"
            required
            className="flex-1 p-2 border border-gray-300 rounded"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Video URL"
            required
            className="flex-1 p-2 border border-gray-300 rounded"
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>
        <div className="border-4 border-dotted border-teal-500 p-4 flex items-center gap-4 relative">
          <input
            type="file"
            accept="image/*"
            className="p-2"
            onChange={(e) => setThumbnailFile(e.target.files[0])}
          />
          <button
            type="button"
            onClick={handleUploadThumbnail}
            disabled={thumbnailUploadProgress}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition duration-300"
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
          <div className="text-red-600">{thumbnailUploadError}</div>
        )}
        {formData.thumbnail && (
          <img
            src={formData.thumbnail}
            alt="Upload preview"
            className="w-full h-72 object-contain mt-4"
          />
        )}
        <TiptapEditor
          value={formData.content}
          placeholder="Write something..."
          className="h-48"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />

        <button
          type="submit"
          className={`mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition duration-300 absolute ${
            formData.thumbnail ? "-bottom-[30%]" : "bottom-[1%]"
          } ${
            formData.thumbnail
              ? "-bottom-[30%]"
              : thumbnailUploadError
              ? "-bottom-[4%]" // Replace with the style you want when thumbnailUploadError is true
              : thumbnailUploadProgress
              ? "-bottom-[1%]" // Replace with the style you want when thumbnailUploadProgress is true
              : "bottom-[1%]" // Default style when none of the conditions are true
          }`}
        >
          Publish
        </button>
        {publishError && (
          <div className="text-red-600 mt-4">{publishError}</div>
        )}
      </form>
    </div>
  );
}
