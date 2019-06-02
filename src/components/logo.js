import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components";

const LogoWrapper = styled(Img)`
  width: 190px;
  margin: 0 auto;
`

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logoImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 190) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <LogoWrapper fluid={data.logoImage.childImageSharp.fluid} />}
  />
)
export default Logo
