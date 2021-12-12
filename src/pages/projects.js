import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({ data }) => {
  const projects = data.allStrapiProject.nodes[0].data
  return (
    <>
      <Seo title="projects" />
      <main>
        <section classname="project-page">
          <Projects title="all-projects" projects={projects} />
        </section>
      </main>
    </>
  )
}
export const query = graphql`
  {
    allStrapiProject {
      nodes {
        data {
          attributes {
            description
            github
            slug
            title
            url
            featured
          }
        }
        children {
          ... on StrapiProject {
            id
            children {
              ... on ImageSharp {
                id
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
export default ProjectsPage
