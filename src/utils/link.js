import _ from 'lodash';

export default function(pages, path) {
    if (_.startsWith(path, '#')) {
        return path;
    } else {
        const page = _.find(pages, {relativePath: path});
        if (!page) {
            throw new Error('could not find page with path: ' + path);
        }
        return page.url;
    }
}
