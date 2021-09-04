import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../block.model';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {
  @Input() blocks! : Block[];
  constructor() { }

  ngOnInit(): void {
  }

}
