import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
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
  amount: number = 0

  ngOnInit(): void {
    this.route.params.subscribe(async ({ id }) => {
      const contact = await lastValueFrom(this.contactService.getContactById(id))
      if (contact) this.contact = contact
    })
  }

  onRemoveContact(): void {
    if (!this.contact._id) return
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['/contact'])
  }

  onTrasfer(): void {
    const user: User | void = this.userService.getLoggedinUser()
    if (!user) return
    const contact: Contact = this.contact
    if (!contact._id) {
      console.log('cant send to null')
      return
    }
    if (!this.amount) {
      console.log('cant send 0')
      return
    }
    const transfer: Transfer = {
      fromUser: user,
      toContact: contact,
      amount: this.amount,
    }

    this.trasferService.transferCoins(transfer)
  }
}
