import { Contact } from "./contact.model";
import { User } from "./user-model";

export class Transfer {

    constructor(
        public toContact: Contact,
        public amount: number,
        public sentAt?: number,
        public _id?: string,
    ){}
        
    setId?(id: string = 'r101') {
        // Implement your own set Id
        this._id = id
    }
}