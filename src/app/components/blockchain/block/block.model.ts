import { Time } from "@angular/common";

export class Block {
    constructor(
        public id : number,
        public time_stamp : string,
        public proof_of_work : number,
        public hash : string,
        public previous_hash : string
    ) { }
}