import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default function Header() {
  return (
    <StaticQuery
      query={graphql`
      query MyQuery {
        allSanityDomain {
          nodes {
            _id
            name
          }
        }
      }
      
      `}
      render={data => (
        <header>
          <h1>{data.site.allSanityDomain.node.name}</h1>
        </header>
      )}
    />
  )
}