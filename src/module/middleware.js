// saga 미들웨어로 대체되어 사용하지 않음, 소스비교를 위해 냄겨둠
import { startLoading, finishLoading } from '../redux/loading'

const middleware = (type, request) => {  // 액션함수, api호출
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return params => async dispatch => {
        dispatch({type}); // start
        dispatch(startLoading(type));
        try {
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
            
            dispatch(finishLoading(type))
        } catch(e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            })
            dispatch(startLoading(type))
            throw e;
        }
         
    }
}

export default middleware