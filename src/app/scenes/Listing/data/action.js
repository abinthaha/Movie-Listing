import {
	LOAD_LIST_FINISHED, LOAD_LIST_STARTED, LOAD_LIST_ERROR, BASE_URL_JSON
} from './constants';

const pageNumberToNameArray = ["CONTENTLISTINGPAGE-PAGE1.json", "CONTENTLISTINGPAGE-PAGE2.json", "CONTENTLISTINGPAGE-PAGE3.json"]

export function loadListData(pageNumber) {
	const jsonName = pageNumberToNameArray[pageNumber];
	return (dispatch) => {
		dispatch(loadListDataStarted());
		try {
			fetch(BASE_URL_JSON + jsonName)
				.then((res) => res.json())
				.then((data) => {
					dispatch(loadListDataFinished(data));
				}).catch((err) => {
					console.log(err);
					dispatch(loadListDataError(err));
				})
		}
		catch(err) {
			dispatch(loadListDataError(err));
		}
	}
}

/** To dispatch when we start fetching the data */
function loadListDataStarted() {
  	return {
    	type: LOAD_LIST_STARTED,
  	}
}

/** To dispatch when we finish fetching the data */
function loadListDataFinished(data) {
	return {
    	type: LOAD_LIST_FINISHED,
    	data
  	}
}

/** To dispatch when cause any error in fetching the data */
function loadListDataError(err) {
	return {
    	type: LOAD_LIST_ERROR,
    	err
  	}
}