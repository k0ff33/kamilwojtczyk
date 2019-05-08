import React from 'react';
import _ from 'lodash';

import safePrefix from '../utils/safePrefix';

export default class Branding extends React.Component {
    render() {
        return (
            <div className="site-branding">
              {_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img') && 
              (!_.get(this.props, 'pageContext.site.siteMetadata.header.title')) && 
              <p className="site-logo">
                <a href={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')}><img src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.header.logo_img'))}
                    alt="Logo" /></a>
              </p>
              }
              {(_.get(this.props, 'pageContext.frontmatter.template') === 'home') ? 
              <h1 className="site-title"><a href={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</a></h1>
               : 
              <p className="site-title"><a href={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')}>{_.get(this.props, 'pageContext.site.siteMetadata.header.title')}</a></p>
              }
              {_.get(this.props, 'pageContext.site.siteMetadata.header.tagline') && 
              <p className="site-description">{_.get(this.props, 'pageContext.site.siteMetadata.header.tagline')}</p>
              }
            </div>
        );
    }
}
