import { Block } from "./block/block.model";

export class Blockchain {
    constructor(
        public id : number,
        public name : string,
        public blocks : Block[]
    ) {}
}