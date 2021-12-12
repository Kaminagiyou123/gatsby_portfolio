import React from "react"

const ProjectTemplate = ({
  pageContext: {
    attributes: { title },
  },
}) => {
  return (
    <div>
      <h4>{title}</h4>
    </div>
  )
}

export default ProjectTemplate
