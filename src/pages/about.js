import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({ data: StrapiAbout }) => {
  const { imageSharp, allStrapiAbout } = StrapiAbout
  const image = imageSharp.gatsbyImageData
  const { info, title } = allStrapiAbout.nodes[0].data.attributes

  return (
    <>
      <Seo title="about" />
      <section className="about-page">
        <div className="section-center about-center">
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    imageSharp {
      gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
    }
    allStrapiAbout {
      nodes {
        data {
          attributes {
            info
            title
          }
          id
        }
      }
    }
  }
`

export default About
