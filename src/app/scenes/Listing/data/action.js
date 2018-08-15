import {
	LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_ERROR
} from './constants';

import page1 from '../../../../assets/json/list-data/CONTENTLISTINGPAGE-PAGE1.json';
import page2 from '../../../../assets/json/list-data/CONTENTLISTINGPAGE-PAGE2.json';
import page3 from '../../../../assets/json/list-data/CONTENTLISTINGPAGE-PAGE3.json';

export function loadListData(text) {
  	return {
    	type: LOAD_LIST,
    	data: page1
  	}
}
function loadListDataSuccess() {
  	return {
    	type: LOAD_LIST_SUCCESS,
  	}
}

function loadListDataError() {
  	return {
    	type: LOAD_LIST_ERROR,
  	}
}