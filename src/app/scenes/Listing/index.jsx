import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadListData } from './data/action'

class Listing extends Component {

	componentDidMount() {
		this.props.loadListData();
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
	}
	render() {
		return (
			<div>Welcome to the listing page</div>
		)
	}
}

const mapState = state => ({
	data: state.listingReducer.data,
});

const mapDispatch = (dispatch, props) => ({
	loadListData: () => dispatch(loadListData())
});

export default connect(mapState, mapDispatch)(Listing);
