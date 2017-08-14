import React, {Component} from 'react';

export default class Hero extends React.Component {
  render() {

    var imageUrl = this.props.data.image;
    var bg = {backgroundImage: 'url(' + imageUrl + ')'}
    var margin = {margin: '0 0 50px 0'}

    // uncomment to see data for this component
    // console.log(this.props.data);

    return (
      <div style={margin}>
        <h5>ACF Template: {this.props.data.acf_fc_layout}</h5>
        <figure className="hero" style={bg}>
          <div className="univeral-padding">
            <h1>{this.props.data.title}</h1>
            <p>{this.props.data.sub_text}</p>
          </div>
        </figure>
      </div>
    )
  }
}
