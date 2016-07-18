// NewsHeader

import React from 'react';
import imageLogo from './y18.gif';
import './NewsHeader.css';

export default class NewsHeader extends React.Component {
  getLogo() {
    return (
        <div className="newsHeader-logo">
          <a href="http://localhost:8080/"><img src={imageLogo} /></a>
        </div>
        );
  }
  getTitle() {
      return (
          <div className="newsHeader-title">
            <a className="newsHeader-textLink" href="http://localhost:8080/">Hacker News</a>
          </div>
          );
    }
  render() {
    return (
        <div className="newsHeader">
          {this.getLogo()}
          {this.getTitle()}
        </div>
        );
  }
}
