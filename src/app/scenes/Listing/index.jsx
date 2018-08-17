import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/index.scss';
import SearchComponent from './components/search';
import ListComponent from './components/list';

import { loadListData } 	from './data/action'

class Listing extends Component {

	constructor(props) {
		super(props); 
		this.state = {
			movieGenreName: '',
			pageNumber: 0,
			scrolling: false,
			totalItems: '',
			movieList: []
		}
	}

	componentDidMount() {
		this.props.loadListData(this.state.pageNumber);
		this.scrollListener = window.addEventListener('scroll', (e) => {
			this.handleScroll(e)
		})
	}

	handleScroll(e) {
		const { totalItems, movieList, scrolling } = this.state;
		if(movieList.length < totalItems && !scrolling) {
			const lastLi = document.querySelector('.movie-list-wrapper > li:last-child')
			const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
			const pageOffset = window.pageYOffset + window.innerHeight;
			var bottomOffset = 20;
			if(pageOffset > lastLiOffset - bottomOffset) {
				this.loadMore()
			}
		}
	}

	loadMore() {
		this.setState(prevState => ({
			...this.state,
			scrolling: true,
			pageNumber: prevState.pageNumber + 1
		}),() => {
			this.props.loadListData(this.state.pageNumber);
		}) 
	}

	componentWillReceiveProps(nextProps) {
		if(!nextProps.isLoading) {
			let { data } = nextProps;
			let { movieList } = this.state;
			movieList = [
				...movieList,
				...data.page["content-items"].content
			];
			this.setState({
				...this.state,
				scrolling: false,
				totalItems: data && data.page && data.page["total-content-items"] ? data.page["total-content-items"] : '', 
				movieGenreName: data && data.page && data.page.title ? data.page.title : '',
				movieList,
			})
		}
	}
	render() {
		return (
			<section>
				<SearchComponent movieGenreName={this.state.movieGenreName} />
				<ListComponent movieList={this.state.movieList} />
			</section>
		)
	}
}

const mapState = state => ({
	data: state.listingReducer.data,
	isLoading: state.listingReducer.isLoading
});

const mapDispatch = (dispatch, props) => ({
	loadListData: (pageNumber) => dispatch(loadListData(pageNumber))
});

export default connect(mapState, mapDispatch)(Listing);
