import {createReducer, on} from "@ngrx/store";
import {login} from "./auth.actions";
import {Auth} from "./auth.model";

export const initialState: Auth = {
  loggedIn: false,
  username: ''
}

export  const authReducer = createReducer(
  initialState,
  on(login, (state)=> {return {...state, loggedIn: true, username: 'test'}})
)
