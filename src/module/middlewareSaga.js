import { call, put } from 'redux-saga/effects'
import { startLoading, finishLoading } from '../redux/loading'

const middlewareSaga = (type, request) => {  // 액션함수, api호출
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action) {
        yield put(startLoading(type))
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data
            })
        } catch(e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            })
        }
        yield put(finishLoading(type))
    }

    // return params => async dispatch => {
    //     dispatch({type}); // start
    //     dispatch(startLoading(type));
    //     try {
    //         const response = await request(params);
    //         dispatch({
    //             type: SUCCESS,
    //             payload: response.data
    //         })
            
    //         dispatch(finishLoading(type))
    //     } catch(e) {
    //         dispatch({
    //             type: FAILURE,
    //             payload: e,
    //             error: true
    //         })
    //         dispatch(startLoading(type))
    //         throw e;
    //     }
         
    // }
}

export default middlewareSaga