import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/index'

const IndexPage = () => (
  <div>
    <Container>
      <h1>Gatsby with Material Ui</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Container>
  </div>
)

export default IndexPage
