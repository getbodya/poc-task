import { useContext, useEffect } from "react"
import { Context } from "../../ctx"
import { getUsersState } from "../../store/selectors"
import { Button, Card, Elevation } from "@blueprintjs/core";
import { setUpdateUserAction } from "../../store/actions";
import { getUsersThunk } from "../../store/thunks";
 

export const UserList = () => {
    const {state, dispatch} = useContext(Context)
    const users = getUsersState(state)
    useEffect(() => {
        dispatch(getUsersThunk()) 
    }, [])
    return <>{
        users.map((user, idx) => 
        <Card 
            key={idx}
            elevation={Elevation.TWO}
        >
            <h3>{`${user.firstName} ${user.lastName}`} </h3>
            <span>Email:</span>
            <p>{user.email}</p>
            <span>Address:</span>
            <p>{user.address}</p>
            <Button  onClick={()=>dispatch(setUpdateUserAction(user))}>Update</Button>
            <Button>Delete</Button>
        </Card>
)}</>
}