import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  contact!: Contact

  ngOnInit(): void {
    this.route.params.subscribe(async ({id}) => {
      const contact = await lastValueFrom(this.contactService.getContactById(id))
      if (contact) this.contact = contact
    })
  }

  onRemoveContact() : void {
    if (!this.contact._id) return
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate(['/contact'])
  }
}
