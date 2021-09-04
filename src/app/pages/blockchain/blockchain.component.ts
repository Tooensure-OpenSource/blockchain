import { Component, OnInit } from '@angular/core';
import { Block } from 'src/app/components/block/block.model';
import { BlockService } from 'src/app/components/block/block.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {
  blocks! : Block[];

  constructor(
    private blockService:BlockService,
    private dataStorageService:DataStorageService
  ) { }

  ngOnInit(): void {
    this.blocks = this.dataStorageService.StoreBlocks();
  }
  NewBlock() {
    var block : Block = {
      id: this.blocks.length,
      time_stamp:Date(), 
      proof_of_work:1, 
      hash: Math.random().toString(), 
      previous_hash: this.blockService.Getblock(this.blocks.length - 1)?.hash.toString()
    } 
    return block;
  }
  CreateBlock(block : Block) {
    this.blockService.MineBlock(this.dataStorageService.CreatBlock(block));
    this.blocks = this.dataStorageService.StoreBlocks();
  }
}
