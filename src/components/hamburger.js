import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 1.4em;
  text-align: center;
  margin-top: 10px;
`
const Hamburger = () => (
  <Container>
      &#9776;
  </Container>
);

export default Hamburger;
