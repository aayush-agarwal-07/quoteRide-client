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
          src="src/assets/marquee/7 Lessons I learn from Kota Factory Season 1.mp4"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>

        <video
          muted
          autoPlay
          loop
          src="src/assets/marquee/Be Effective in your communication skills.mp4"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        />
        <video
          muted
          loop
          autoPlay
          src="src/assets/marquee/Don't Think Positive  Be Analytical First.mp4"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="src/assets/marquee/I Shot this at 24th February 2021.mp4"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        />
        <video
          muted
          loop
          autoPlay
          src="src/assets/marquee/Live up on your Own Terms.mp4"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="src/assets/marquee/7 Lessons I learn from Kota Factory Season 1.mp4"
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
          src="src/assets/marquee/Make Practice your top should to get selected in any XYZ league to any competition.mp4"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="src/assets/marquee/My Favorite Adventure Is Life.mp4"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        />
        <video
          muted
          loop
          autoPlay
          src="src/assets/marquee/Recent Books.mp4"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="src/assets/marquee/The Myth.mp4"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        />
        <video
          muted
          loop
          autoPlay
          src="src/assets/marquee/Whatever It Takes.mp4"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg"
        ></video>
        <video
          muted
          autoPlay
          loop
          src="src/assets/marquee/You Have No Option.mp4"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover border-4 border-black m-2 shadow-lg mr-[2vw]"
        />
      </div>
    </div>
  );
};

export default Navbar;
