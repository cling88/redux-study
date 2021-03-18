import { combineReducers } from 'redux'
// saga
import { all } from 'redux-saga/effects'

import counter, { counterSaga } from './counter'
import post from './post'
import loading from './loading'


const rootReducer = combineReducers({
    counter, 
    post,
    loading
})

export function* rootSaga(){
    yield all([counterSaga()])
}

export default rootReducer