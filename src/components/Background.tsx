import React from "react";

function Background() {
  return (
    <div className="absolute w-screen h-screen -z-10">
      <div className="absolute bg-secondary  w-[700px] h-[700px] -top-24 -right-36 rounded-full"></div>
      <div className="absolute bg-secondary  w-[200px] h-[200px] -bottom-12 -left-12 rounded-full"></div>
    </div>
  );
}

export default Background;
