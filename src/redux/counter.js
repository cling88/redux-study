import { createAction, handleActions } from 'redux-actions'
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
/*
 ** saga ref
 - put(action) : middleware 에서 다음으로 실행할 새 액션을 디스패치함 
 - takeEvery : 액션을 모니터링하고 실행 시킴 

 takeEvery 는 2번 빠르게 클릭시 2번 호출됨. 만약 그게 싫다면 
 takeLatest 로 실행하게되면 2번 빠르게 클릭해도 이전 것은 무시되고 마지막에 클릭된것만 호출됨. 즉, 1번만 호출! 
 
*/


const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC'
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC'

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined)
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);


// sagas
function* increaseSaga() {
    yield delay(300)
    yield put(increase())
}

function* decreaseSaga() {
    yield delay(300)
    yield put(decrease())
}

export function* counterSaga(){ // monitoring functions
    yield takeEvery(INCREASE_ASYNC, increaseSaga)
    yield takeEvery(DECREASE_ASYNC, decreaseSaga)
    // yield takeLatest(DECREASE_ASYNC, decreaseSaga)
}

const initialState = 0;

const counter = handleActions({ 
    [INCREASE]: state => state + 1,
    [DECREASE]: (state) => {
        if(state <= 0) {
            alert("Can't not be smaller than zero!")
            return state
        } else {
            return state - 1
        }
    }
}, initialState)

export default counter; 
