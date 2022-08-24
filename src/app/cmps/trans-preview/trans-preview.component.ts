import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from 'src/app/models/trasfer.model';

@Component({
  selector: 'trans-preview',
  templateUrl: './trans-preview.component.html',
  styleUrls: ['./trans-preview.component.scss']
})
export class TransPreviewComponent implements OnInit {

  constructor() { }

  @Input() move!: Transfer
  
  ngOnInit(): void {
  }

}
