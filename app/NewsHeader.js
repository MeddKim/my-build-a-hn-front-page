// NewsHeader

import React from 'react';
import imageLogo from './y18.gif';
import './NewsHeader.css';

export default class NewsHeader extends React.Component {
  // 获取logo
  getLogo() {
    return (
        <div className="newsHeader-logo">
          <a href="http://localhost:8080/"><img src={imageLogo} /></a>
        </div>
        );
  }
  // 获取title
  getTitle() {
      return (
          <div className="newsHeader-title">
            <a className="newsHeader-textLink" href="http://localhost:8080/">Hacker News</a>
          </div>
          );
  }
  // 获取导航条
  getNav() {
    var navLinks = [
      {
         name: 'new',
         url: 'newest'
      },
      {
         name: 'comments',
         url: 'newcomments'
      },
      {
         name: 'show',
         url: 'show'
      },
      {
         name: 'ask',
         url: 'ask'
      },
      {
         name: 'jobs',
         url: 'jobs'
      },
      {
         name: 'submit',
         url: 'submit'
      }
    ];

    return (
        <div className="newsHeader-nav">
          {
            navLinks.map(function(navLink){
              return (
                  <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"http://localhost:8080/" + navLink.url} >
                    {navLink.name}
                  </a> 
                  );
            })
          }
        </div>
        );
  }
  // 登录入口
  getLogin() {
    return (
        <div className="newsHeader-login">
          <a className="newsHeader-textLink" href="http://localhost:8080/login?goto=news">login</a>
        </div>
        );
  }
  render() {
    return (
        <div className="newsHeader">
          {this.getLogo()}
          {this.getTitle()}
          {this.getNav()}
          {this.getLogin()}
        </div>
        );
  }
}
