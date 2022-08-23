import { Move } from "./move-model"

export class User {
    constructor(
        public username: string,
        public password: string,
        public coins: number ,
        public moves: Move[],
        public _id?: string
    ) { }

    setId?(id: string = 'r101') {
        // Implement your own set Id
        this._id = id
    }
}