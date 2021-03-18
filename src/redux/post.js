import { handleActions } from 'redux-actions'
import * as api from '../api/api'
import middleware from '../module/middleware'

const GET_LIST = 'post/GET_LIST'
const GET_LIST_SUCCESS = 'post/GET_LIST_SUCCESS'
const GET_USERS = 'post/GET_USERS'
const GET_USERS_SUCCESS = 'post/GET_USERS_SUCCESS'

export const getPost = middleware(GET_LIST, api.getPost);
export const getUsers = middleware(GET_USERS, api.getUsers);

const initialState = {
    list: null,
    users: null
}

const post = handleActions({
    [GET_LIST_SUCCESS]: (state, action) => ({
        ...state,
        list: action.payload
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
        ...state,
        users: action.payload
    }) 
}, initialState)

export default post;