import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'
import { User } from '../models/user-model'
import { UserService } from '../services/user/user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mister Bitcoin'

  constructor(
    public userService: UserService
  ) { }

  loggedInUser!: User
  subscription!: Subscription

  ngOnInit(): void {
    this.userService.getLoggedinUser()
    this.subscription = this.userService.loggedInUser$.subscribe(loggedInUser => {
      this.loggedInUser = loggedInUser
    })
  }

  OnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onLogout() {
    this.userService.logout()
  }
}
