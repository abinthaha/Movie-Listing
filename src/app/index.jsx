import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import Listing from './scenes/Listing';

export default function Root({ store }) {
    return (
    	<Provider store={store}>
        	<Listing/>
    	</Provider>
    );
}

Root.propTypes = {
	store: PropTypes.object.isRequired
};
