import './style.css'
import { Spinner } from "@blueprintjs/core"
import { Context } from '../../ctx';
import { useContext } from 'react';
import { IsShowLoaderSelector } from '../../store/selectors';

export const Loader = () => {
    const {state} = useContext(Context);
    const isShow = IsShowLoaderSelector(state);

    return <div className={`loader ${isShow ? 'show': ''}`}>
        <Spinner />
    </div>
}