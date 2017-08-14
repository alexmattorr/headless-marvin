import React, {Component} from 'react';

import Hero from 'components/Layouts/Hero';
import SideBySide from 'components/Layouts/SideBySide';

export default class PageBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: []
    }
  }

  componentDidMount() {
    let dataURL = "http://headless-marvin/wp-json/wp/v2/pages/";
    fetch(dataURL).then(res => res.json()).then(res => {
      this.setState({
        pages: res
      })
    });
  }

  render() {
      const pages = this.state.pages.map((page, i) => {
        var style = {
          margin: '0 0 25px 0'
        }

        var layouts = page.acf.layouts;
        var layout;

        if(layouts != undefined) {
          var layout = Object.keys(layouts).map(function(i) {
            var title = layouts[i].acf_fc_layout;
              if(title === 'hero') {
                return <Hero data={layouts[i]} />
              } else if(title === 'side_by_side') {
                return <SideBySide data={layouts[i]} />
              } else {
                console.log('none');
              }
          });
        }

        return(
          <div className="pages" key={i} style={style}>
            <h4>{page.title.rendered}</h4>
            <div className="layouts">
              {layout}
            </div>
          </div>
        )
      });
    return (
      <div className="univeral-padding">
        <h3>Pages w/ ACF Template Builder</h3>
        <div className="pages">
          {pages}
        </div>
      </div>
    )
  }
}
