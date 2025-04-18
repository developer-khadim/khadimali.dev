// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export const socialIconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (index) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.8 + index * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  }),
};

export const statsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + index * 0.2,
      type: "spring",
      stiffness: 100,
    },
  }),
};

// variants for experience
export const experienceContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const experienceItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// project variants
export const projectsectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const projectheaderVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const projecticonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const projectlineVariants = {
  hidden: { height: "4rem", opacity: 0.5 },
  visible: {
    height: "4rem",
    opacity: 1,
    transition: { duration: 0.5 },
  },
  hover: {
    height: "5rem",
    transition: { duration: 0.3 },
  },
};

export const projectbuttonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};

export const projectarrowVariants = {
  rest: { x: 0 },
  hoverRight: {
    x: 3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  hoverLeft: {
    x: -3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Card animation variants
export const projectcardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const projectcardVariants = {
  initial: (direction) => ({
    x: direction > 0 ? 50 : -50,
    y: 10,
    opacity: 0,
    scale: 0.95,
  }),
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 20 },
      opacity: { duration: 0.4 },
      scale: { type: "spring", stiffness: 300, damping: 25 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.4,
    },
  }),
};

// Expertise page variants
export const ExpertiseContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const ExpertiseItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// WorkCard container animation variant
export const WorkCardContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};
