import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListComponent extends Component {

	componentDidMount() {
	}
	componentWillReceiveProps(nextProps) {
	}
	render() {
		const itemListing = this.props.movieList.map((item, index) => {
			let basePosterImgUrl = '../../../../../assets/img/poster/';
			let imgSrc =  basePosterImgUrl + item["poster-image"] 
			return (
				<li key={index} className='each-movie'>
					<span className='movie-poster-wrapper'>
						<img src={imgSrc} />
					</span>
					<span className='movie-name'>{item.name}</span>
				</li>
			)
		})
		return (
			<section className='movie-list-container'>
				<ul className='movie-list-wrapper'>
					{itemListing}
				</ul>
			</section>
		)
	}
}

const mapState = state => ({
});

const mapDispatch = (dispatch, props) => ({
});

export default connect(mapState, mapDispatch)(ListComponent);
