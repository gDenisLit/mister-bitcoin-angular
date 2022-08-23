import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials.model';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})

export class SignupPageComponent {

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  credentials: Credentials = { username: '', password: '' }

  onSignup() {
    this.userService.signup(this.credentials)
    this.router.navigateByUrl('/')
  }
}
