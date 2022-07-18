import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  const [faqToggle, setFaqToggle] = useState([false, false, false, false]);
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div onClick={() => setFaqToggle(!faqToggle[0])} className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          {faqToggle[0] && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              molestiae!
            </p>
          )}
        </div>
        <div className="faq-line"></div>
      </div>
      <div onClick={() => setFaqToggle(!faqToggle[1])} className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          {faqToggle[1] && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              molestiae!
            </p>
          )}
        </div>
        <div className="faq-line"></div>
      </div>
      <div onClick={() => setFaqToggle(!faqToggle[2])} className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          {faqToggle[2] && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              molestiae!
            </p>
          )}
        </div>
        <div className="faq-line"></div>
      </div>
      <div onClick={() => setFaqToggle(!faqToggle[3])} className="question">
        <h4>What Product Do You Offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          {faqToggle[3] && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
              molestiae!
            </p>
          )}
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter; // nothing is not happening with this code
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
