import { EXPERIENCES } from "../constants";
import { CONTACT } from "../constants";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Vision = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      id="vision"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="border-b min-h-[570px] border-neutral-900 py-2 pb-4 bg-neutral-500"
    >
      <h1 className="my-20 text-center text-4xl">
        <span className="text-neutral-900">Vision and Mission</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-16 px-4 py-10 ">
        {/* Vision Box */}
        <div className="w-full max-w-xs min-h-[300px] p-6 border border-neutral-300 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-black hover:border-black">
          <div className="flex flex-col items-center lg:items-start h-full">
            <h2 className="text-2xl font-semibold mb-4">Vision</h2>
            <p className="text-xl">{EXPERIENCES}</p>
          </div>
        </div>

        {/* Mission Box */}
        <div
          id="mission"
          className="w-full max-w-xs min-h-[300px] p-6 border border-neutral-300 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-black hover:border-black"
        >
          <div className="flex flex-col items-center lg:items-start h-full">
            <h2 className="text-2xl font-semibold mb-4">Mission</h2>
            <p className="text-xl">{CONTACT}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Vision;
