import { FAILED_REQUEST, FORM_UPDATE_MODE, IN_PROGRESS_REQUEST, SUCCESS_REQUEST } from "../common/constants";
import { FORM_ADDRESS_TYPE, FORM_EMAIL_TYPE, FORM_FIRST_NAME_TYPE, FORM_LAST_NAME_TYPE, FORM_RESET_TYPE, FORM_SET_UPDATE_USER_TYPE, REQUEST_CLEAR_MSG_TYPE, REQUEST_FAILED_TYPE, REQUEST_IN_PROGRESS_TYPE, REQUEST_SUCCESS_TYPE, USERS_SET_TYPE, USER_CREATE_TYPE } from "./actions";
import { initialState } from "./state";

export const reducer = (state, {type, payload}) => {
    switch (type) {
        case FORM_FIRST_NAME_TYPE:
            return {
                ...state,
                form: {
                    ...state.form,
                    firstName: payload
                }
            }
        case FORM_LAST_NAME_TYPE:
            return {
                ...state,
                form: {
                    ...state.form,
                    lastName: payload
                }
            }
        case FORM_EMAIL_TYPE:
            return {
                ...state,
                form: {
                    ...state.form,
                    email: payload
                }
            }
        case FORM_ADDRESS_TYPE:
            return {
                ...state,
                form: {
                    ...state.form,
                    address: payload
                }
            }
        case FORM_RESET_TYPE:
            return {
                ...state,
                form: initialState.form
            }
        case FORM_SET_UPDATE_USER_TYPE: 
            return {
                ...state,
                form: {
                    ...state.form,
                    mode: FORM_UPDATE_MODE,
                    ...payload
                }
            }
        
        case REQUEST_IN_PROGRESS_TYPE: 
            return {
                ...state,
                requests: {
                    status: IN_PROGRESS_REQUEST,
                    message: ''
                }
            }
        case REQUEST_SUCCESS_TYPE: 
            return {
                ...state,
                requests: {
                    status: SUCCESS_REQUEST,
                    message: payload
                }
            }
        case REQUEST_FAILED_TYPE: 
            return {
                ...state,
                requests: {
                    status: FAILED_REQUEST,
                    message: payload
                }
            }
        case REQUEST_CLEAR_MSG_TYPE: 
            return {
                ...state,
                requests: {
                    ...state.requests,
                    message: ''
                }
            }
        case USERS_SET_TYPE: 
            return {
                ...state,
                users: payload
            }
        default:
            return state;
    }
}