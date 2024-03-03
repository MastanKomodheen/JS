import React from 'react'
import { google, atlassian, dropbox, shopify, slack, } from "./imports"
import "./brand.css"
const Brand = () => {
  return (
    
      <div className="gpt3__brand section__padding">
        <div>
          <img src={google} alt='brands'/>
        </div>
        <div>
          <img src={slack} alt='brands'/>
        </div>
        <div>
          <img src={atlassian} alt='brands'/>
        </div>
        <div>
          <img src={dropbox} alt='brands'/>
        </div>
        <div>
          <img src={shopify} alt='brands'/>
        </div>
      </div>
      )
}

      export default Brand