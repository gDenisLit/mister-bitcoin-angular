import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user-model';
import { faHouse, faAddressCard, faChartArea } from '@fortawesome/pro-light-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  @Input() loggedInUser!: User | void
  @Output() logout = new EventEmitter<string>()
  faHouse = faHouse
  faAddressCard = faAddressCard
  faChartArea = faChartArea

  ngOnInit(): void { }
  onLogout() {
    this.logout.emit()
  }
}
