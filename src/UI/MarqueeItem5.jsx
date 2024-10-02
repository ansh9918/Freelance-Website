import { useMemo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";


const MarqueeItem5 = ({ texts, from, to }) => {
  // Memoize text elements to prevent unnecessary re-renders
  const textElements = useMemo(
    () =>
      texts.map((text, index) => (
        <span
          className="text-[150px] font-bold font-syne text-orange-600 my-7"
          key={index}
        >
          {text}
        </span>
      )),
    [texts]
  );

  // Framer Motion variants for animation
  const marqueeVariants = {
    animate: {
      x: [from, to],
      transition: {
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      {/* Single motion.div with repeated text elements */}
      <motion.div
        className="flex flex-shrink-0"
        variants={marqueeVariants}
        animate="animate"
        style={{ width: '300%' }}
      >
        {textElements}
        {textElements} {/* Repeat the text elements to ensure continuous scrolling */}
      </motion.div>
    </div>
  );
};

// Adding prop-types for validation
MarqueeItem5.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MarqueeItem5;