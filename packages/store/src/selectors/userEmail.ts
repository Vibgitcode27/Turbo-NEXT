import { selector } from "recoil";
import { userState } from "..";

export const userEmailState = selector({
    key : "userEmailState" ,
    get : ({get}) =>
    {
        const state = get(userState)
        return state.userEmail
    }
})