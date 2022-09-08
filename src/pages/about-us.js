import React from "react";

import { motion } from "framer-motion";

import { AboutSection } from "../core/components/about-section";
import { ServicesSection } from "../core/components/service-section";
import { FaqSection } from "../core/components/faq-section";
import { pageAnimation } from "../core/constants/animation";
import { ScrollTop } from "../core/hooks/scroll-top";

export const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};
