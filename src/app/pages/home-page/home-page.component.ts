import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom, Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move-model';
import { Transfer } from 'src/app/models/trasfer.model';
import { User } from 'src/app/models/user-model';
import { ContactService } from 'src/app/services/contact/contact-service.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public userService: UserService,
    public contactService: ContactService
  ) { }

  loggedInUser!: User
  subscription!: Subscription
  lastMoves!: Transfer[]

  ngOnInit(): void {
    console.log('homepage')
    this.userService.getLoggedinUser()
    this.subscription = this.userService.loggedInUser$.subscribe(loggedInUser => {
      this.loggedInUser = loggedInUser
    })
    this.lastMoves = this.loggedInUser.moves.slice(0, 3)
  }

  OnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
