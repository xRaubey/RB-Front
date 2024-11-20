import {createSelector, createFeatureSelector} from "@ngrx/store";
import {Auth} from "./auth.model";

export const selectAuth = createFeatureSelector<Auth>('auth');

export const selectLoggedIn = createSelector(
  selectAuth,
  (state:Auth) => state.loggedIn
)

export const selectUsername = createSelector(
  selectAuth,
  (state:Auth) => state.username
)
