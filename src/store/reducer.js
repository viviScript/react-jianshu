// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';
// redux-immutable
export default combineReducers({
    header: headerReducer
})