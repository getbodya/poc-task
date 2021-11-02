import {
    InputGroup,
    Label,
    Button
} from "@blueprintjs/core";
import { useContext, useEffect, useState } from "react";
import { FORM_CREATE_MODE, FORM_UPDATE_MODE } from "../../common/constants";
import { Context } from "../../ctx";
import { addressAction, createUserAction, emailAction, firstNameAction, formResetAction, lastNameAction } from "../../store/actions";
import { getFormState } from "../../store/selectors";
import { createUserThunk } from "../../store/thunks";

export const Form = () => {
    const {state, dispatch} = useContext(Context);
    const {firstName, lastName, email, address, mode} = getFormState(state)
    const submitTitles = {
        [FORM_CREATE_MODE]: 'Create User',
        [FORM_UPDATE_MODE]: 'Update User',
    }
    const onChangeFirstName = e => dispatch(firstNameAction(e.target.value))
    const onChangeLasttName = e => dispatch(lastNameAction(e.target.value))
    const onChangeEmail = e => dispatch(emailAction(e.target.value))
    const onChangeaddress = e => dispatch(addressAction(e.target.value))
    const onCreate = () => {
        if(mode === FORM_CREATE_MODE) {
            dispatch(createUserThunk({firstName, lastName, email, address}))
        }
        if(mode === FORM_UPDATE_MODE) {
            dispatch(formResetAction())
        }
        
    }
    const onReset = () => dispatch(formResetAction())

    return<>
        <Label>
            First Name
            <InputGroup value={firstName} onChange={onChangeFirstName} placeholder="Enter your first name..."/>
        </Label>
        <Label>
            Last name
            <InputGroup value={lastName} onChange={onChangeLasttName} placeholder="Enter your last name..."/>
        </Label>
        <Label>
            Email
            <InputGroup value={email} onChange={onChangeEmail} placeholder="Enter your email..."/>
        </Label>
        <Label>
            addresss
            <InputGroup value={address} onChange={onChangeaddress} placeholder="Enter your address..."/>
        </Label>
        <Button onClick={onCreate}>{submitTitles[mode] || submitTitles[FORM_CREATE_MODE]}</Button>
        <Button onClick={onReset}>RESET</Button>
    </>
}