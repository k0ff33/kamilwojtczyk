import React from 'react';
import _ from 'lodash';
import htmlToReact from '../utils/htmlToReact';

import {Layout} from '../components/index';
import safePrefix from '../utils/safePrefix';
import Branding from '../components/Branding';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default class Contact extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <header id="masthead" className="site-header">
              {_.get(this.props, 'pageContext.frontmatter.img_path') ? <React.Fragment>
              <style type="text/css">
                .site-header-bg &#123;
                  background-image:url("{safePrefix(_.get(this.props, 'pageContext.frontmatter.img_path'))}");
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
            <div id="content" className="site-content">
              <main id="main" className="site-main inner">
                <article className="post page post-full">
                  <header className="post-header">
                    <h1 className="post-title">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                  </header>
                  {_.get(this.props, 'pageContext.frontmatter.subtitle') && 
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                  </div>
                  }
                  <div className="post-content">
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                    <form name="contactForm" method="POST" netlifyhoneypot="bot-field" datanetlify="true" id="contact-form"
                      className="contact-form">
                      <p className="screen-reader-text">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                      </p>
                      <p className="form-row">
                        <label className="form-label">Name *</label>
                        <input type="text" name="name" placeholder="Your name..." className="form-input"/>
                      </p>
                      <p className="form-row">
                        <label className="form-label">Email *</label>
                        <input type="email" name="email" placeholder="Your email address..." className="form-input"/>
                      </p>
                      <p className="form-row">
                        <label className="form-label">Message *</label>
                        <textarea name="message" placeholder="Your message..." className="form-textarea" rows="7" />
                      </p>
                      <input type="hidden" name="form-name" value="contactForm" />
                      <p className="form-row">
                        <button type="submit" className="button">Send Message</button>
                      </p>
                    </form>
                  </div>
                </article>
              </main>
              <Footer {...this.props} />
            </div>
            </Layout>
        );
    }
}
