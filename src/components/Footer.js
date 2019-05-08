import React from 'react';
import _ from 'lodash';
import htmlToReact from '../utils/htmlToReact';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="colophon" className="site-footer">
              <p className="site-info">
                {htmlToReact(_.get(this.props, 'pageContext.site.siteMetadata.footer.content'))}
                &nbsp;
                {_.map(_.get(this.props, 'pageContext.site.siteMetadata.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                <a key={link_idx} href={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</a>.
                </React.Fragment>))}
              </p>
              <a id="to-top" className="to-top" href="#page">To top <span className="icon-arrow-up" ariahidden="true" /></a>
            </footer>
        );
    }
}
