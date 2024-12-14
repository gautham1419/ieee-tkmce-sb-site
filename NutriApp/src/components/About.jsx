import { ABOUT_TEXT } from "../constants";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Counter = ({ start, end, duration, inView }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!inView) return;

    const totalIncrements = end - start;
    const incrementTime = duration / totalIncrements;

    let currentCount = start;
    const intervalId = setInterval(() => {
      currentCount += 2;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(intervalId);
      } else {
        setCount(currentCount);
      }
    }, incrementTime);

    return () => clearInterval(intervalId);
  }, [inView, start, end, duration]);

  return (
    <h3 className="text-4xl font-bold">
      {count >= end ? `${end}+` : count}
    </h3>
  );
};

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="min-h-[570px] py-4 mx-1 pb-4 bg-slate-300 rounded-lg"
    >
      <h1 className="my-10 text-center text-4xl">
        <span className="text-neutral-500">About Us</span>
      </h1>
      <div className="text-center mx-10 flex flex-wrap text-2xl">
        <div className="w-full">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 w-full max-w-none py-6 text-1xl text-neutral-600">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-xl flex justify-center gap-16">
        <div className="text-center text-sky-900">
          <Counter start={0} end={50} duration={2000} inView={inView} />
          <p className="mt-2 text-neutral-500">Events Conducted</p>
        </div>

        <div className="text-center text-sky-900">
          <Counter start={0} end={500} duration={4000} inView={inView} />
          <p className="mt-2 text-neutral-500">Members</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
