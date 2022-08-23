import { Injectable } from '@angular/core'
import { Transfer } from 'src/app/models/trasfer.model';
import { User } from 'src/app/models/user-model';
import { UserService } from '../user/user-service.service';

@Injectable({
  providedIn: 'root'
})

export class TrasferService {

  constructor(
    private userService: UserService
  ) { }

  transferCoins(transfer: Transfer): void {
    const date: number = Date.now()
    const newTransfer: Transfer = new Transfer(transfer.fromUser, transfer.toContact, transfer.amount, date)
    if (typeof newTransfer.setId === 'function') newTransfer.setId(getRandomId())
    this.userService.setNewMove(newTransfer)
  }

}

function getRandomId(length = 8): string {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      characters.length))
  }
  return result
}
