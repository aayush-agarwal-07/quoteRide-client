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
    <div className="w-full h-[4vh] p-2 flex items-center justify-startgap-4 overflow-hidden flex-nowrap border-b-2 border-b-slate-100">
      <div
        ref={ref1}
        className="flex-none w-[100vw] h-[90%] flex justify-between items-center gap-2"
      >
        <h3 className="sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full inline-block"></span>
        <h3 className="sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full inline-block mr-3 sm:mr-0"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block mr-6"></span>
      </div>
      <div
        ref={ref2}
        className="flex-none w-[100vw] h-[90%] flex justify-between items-center gap-2"
      >
        <h3 className="sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full inline-block"></span>
        <h3 className="sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full inline-block mr-3 sm:mr-0"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block"></span>
        <h3 className="hidden sm:block sm:font-medium text-lg sm:text-xl">
          Welcome to my blog
        </h3>
        <span className="hidden w-3 h-3 sm:w-4 sm:h-4 bg-[#b99777] rounded-full sm:inline-block mr-6"></span>
      </div>
    </div>
  );
};

export default Navbar;
