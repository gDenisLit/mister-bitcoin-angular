import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Transfer } from 'src/app/models/trasfer.model';
import { User } from 'src/app/models/user-model';
import { ContactService } from 'src/app/services/contact/contact-service.service';
import { TrasferService } from 'src/app/services/trasfer/trasfer.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private trasferService: TrasferService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  contact!: Contact
  loggedInUser!: User
  subscription!: Subscription
  amount!: number

  ngOnInit(): void {
    this.userService.getLoggedinUser()
    this.subscription = this.userService.loggedInUser$.subscribe(loggedInUser => {
      this.loggedInUser = loggedInUser
    })
    this.route.params.subscribe(async ({ id }) => {
      const contact = await lastValueFrom(this.contactService.getContactById(id))
      if (contact) this.contact = contact
    })
  }

  get movesToContact(): Transfer[] {
    return this.loggedInUser.moves
      .filter(move => move.toContact._id === this.contact._id)
  }

  onRemoveContact(): void {
    if (!this.contact._id) return
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['/contact'])
  }

  onTrasfer(): void {
    this.trasferService.transferCoins(this.contact, this.amount)
  }
}
