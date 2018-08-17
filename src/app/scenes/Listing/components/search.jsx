import React, { Component } from 'react';
import { connect } from 'react-redux';

import BackButton from '../../../../../dist/assets/img/icons/Back.png';
import SearchButton from '../../../../../dist/assets/img/icons/search.png';

class SearchComponent extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
	}
	componentWillReceiveProps(nextProps) {
	}
	render() {
		return (
			<header className='page-header'>
				<span className='back-button'>
					<img src={BackButton} />
				</span>
				<h1>{this.props.movieGenreName}</h1>
				<span className='search-button'>
					<img src={SearchButton} />
				</span>
			</header>
		)
	}
}

const mapState = state => ({
});

const mapDispatch = (dispatch, props) => ({
});

export default connect(mapState, mapDispatch)(SearchComponent);
