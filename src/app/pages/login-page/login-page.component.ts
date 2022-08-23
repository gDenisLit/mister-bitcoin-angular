import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Credentials } from 'src/app/models/credentials.model'
import { UserService } from 'src/app/services/user/user-service.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  credentials: Credentials = { username: '', password: '' }

  onLogin() {
    this.userService.login(this.credentials)
    this.router.navigateByUrl('/')
  }
}
