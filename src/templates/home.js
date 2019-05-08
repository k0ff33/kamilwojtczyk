import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import safePrefix from '../utils/safePrefix';
import Branding from '../components/Branding';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default class Home extends React.Component {
    render() {
        let display_posts = _.orderBy(_.get(this.props, 'pageContext.pages').filter(page => page.relativeDir === 'posts'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
              <header id="masthead" className="site-header">
                {_.get(this.props, 'pageContext.site.siteMetadata.header.bg_img') && <React.Fragment>
                <style type="text/css">
                  .site-header-bg &#123;
                    background-image: url("{safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.bg_img'))}");
                  &#125;
                </style>
                <div id="header-bg" className="site-header-bg" />
                </React.Fragment>}
                <div className="site-header-scroll">
                  <div className="site-header-inside">
                    <div className="site-header-vertical">
                      <Branding {...this.props} />
                      <Navigation {...this.props} />
                    </div>
                  </div>
                </div>
              </header>
              <div id="content" className="site-content">
                <main id="main" className="site-main inner">
                  <div className="post-feed">
                    {_.map(display_posts, (post, post_idx) => (
                    <article key={post_idx} className="post">
                      <header className="post-header">
                        <h2 className="post-title"><a href={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</a></h2>
                        <div className="post-meta">
                          Published on <time className="published"
                            datetime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time>
                        </div>
                      </header>
                      {_.get(post, 'frontmatter.thumb_img_path') && 
                      <a className="post-thumbnail" href={safePrefix(_.get(post, 'url'))}>
                        <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
                      </a>
                      }
                      <div className="post-content">
                        <p>{_.get(post, 'frontmatter.excerpt')}</p>
                      </div>
                      <p className="read-more">
                        <a className="read-more-link" href={safePrefix(_.get(post, 'url'))}>Keep reading <span className="icon-arrow-right" ariahidden="true" /></a>
                      </p>
                    </article>
                    ))}
                  </div>
                </main>
                <Footer {...this.props} />
              </div>
            </Layout>
        );
    }
}
