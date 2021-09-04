import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Block } from './block.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() blocks! : Block[];
  constructor(
    private dataStorageService:DataStorageService
  ) { }

  ngOnInit(): void {
    
  }

}
