import styled from "styled-components";

export const About = styled.div`
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
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh; // at 18: 50 my result is deferent
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
