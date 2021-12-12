import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Error" />
      <main className="error-page">
        <div className="error-container">
          <h1>oops it is a dead end</h1>
          <Link to="/" classname="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
