import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    gsap.to(ref1.current, {
      x: "-100%",
      duration: 25,
      repeat: -1,
      ease: "none",
    });

    gsap.to(ref2.current, {
      x: "-100%",
      duration: 25,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="hidden  w-full min-h-[4vh] p-2 sm:flex items-center justify-startgap-4 overflow-hidden flex-nowrap border-b-2 border-b-slate-100 sm:mt-[40vh]">
      <div
        ref={ref1}
        className="flex-none w-[40vw] sm:w-[100vw] h-[90%] flex justify-between items-center gap-2"
      >
        <video
          muted
          loop
          autoPlay
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2F7%20Lessons%20I%20learn%20from%20Kota%20Factory%20Season%201.mp4?alt=media&token=ecae50ac-c9af-4dea-91f4-ef8f6474eed9"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>

        <video
          muted
          autoPlay
          loop
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FBe%20Effective%20in%20your%20communication%20skills.mp4?alt=media&token=5fa993a2-047f-405c-9a9d-94e233dba6e0"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        />
        <video
          muted
          loop
          autoPlay
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FDon't%20Think%20Positive%20%20Be%20Analytical%20First.mp4?alt=media&token=c922fb8d-470a-4bb7-be92-5c17690c0d48"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FI%20Shot%20this%20at%2024th%20February%202021.mp4?alt=media&token=64a0f900-0e7e-46f1-8c11-ff3d445b5cda"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        />
        <video
          muted
          loop
          autoPlay
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FLive%20up%20on%20your%20Own%20Terms.mp4?alt=media&token=a8b0a2d7-88e8-456c-8e00-412f1f96dee9"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FMake%20Practice%20your%20top%20should%20to%20get%20selected%20in%20any%20XYZ%20league%20to%20any%20competition.mp4?alt=media&token=a504d68f-d506-4b65-b5ee-be2bf524f5e4"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg mr-[2vw]"
        />
      </div>
      <div
        ref={ref2}
        className="flex-none w-[40vw] sm:w-[100vw] h-[90%] flex justify-between items-center gap-2"
      >
        <video
          muted
          loop
          autoPlay
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FMy%20Favorite%20Adventure%20Is%20Life.mp4?alt=media&token=6f05d607-eb92-4abc-a3be-588073d72b9d"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FRecent%20Books.mp4?alt=media&token=a1ed86a1-6efc-4428-9ab7-6939e3d0dfb4"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        />
        <video
          muted
          loop
          autoPlay
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FThe%20Myth.mp4?alt=media&token=1e7240b7-58d4-4114-9bf4-0e99f0e2e858"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FWhatever%20It%20Takes.mp4?alt=media&token=5b38f0bd-ed0f-4616-b673-f26badfc6614"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        />
        <video
          muted
          loop
          autoPlay
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FYou%20Have%20No%20Option.mp4?alt=media&token=b74d16a2-2df7-4973-8e3b-9ed3eccafa1f"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="https://firebasestorage.googleapis.com/v0/b/projects-images.appspot.com/o/quoterider-client%2FMake%20Practice%20your%20top%20should%20to%20get%20selected%20in%20any%20XYZ%20league%20to%20any%20competition.mp4?alt=media&token=a504d68f-d506-4b65-b5ee-be2bf524f5e4"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg mr-[2vw]"
        />
      </div>
    </div>
  );
};

export default Navbar;

