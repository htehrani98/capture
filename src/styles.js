import styled from "styled-components";
import { motion } from "framer-motion"; //new
// motion.div was styled.div
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: gray;
`;
export const Description = styled.div`
  flex: 1; // what is this one
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  z-index: 2;
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh; // at 18: 50 my result is deferent
    object-fit: cover;
  }
  z-index: 2;
`;
export const Hide = styled.div`
  overflow: hidden;
`;
