import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Hero from '../sections/hero/Herodev.js'
import AboutOne from '../sections/about/AboutOne.js'
import ServicesOne from '../sections/services/ServicesOne.js'


class Index extends React.Component {

  

  render() {
    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout
          isHome={true}
          sections={['HOME', 'PLANOS', 'CONTRATAR', 'SIMULAR']}
        >
          <Hero />
          <AboutOne />
          <ServicesOne />
        </Layout>
      </div>
    )
  }
}

export default Index

export const creativeOneQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`