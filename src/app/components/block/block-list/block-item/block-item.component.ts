import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../../block.model';

@Component({
  selector: 'app-block-item',
  templateUrl: './block-item.component.html',
  styleUrls: ['./block-item.component.scss']
})
export class BlockItemComponent implements OnInit {
  @Input() block! : Block;
  constructor() { }

  ngOnInit(): void {
  }

}
