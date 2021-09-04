import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Block } from "../components/block/block.model";
import { BlockService } from "../components/block/block.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(
        private httpClient:HttpClient,
        private blockSerivce:BlockService
    ) {}


    StoreBlocks() {
        console.log(this.blockSerivce.Getblocks())
        return this.blockSerivce.Getblocks();
        // const blocks = this.blockSerivce.Getblocks()
        // this.httpClient.put('https://tooensure-blockchain-default-rtdb.firebaseio.com/blocks.json', blocks)
        //     .subscribe(response => {
        //         console.log(response);
        //     }
        // );
    }

    CreatBlock(block : Block) {
        return this.blockSerivce.CreatBlock(block);
    }
}