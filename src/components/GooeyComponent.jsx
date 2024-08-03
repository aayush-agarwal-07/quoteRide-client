import React from "react";

const GooeyComponent = () => {
  return (
    <div className="relative w-full">
      <div
        className="absolute h-[32vw] w-[32vw] rounded-full bg-gradient-to-tr from-[#ddb490] to-[#b5a79a]
                    blur-[20px] animate-gooey -z-100"
        style={{
          top: "10%",
          left: "25%",
        }}
      />
    </div>
  );
};

export default GooeyComponent;
