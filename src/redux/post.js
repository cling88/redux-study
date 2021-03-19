import { createAction, handleActions } from 'redux-actions'
import { takeLatest } from 'redux-saga/effects' // redux-saga
import * as api from '../api/api'
// import middleware from '../module/middleware'
import middlewareSaga from '../module/middlewareSaga'


const GET_LIST = 'post/GET_LIST'
const GET_LIST_SUCCESS = 'post/GET_LIST_SUCCESS'
const GET_USERS = 'post/GET_USERS'
const GET_USERS_SUCCESS = 'post/GET_USERS_SUCCESS'

// export const getPost = middlewareSaga(GET_LIST, api.getPost);
// export const getUsers = middlewareSaga(GET_USERS, api.getUsers);

export const getPost = createAction(GET_LIST, id => id)
export const getUsers = createAction(GET_USERS)

const getPostSaga = middlewareSaga(GET_LIST, api.getPost)
const getUsersSaga = middlewareSaga(GET_USERS, api.getUsers)

export function* postSaga() {
    yield takeLatest(GET_LIST, getPostSaga)
    yield takeLatest(GET_USERS, getUsersSaga)
}

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