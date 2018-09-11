import React, { Component } from 'react'
// social media links
import FontAwesome from 'react-fontawesome'


class Footer extends Component {

render() {
  return (
       <div className="footer">
       <a href="https://facebook.com"><FontAwesome name="facebook fa-lg fa-fw" /></a>

      <a href="https://instagram.com"><FontAwesome name="instagram fa-lg fa-fw" /></a>

      <a href="https://twitter.com"><FontAwesome name="twitter fa-lg fa-fw" /></a>
           <h6>Roxanne Awang, Rumen Todorov, Juan Lavieri <br/>September 2018</h6>
        </div>




   )
}
}

export default Footer;