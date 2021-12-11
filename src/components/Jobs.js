import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
const query = graphql`
  {
    allStrapiJob(sort: { fields: data___id, order: ASC }) {
      nodes {
        data {
          attributes {
            company
            date
            title
          }
        }
      }
    }
  }
`
const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJob: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)

  const { company, title, date } = jobs[0].data[value].attributes

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs[0].data.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => {
                  setValue(index)
                }}
              >
                {item.attributes.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
