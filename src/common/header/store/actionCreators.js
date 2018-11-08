import * as actionTypes from './actionTypes';
import axios from 'axios'
import { fromJS } from 'immutable';
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})
const change_list = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
})
export const getList = () => {
    return (dispatch) => {
        axios.post('/api/headerList').then((res) => {
            console.log(res)
            dispatch(change_list(res.data.list))
        }).catch((err) => {
            console.log(err);
        })
    }
}