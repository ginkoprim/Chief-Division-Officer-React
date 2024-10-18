import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Chief Division Officer</title>
        <meta property="og:title" content="Chief Division Officer" />
      </Helmet>
    </div>
  )
}

export default Home
