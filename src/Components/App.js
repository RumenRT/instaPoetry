import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'
import APIKEY from '../config.js'

const API_KEY = APIKEY


class App extends Component {
      constructor(props) {
          super(props);
          this.state = {
              value: {
                  valueAuthor: '',
                  valueTitle: '',
                  valueLine: ''
              },
              author: [],
              title: [],
              line: []
          };
          this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
          this.handleChangeTitle = this.handleChangeTitle.bind(this);
          this.handleChangeLine = this.handleChangeLine.bind(this);
          this.handleSubmitAuthor = this.handleSubmitAuthor.bind(this);
          this.handleSubmitTitle = this.handleSubmitTitle.bind(this);
          this.handleSubmitLine = this.handleSubmitLine.bind(this);
      }
      handleChangeAuthor(event) {
          let { value } = this.state;
          value.valueAuthor = event.target.value;
          this.setState({value});
      }
    handleChangeTitle(event) {
        let { value } = this.state;
        value.valueTitle = event.target.value
          this.setState({value});
      }

    handleChangeLine(event) {
        let { value } = this.state;
        value.valueLine = event.target.value
         this.setState({value});
      }

      async handleSubmitAuthor(event) {
          event.preventDefault();
          let author;
          author = await axios.get(`https://thundercomb-poetry-db-v1.p.mashape.com/author/${this.state.value.valueAuthor}`, {
              headers: {
                  'X-Mashape-Key': `${API_KEY}`
              }
          })
          
          author = author.data.slice(0, 10)
          console.log("look here for author")
          this.setState({author})
          console.log(this.state.author)
      }

          async handleSubmitTitle(event) {
              event.preventDefault();
              let title;
              title = await axios.get(`https://thundercomb-poetry-db-v1.p.mashape.com/title/${this.state.value.valueTitle}`, {
                  headers: {
                      'X-Mashape-Key': `${API_KEY}`
                  }
              })
              title = title.data.slice(0, 10)
              console.log("look here for title")
              this.setState({title})
              console.log(this.state.title)
          }

         async handleSubmitLine(event) {
              event.preventDefault();
              let line;
              line = await axios.get(`https://thundercomb-poetry-db-v1.p.mashape.com/lines/${this.state.value.valueLine}`, {
                  headers: {
                      'X-Mashape-Key': `${API_KEY}`
                  }
              })
              line = line.data.slice(0, 10)
              console.log("look here for line")
              this.setState({line})
              console.log(this.state.line)
          }

render() {
    return (
       
    <div className="search">
    
    <div><Header></Header></div>
           
        <ul className="nav-bar">
            <li className="nav-item">
                 <form onSubmit={this.handleSubmitAuthor}>
                    <div className="author">
                    <label>
                    <input type="text" placeholder="Author" value={this.state.valueAuthor}
                            onChange={this.handleChangeAuthor}/>
                    </label>
                    <input type="submit" value="Search" />
                    </div>
                </form>
            </li>
            <li className="nav-item">
             <form onSubmit={this.handleSubmitTitle}>
                <label>
                    <input
                        type="text" placeholder="Title"
                        value={this.state.value.valueTitle}
                        onChange={this.handleChangeTitle}
                    />
                </label>
                <input type="submit" value="Search" />
            </form>
            </li>
            <li className="nav-item">
              <form onSubmit={this.handleSubmitLine}>
                <label>
                    
                    <input
                        type="text" placeholder="Lines or words..."
                        value={this.state.value.valueLine}
                        onChange={this.handleChangeLine}
                    />
                </label>
                <input type="submit" value="Search" />
            </form>
            </li>
        </ul>
            {this.state.author.map((author) => {
            return (
                <div>
                    <div className='poem'>Title:{author.title}</div>
                    <div className='poem'>Author: {author.author}</div>
                    {author.lines.map((line) => {
                        return (
                            <div>{line}</div>
                        )
                    }).slice(0,40)}
                    <hr />
                </div>
            )
        })}

            {this.state.title.map((title) => {
            return (
                <div>
                    <div className='poem'>Title:{title.title}</div>
                    <div className='poem'>Author: {title.author}</div>
                    {title.lines.map((line) => {
                        return (
                            <div>{line}</div>
                        )
                    }).slice(0,40)}
                    <hr />
                </div>
            )
        })}

            {this.state.line.map((line) => {
            return (
                <div>
                    <div className='poem'>Title:{line.title}</div>
                    <div className='poem'>Author: {line.author}</div>
                    {line.lines.map((line) => {
                        return(
                            <div>{line}</div>
                        )
                    }).slice(0,40)}
                    <hr />
                </div>
            )
        })}
    <div><Footer></Footer></div>
    </div>
    )}
}

export default App