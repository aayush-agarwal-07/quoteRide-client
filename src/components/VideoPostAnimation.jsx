import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    gsap.to(ref1.current, {
      x: "-100%",
      duration: 15,
      repeat: -1,
      ease: "none",
    });

    gsap.to(ref2.current, {
      x: "-100%",
      duration: 15,
      repeat: -1,
      ease: "none",
    });
  }, []);

  return (
    <div className="hidden  w-full min-h-[4vh] p-2 sm:flex items-center justify-startgap-4 overflow-hidden flex-nowrap border-b-2 border-b-slate-100">
      <div
        ref={ref1}
        className="flex-none w-[40vw] sm:w-[100vw] h-[90%] flex justify-between items-center gap-2"
      >
        <video
          muted
          loop
          autoPlay
          src="https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        ></video>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&autoPlay=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        />
        <video
          muted
          loop
          autoPlay
          src="https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        ></video>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&autoPlay=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        />
        <video
          muted
          loop
          autoPlay
          src="https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        ></video>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&autoPlay=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover mr-[2vw]"
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
          src="https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        ></video>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&autoPlay=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        />
        <video
          muted
          loop
          autoPlay
          src="https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402"
          className="h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        ></video>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&autoPlay=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        />
        <video
          muted
          loop
          autoPlay
          src="https://cdn.dribbble.com/uploads/47180/original/1def7b9fb30832c4af4353b325d9c3af.mp4?1685645402"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover"
        ></video>
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&autoPlay=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
          className="hidden sm:block h-[16vh] w-[10vw] sm:h-[32vh] sm:w-[13vw] rounded-xl object-cover mr-[2vw]"
        />
      </div>
    </div>
  );
};

export default Navbar;
