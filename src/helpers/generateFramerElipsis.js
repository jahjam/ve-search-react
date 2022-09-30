import { motion } from 'framer-motion';

export const generateFramerElipsis = (
  styles,
  backgroundColor = { backgroundColor: 'black' }
) => {
  const loadingCircle = {
    display: 'block',
    width: '0.45rem',
    height: '0.45rem',
  };

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  };

  return (
    <motion.div
      style={{
        ...styles,
        width: 'auto',
        height: 'auto',
        display: 'flex',
        justifyContent: 'space-around',
      }}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={{ ...loadingCircle, ...backgroundColor }}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={{ ...loadingCircle, ...backgroundColor }}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={{ ...loadingCircle, ...backgroundColor }}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};
