import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Hamburger from "./hamburger"

const Container = styled.div`
  background: Peru;
  margin-bottom: 1.45rem;
  margin: 0;
  height: 16vh;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: grid;
  grid-template-columns: 10% 50% 40%;
  height: 16vh;
`
const Logo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  text-align: right;
`

const Title = styled.h2`
  font-size: 1.3em;
  line-height: 100px;
`

const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <Hamburger />
      <Logo>Travel.</Logo>
      <Title>
        <TitleLink to="/">
          {siteTitle}
        </TitleLink>
      </Title>
    </Inner>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
