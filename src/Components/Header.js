import React, { Component } from 'react';


class Header extends Component {
    render (){
        return (
          <section>
              <header className="head">
                  <img src="../../InstaPoet.png" alt="instaPoetry logo"/>
                  <h1>instaPoetry</h1>
              </header>
          </section>
        );
    }
}



export default Header;