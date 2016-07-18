// NewsItem.js

import React from 'react';
import './NewsItem.css';
import URL from 'url';

export default class NewsItem extends React.Component {

  getDomain() {
    return URL.parse(this.props.item.url).hostname;
  }
  getTitle() {
    return (
        <div className="newsItem-title">
          <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
          <span className="newsItem-domain"><a href={'http://localhost:8080/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
        </div>
        );
  }

  render() {
    return (
        <div className="newsItem">
          <div className="NewsItem-itemText">
            {this.getTitle()}
          </div>
        </div>
        );
  }
}
