import NavBar from './NavBar'
import GifListContainer from "../containers/GifListContainer";
import React, { Component } from 'react'
import GifSearch from './GifSearch';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      gifs: []
    }
  }

  handleData = async (searchData) => { 
    await this.setState({searchTerm: searchData})
    this.fetchGifs()
  }

  fetchGifs = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
    .then(json => {
      let gifs = json.data;
      this.setState({gifs: gifs})
    })
  } 

  render() {
    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          < GifListContainer gifs={this.state.gifs}/>
          < GifSearch handleData={this.handleData} />
      </div>
    )
  }
}
