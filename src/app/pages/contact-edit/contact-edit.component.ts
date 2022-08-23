import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact/contact-service.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  contact!: Contact

  ngOnInit(): void {
    this.route.params.subscribe(async ({ id }) => {
      this.contact = id ?
        await lastValueFrom(this.contactService.getContactById(id)) :
        this.contactService.getEmptyContact()
    })
  }

  onSavecontact() {
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contact')
  }

  goBack() {
    this.router.navigateByUrl('/contact')
  }
}
