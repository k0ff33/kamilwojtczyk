import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import htmlToReact from '../utils/htmlToReact';

import {Layout} from '../components/index';
import HeaderAlt from '../components/HeaderAlt';
import safePrefix from '../utils/safePrefix';
import Branding from '../components/Branding';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              {(_.get(this.props, 'pageContext.frontmatter.hide_header') === true) ? 
                <HeaderAlt {...this.props} />
               : 
              <header id="masthead" className="site-header">
                {_.get(this.props, 'pageContext.frontmatter.content_img_path') ? <React.Fragment>
                <style type="text/css">
                  .site-header-bg &#123;
                    background-image:url("{safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))}");
                  &#125;
                </style>
                <div id="header-bg" className="site-header-bg" />
                </React.Fragment> : (_.get(this.props, 'pageContext.site.siteMetadata.header.bg_img') && <React.Fragment>
                <style type="text/css">
                  .site-header-bg &#123;
                    background-image:url("{safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.bg_img'))}");
                  &#125;
                </style>
                <div id="header-bg" className="site-header-bg" />
                </React.Fragment>)}
                <div className="site-header-scroll">
                  <div className="site-header-inside">
                    <div className="site-header-vertical">
                      <Branding {...this.props} />
                      <Navigation {...this.props} />
                    </div>
                  </div>
                </div>
              </header>
              }
              <div id="content" className="site-content">
                <main id="main" className="site-main inner">
                  <article className="post post-full">
                    <header className="post-header">
                      <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                      <div className="post-meta">
                        <time className="published"
                          datetime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%A, %B %e, %Y')}</time>
                      </div>
                    </header>
                    {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                    <div className="post-subtitle">
                      {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </div>
                    }
                    <div className="post-content">
                      {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    </div>
                  </article>
                </main>
                <Footer {...this.props} />
              </div>
            </Layout>
        );
    }
}
