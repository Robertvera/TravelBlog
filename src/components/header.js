import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Logo from "./logo"
import Hamburger from "./hamburger"

const Container = styled.div`
  background: Peru;
  margin-bottom: 1.45rem;
  margin: 0;
`

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: grid;
`

const Title = styled.h1`
  margin: 0;
  font-size: 1.2em;
  text-align: center;
`

const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (
  <Container>
    <Inner>
      <Hamburger />
      <Logo />
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
