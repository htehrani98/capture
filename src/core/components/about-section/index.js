import React from "react";

import { motion } from "framer-motion";

import { About, Description, Image, Hide } from "../../styles";
import { titleAnim, fade, photoAnim } from "../../constants/animation";
import { Wave } from "../wave";

export const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or video editing ideas that you have.
          We have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src="/img/home1.png"
          alt="akasam aks migiram"
        />
        {/* and always should import source first and use it just like this */}
      </Image>
      <Wave />
    </About>
  );
};
