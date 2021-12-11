import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = props => {
  const {
    description,
    url,
    slug,
    title,
    github,
    index,
  } = props.project.attributes
  console.log(props)
  return (
    <article className="project">
      <div className="project-info">
        <span className="project-number">{index}</span>
        <Link to={`/projects/${slug} `} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="description">{description}</p>
      </div>
      <div className="project-links">
        <a href={github}>
          {" "}
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={url}>
          {" "}
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </article>
  )
}

export default Project
