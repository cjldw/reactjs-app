import {createAction, handleAction} from "redux-actions";

export const DO_SUBSCRIBE = "DO_SUBSCRIBE";
export const DO_SUBSCRIBE_REQUEST = "DO_SUBSCRIBE_REQUEST";
export const DO_SUBSCRIBE_RESPONSE = "DO_SUBSCRIBE_RESPONSE";

export const doSubscribeRequest = createAction(DO_SUBSCRIBE_REQUEST);
export const doSubscribeResponse = createAction(DO_SUBSCRIBE_RESPONSE);

export const doSubscribe = function(text){
    return (dispatch) => {
        dispatch(doSubscribeRequest('请求中....'))
        setTimeout(() => {
            fetch('http://localhost:8080/data.json').then((response) => response.json()).then((data) => {
                dispatch(doSubscribeResponse(data));
            });
        }, 5000)
    }
}

