import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Store} from "@ngrx/store";
import {login} from '../../../../core/store/auth/auth.actions'
import {Auth} from "../../../../core/store/auth/auth.model";
import {selectLoggedIn, selectUsername} from "../../../../core/store/auth/auth.selector";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  auth$: Observable<any> = of();
  loggedIn$: Observable<boolean|null> = of();
  username$: Observable<string|null> = of();

  constructor(private store: Store<{auth: Auth}>) {
    this.auth$ = store.select('auth')
    this.loggedIn$ = store.select(selectLoggedIn)
    this.username$ = store.select(selectUsername)
  }

  signUp() {
    this.store.dispatch(login())
  }
}
