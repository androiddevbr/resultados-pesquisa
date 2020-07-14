import { graphql, useStaticQuery } from 'gatsby'

export interface SiteMetadata {
  title: string
  description: string
  author: {
    name: string
    content: string
  }
  social: {
    github: string
    twitter: string
    slack: string
  }
}

export default (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author {
            name
            content
          }
          social {
            github
            twitter
            slack
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}
