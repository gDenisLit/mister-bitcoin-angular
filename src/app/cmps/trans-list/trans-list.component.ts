import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from 'src/app/models/trasfer.model';

@Component({
  selector: 'trans-list',
  templateUrl: './trans-list.component.html',
  styleUrls: ['./trans-list.component.scss']
})
export class TransListComponent implements OnInit {

  constructor() { }

  @Input() moves!: Transfer[]
  ngOnInit(): void {
    
  }
}
