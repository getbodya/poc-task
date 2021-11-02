import { IN_PROGRESS_REQUEST } from "../common/constants";
import { initialState } from "./state";

export const getFormState = (state) => state.form || initialState.form
export const getUsersState = (state) => state.users || initialState.users

export const IsShowLoaderSelector = ({requests}) => {
    return requests.status === IN_PROGRESS_REQUEST
} 