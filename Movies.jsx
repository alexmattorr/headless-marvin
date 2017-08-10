import React from 'react'

export default class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    let dataURL = "http://headless-wordpress/wp-json/wp/v2/movies?_embed";
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({movies: res})
    })
  }

  const movies = this.state.movies.map((movie, index) => {
    var imageUrl = movie._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
    var bgImage = {
      backgroundImage: 'url(' + imageUrl + ')'
    }
    return (
      <div className="card" key={index}>
        <figure style={bgImage}></figure>
        <h2>{movie.title.rendered}</h2>
        <div>
          <span>{movie.acf.release_year}</span>
          <span>{movie.acf.rating}</span>
        </div>
      </div>
    )
  });

  render() {
    return(
      <div className="movies">
        <h3>Hello</h3>
        {movies}
      </div>
    )
  }
}

export default Movies
