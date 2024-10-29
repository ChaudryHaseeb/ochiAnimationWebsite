import React, { useEffect, useState } from "react";

function Eyes() {
  <React />;
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;
      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className=" Eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute flex gap-9 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[16vw] h-[16vw] rounded-full flex items-center justify-center bg-zinc-50">
            <div className="w-[9vw] h-[9vw] rounded-full relative bg-zinc-950">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 "
              >
                <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-50 "></div>
              </div>
            </div>
          </div>
          <div className="w-[16vw] h-[16vw] rounded-full flex items-center justify-center bg-zinc-50">
            <div className="w-[9vw] h-[9vw] rounded-full relative bg-zinc-950">
              <div
                style={{
                  transform: ` translate(-50%,-50%) rotate(${rotate}deg)`
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 "
              >
                <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-50 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
