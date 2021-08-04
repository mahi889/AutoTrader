import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';
import { User } from '../../../../../API';
import { AuthFacade } from '../../../../store/facades/auth.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  user$: Observable<User | undefined> | undefined;

  constructor(private readonly authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.user$ = this.authFacade.user$;
  }

  getUserName(user: User): string {
    return [user.firstName, user.lastName].join(' ');
  }

  logout(): void {
    Auth.signOut();
  }
}
