export class Transfer {

    constructor(
        public fromUserId: string,
        public toContactId: string,
        public amount: number,
        public sentAt?: number,
        public _id?: string
    ){}
        
    setId?(id: string = 'r101') {
        // Implement your own set Id
        this._id = id
    }
}