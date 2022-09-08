import React from "react";
//styles
import { Description, Image } from "../../styles";
import { fade } from "../../constants/animation";
import { useScroll } from "../../hooks/use-scroll";
import * as Styles from "./styles";
import { Cards } from "../../constants/service-cards";
import { ServiceData } from "./service-data";

export const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Styles.Services
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      {/* why didn't import animation */}
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>

        <Styles.Cards>
          {Cards.map(({ icon, subject, explain }, index) => (
            <ServiceData icon={icon} subject={subject} explain={explain} />
          ))}
        </Styles.Cards>
      </Description>

      <Image>
        <img src="/img/home2.png" alt="camera" />
      </Image>
    </Styles.Services>
  );
};
