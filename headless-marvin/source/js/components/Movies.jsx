import React, { Component } from 'react';

export default class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    let dataURL = "http://headless-marvin/wp-json/wp/v2/movies?_embed";
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({movies: res})
    });
  }

  render() {
    const movies = this.state.movies.map((movie, index) => {
      var imageUrl = movie._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
      var bgImage = {
        backgroundImage: 'url(' + imageUrl + ')'
      }
      return (
        <div className="card" key={index}>
          <figure style={bgImage}></figure>
          <h4>{movie.title.rendered}</h4>
          <div>
            <span>{movie.acf.release_year}</span>
            <span>{movie.acf.rating}</span>
          </div>
        </div>
      )
    });
    return(
      <div className="movies">
        <h2>I Like Star Wars</h2>
        {movies}
      </div>
    )
  }
}
