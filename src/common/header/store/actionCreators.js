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
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
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
export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})