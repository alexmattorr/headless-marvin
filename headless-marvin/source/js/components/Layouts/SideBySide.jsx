import React, {Component} from 'react';

export default class SideBySide extends React.Component {
  render() {
    var margin = {margin: '0 0 50px 0'}
    var paddingRight = {paddingRight: '25px'}
    var paddingLeft = {paddingLeft: '25px'}

    // uncomment to see data for this component
    // console.log(this.props.data);
    
    return (
      <div style={margin}>
        <h5>ACF Template: {this.props.data.acf_fc_layout}</h5>
        <div className="row side-by-side">
          <div className="small-6" style={paddingRight}>
            <h3>{this.props.data.title}</h3>
            <div dangerouslySetInnerHTML={{__html: this.props.data.text}}></div>
          </div>
          <div className="small-6" style={paddingLeft}>
            <img src={this.props.data.image} />
          </div>
        </div>
      </div>
    )
  }
}
