import { userService } from "../services/user.service"
import { requestFailedAction, requestInProgressAction, requestSuccessAction, setUsersAction } from "./actions"

export const createUserThunk = (payload) => async (dispath) => {
    try {
        dispath(requestInProgressAction())
        await userService.create(payload)
        const users = await userService.getUsers()
        dispath(setUsersAction(users))

        dispath(requestSuccessAction('USER HAS BEEN CREATED'))
    } catch (error) {
        dispath(requestFailedAction(error.message))
    }
}
export const getUsersThunk = () => async (dispath) => {
    try {
        dispath(requestInProgressAction())
        const users = await userService.getUsers()
        dispath(setUsersAction(users))
        dispath(requestSuccessAction(''))

    } catch (error) {
        dispath(requestFailedAction(error.message))
    }
}
