import React, { Component } from 'react'
// social media links
import FontAwesome from 'react-fontawesome'


class Footer extends Component {

render() {
  return (
       <div className="footer">
            
            <FontAwesome name="facebook fa-lg fa-fw"  />

            <FontAwesome name="instagram fa-lg fa-fw" />

            <FontAwesome name="twitter fa-lg fa-fw" />
           <h6>Roxanne Awang, Rumen Todorov, Juan Lavieri <br/>September 2018</h6>
        </div>




   )
}
}

export default Footer;