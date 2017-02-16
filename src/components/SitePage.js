import React from 'react';

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const SitePage = (props) => {
    return (
        <div className="site-page">
            <SiteHeader />
            {props.children}
            <SiteFooter />
        </div>
    )
}

export default SitePage;