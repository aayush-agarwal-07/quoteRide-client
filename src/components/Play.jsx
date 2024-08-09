import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoMdClose } from "react-icons/io";

const Play = () => {
  const [rotate, setRotate] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const closeRef = useRef();
  const videoRef = useRef();

  // Handle opening of the div
  const handleOpen = () => {
    setIsVisible(true);

    // Animate the div
    gsap.fromTo(
      closeRef.current,
      { opacity: 0, scale: 0.8, display: "block" },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Animate the video with a slight delay
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5, // Slight delay to synchronize with the div animation
        ease: "power2.out",
      }
    );
  };

  // Handle closing of the div
  const handleClose = () => {
    gsap.to(videoRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(closeRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setIsVisible(false); // Hide the element from the DOM after animation
      },
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <div
      className={`w-full h-[50vh] flex flex-col gap-5 items-center justify-center relative transition-all duration-1000 ${
        isVisible ? "mb-[50vh]" : "mb-0"
      }`}
    >
      {/* The animated div */}
      <h1 className="italic text-4xl">Most loved video!!</h1>
      {isVisible && (
        <div
          ref={closeRef}
          className="w-full h-screen absolute z-[9999] inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-100 rounded top-0 left-0 flex items-center justify-center"
        >
          <video
            ref={videoRef}
            autoPlay
            controls
            src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FLive%20up%20on%20your%20%20Own%20Terms%20%20__%20Quote%20Rider.mp4?alt=media&token=0d2ddb7f-9ee6-4802-8c9e-0e4b84f0e8f7"
            className="absolute sm:top-[15%] left-[15%] sm:left-[35%] w-[70vw] h-[50vh] sm:w-[30vw] sm:h-[39vw] object-cover z-50 rounded-3xl"
          ></video>
          <div
            onClick={handleClose}
            className="text-3xl absolute top-[10%] left-[90%] text-[#C5AC95] cursor-pointer"
          >
            <IoMdClose />
          </div>
        </div>
      )}

      <button
        onClick={handleOpen}
        className="z-10 bottom-[-200px] border border-teal-500 text-black dark:text-white hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 px-4 rounded-3xl m-2 text-2xl"
      >
        Tap to play
      </button>
      <div
        className="hidden w-[30%] min-h-[20%] sm:flex items-center justify-between cursor-pointer"
        onClick={handleOpen}
      >
        <div className="w-[14vw] h-[14vw] bg-[#c5b5a6] rounded-full flex items-center justify-center">
          <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
            >
              <div className="w-10 h-10 bg-zinc-100 rounded-full "></div>
            </div>
          </div>
        </div>
        <div className="w-[14vw] h-[14vw] bg-[#c5b5a6] rounded-full flex items-center justify-center">
          <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
            >
              <div className="w-10 h-10 bg-zinc-100 rounded-full "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
