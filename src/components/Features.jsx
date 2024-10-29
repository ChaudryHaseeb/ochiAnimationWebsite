import { motion, useAnimation } from "framer-motion";
// import { Power4 } from "gsap";
import React from "react";

function Features() {
  <React />;
  const cards = [useAnimation(), useAnimation()];
  const HandleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const HandleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div data-scroll data-scroll-speed=".2" className="w-full py-20">
      <div className="w-full px-20 pb-10 border-b-[1px] border-zinc-700">
        <h1 className="text-[4vw] font-[Courier-New] tracking-tight font-semibold">
          Featured Projects
        </h1>
      </div>
      <div className="cards w-full flex gap-5 px-10  pt-20">
        <motion.div
          onHoverStart={() => HandleHover(0)}
          onHoverEnd={() => HandleHoverEnd(0)}
          className="cardcontainer relative w-1/2 h-[80vh]"
        >
          <h1 className="card1 absolute flex overflow-hidden text-[#330fff] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-[Courier-New] text-8xl font-extrabold tracking-tighter leading-none z-[9]">
            {"CHAUDRY".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[0]}
                transition={{
                  ease: [0.68, -0.6, 0.32, 1.6],
                  delay: index * 0.08,
                }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card2 w-full h-full  rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          onHoverStart={() => HandleHover(1)}
          onHoverEnd={() => HandleHoverEnd(1)}
          className="cardcontainer relative w-1/2 h-[80vh]"
        >
          <h1 className="card3 absolute flex overflow-hidden text-[#330fff] right-full translate-x-1/2 -translate-y-1/2 top-1/2 font-[Courier-New] text-8xl font-extrabold tracking-tighter leading-none z-[9]">
            {"HASEEB".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={cards[1]}
                transition={{
                  ease: [0.68, -0.6, 0.32, 1.6],
                  delay: index * 0.08,
                }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card4 w-full h-full rounded-xl overflow-hidden">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
