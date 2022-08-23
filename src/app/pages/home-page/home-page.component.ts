import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public userService: UserService) { }

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

}
