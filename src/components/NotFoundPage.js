import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    //Link for efficient client side routing within the same site
    //NavLink offers additional functionality than Link (i.e. activeClassName)
    //If linking to external site, continue using <a> tags
    <div>
        OH No, not found! -
        <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;