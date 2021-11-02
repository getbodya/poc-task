import './style.css'
import { useContext, useEffect } from "react"
import { Context } from "../../ctx"
import { requestClearMsgAction } from '../../store/actions'

export const Notification = () => {
    const {state, dispatch} = useContext(Context)
    useEffect(() => {
        setTimeout(()=> {
            dispatch(requestClearMsgAction())
        }, 4000)
    },[state.requests.message])
    
    return <div className={`notification-box  ${state.requests.status} ${state.requests.message ? 'show': ''}`}>
        {state.requests.message}
    </div>
}