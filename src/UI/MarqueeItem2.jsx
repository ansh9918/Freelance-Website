import { useMemo } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const MarqueeItem2 = ({ images, from, to }) => {
  // Memoize image elements to prevent unnecessary re-renders
  const imageElements = useMemo(
    () =>
      images.map((image, index) => (
        <img
          src={image}
          alt={`marquee-image-${index}`}
          className="h-80 w-80 bg-cover px-4 ease-in-out transform"
          key={index}
        />
      )),
    [images]
  );

  // Framer Motion variants for animation
  const marqueeVariants = {
    animate: {
      x: [from, to],
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      {/* Single motion.div with repeated image elements */}
      <motion.div
        className="flex flex-shrink-0 gap-8"
        variants={marqueeVariants}
        animate="animate"
        style={{ width: '300%' }}
      >
        {imageElements}
        {imageElements} {/* Repeat the image elements to ensure continuous scrolling */}
      </motion.div>
    </div>
  );
};

// Adding prop-types for validation
MarqueeItem2.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  from: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MarqueeItem2;
