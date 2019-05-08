import React from 'react';
import _ from 'lodash';

export default class Social extends React.Component {
    render() {
        return (
            <div className="social-links">
              {_.map(_.get(this.props, 'pageContext.site.data.social.links'), (link, link_idx) => (
              <a key={link_idx} href={_.get(link, 'url')} target="_blank" rel="noopener"><span className={'fab ' + _.get(link, 'icon')}
                  ariahidden="true"/><span className="screen-reader-text">{_.get(link, 'title')}</span></a>
              ))}
            </div>
        );
    }
}
