import { useContext } from "react"

const formPrefix = 'FORM'
export const FORM_FIRST_NAME_TYPE = `${formPrefix}_FIRST_NAME`
export const FORM_LAST_NAME_TYPE = `${formPrefix}_LAST_NAME`
export const FORM_EMAIL_TYPE = `${formPrefix}_EMAIL`
export const FORM_ADDRESS_TYPE = `${formPrefix}_ADDRESS`
export const FORM_RESET_TYPE = `${formPrefix}_RESET`
export const FORM_SET_UPDATE_USER_TYPE = `${formPrefix}_SET_UPDATE_USER`
const userPrefix = 'USERS'
export const USERS_SET_TYPE = `${userPrefix}_SET`
const requestPrefix = 'REQUEST';
export const REQUEST_IN_PROGRESS_TYPE = `${requestPrefix}_IN_PROGRESS`;
export const REQUEST_SUCCESS_TYPE = `${requestPrefix}_SUCCESS`;
export const REQUEST_FAILED_TYPE = `${requestPrefix}_FAILED`;
export const REQUEST_CLEAR_MSG_TYPE =  `${requestPrefix}_CLEAR_MSG`;

export const firstNameAction = (payload) => ({payload, type: FORM_FIRST_NAME_TYPE})
export const lastNameAction = (payload) => ({payload, type: FORM_LAST_NAME_TYPE})
export const emailAction = (payload) => ({payload, type: FORM_EMAIL_TYPE})
export const addressAction = (payload) => ({payload, type: FORM_ADDRESS_TYPE})
export const formResetAction = () => ({type: FORM_RESET_TYPE})
export const setUpdateUserAction = (payload) => ({payload, type: FORM_SET_UPDATE_USER_TYPE})


export const setUsersAction = (payload) => ({payload, type: USERS_SET_TYPE})

export const requestInProgressAction = () => ({type: REQUEST_IN_PROGRESS_TYPE})
export const requestSuccessAction = (payload) => ({payload, type: REQUEST_SUCCESS_TYPE})
export const requestFailedAction = (payload) => ({payload, type: REQUEST_FAILED_TYPE})
export const requestClearMsgAction = () => ({type: REQUEST_CLEAR_MSG_TYPE})


