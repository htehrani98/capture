import React from "react";

import { AnimateSharedLayout } from "framer-motion";

import { Toggle } from "../toggle";
import { useScroll } from "../../hooks/use-scroll";
import { scrollReveal } from "../../constants/animation";
import { faq } from "../../fixtures/faq";
import * as Styles from "./styles";

export const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Styles.Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        {faq.map((faqDetail, index) => (
          <Toggle key={index} {...faqDetail} />
        ))}
      </AnimateSharedLayout>
    </Styles.Faq>
  );
};
