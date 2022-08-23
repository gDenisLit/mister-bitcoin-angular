import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  @Input() loggedInUser!: User | void
  @Output() logout = new EventEmitter<string>()

  ngOnInit(): void {
    console.log('header', this.loggedInUser)
  }

  onLogout() {
    this.logout.emit()
  }
}
