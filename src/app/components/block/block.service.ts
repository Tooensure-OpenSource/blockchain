import { Injectable } from "@angular/core";
import database from "src/assets/data/blockchain/blocks.json";
import { Block } from "./block.model";

@Injectable({ providedIn: 'root' })
export class BlockService {
    private blocks : Block[] = database;
    
    constructor(
    ) {}

    Getblocks() {
        return this.blocks;
    }
    Getblock(id:number) {
        return this.Getblocks().find(i => i.id == id);
    }

    CreatBlock(block : Block) {
        return block;
    }
    MineBlock(block : Block) {
        
        this.blocks.push(block)
    }
}