import React, { Component } from 'react';

export default class Albums extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    let dataURL = "http://headless-marvin/wp-json/wp/v2/tool_albums?_embed";
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({albums: res})
    });
  }

  render() {
    const albums = this.state.albums.map((album, index) => {
      var imageUrl = album._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url;
      var cover = {
        backgroundImage: 'url(' + imageUrl + ')'
      }

      // how you inject wordpress content that has markup in it
      // <div dangerouslySetInnerHTML={{__html: album.acf.description}}></div>

      return (
        <div className="card quarter" key={index}>
          <figure style={cover}></figure>
          <div className="card-content">
            <h5>{album.title.rendered}</h5>
            <p className="no-margin small-text">{album.acf.year_released}</p>
          </div>
        </div>
      )
    });
    return(
      <div className="univeral-padding">
        <h4>Pulling in Custom Post Type Data</h4>
        <div className="row card-wrapper">
          {albums}
        </div>
      </div>
    )
  }
}
