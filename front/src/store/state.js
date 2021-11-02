import { FORM_CREATE_MODE, SUCCESS_REQUEST } from "../common/constants";

export const initialState = {
    form: {
        mode: FORM_CREATE_MODE,
        firstName: '',
        lastName: '',
        email: '',
        address: ''
    },
    requests: {
        status: SUCCESS_REQUEST,
        msg: ''
    },
    users: []
}