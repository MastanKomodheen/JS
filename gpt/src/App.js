import React from 'react'
import "./app.css"
import { Blogs, Features, Footer, Header, Posibility, WhatGPT3 } from "./containers"
import { CTA, Article, Brand, Feature, Navbar, } from "./components"

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Posibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App