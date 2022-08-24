import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Credentials } from 'src/app/models/credentials.model';
import { Transfer } from 'src/app/models/trasfer.model';
import { User } from 'src/app/models/user-model';

const USER_KEY: string = 'user_db'
const LOGGEDIN: string = 'logged_in_user'
const USER: User[] = _loadUsers()

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  private _userDb: User[] = USER
  private _users$ = new BehaviorSubject<User[]>([])
  public users$ = this._users$.asObservable()

  private _loggedInUser$ = new BehaviorSubject<User>({ username: '', password: '', coins: 0, moves: [] })
  public loggedInUser$ = this._loggedInUser$.asObservable()

  public getLoggedinUser(): User | void {
    let user: User | void = this._loggedInUser$.getValue()
    if (!user._id) {
      const idStr: string = sessionStorage.getItem(LOGGEDIN) || ''
      const id: string = idStr ? JSON.parse(idStr) : ''
      user = this._userDb.find(u => u._id === id)
      if (user) this._loggedInUser$.next(user)
    }
    return user
  }

  public login(credentials: Credentials): void {
    const users = this._userDb
    const user = users.find(u => {
      return u.username === credentials.username &&
        u.password === credentials.password
    })
    if (user) {
      sessionStorage.setItem(LOGGEDIN, JSON.stringify(user._id))
      this._loggedInUser$.next(user)
    }
  }

  public signup(credentials: Credentials): void {
    const user = new User(credentials.username, credentials.password, 100, [],)
    if (typeof user.setId === 'function') user.setId(getRandomId())
    this._userDb.push(user)
    this._users$.next(this._userDb)
    this._saveUsers([...this._userDb])
    this.login(credentials)
  }

  public logout(): void {
    sessionStorage.removeItem(LOGGEDIN)
    this._loggedInUser$.next({ username: 'yes', password: '', coins: 0, moves: [] })
  }

  public setNewMove(transfer: Transfer): void {
    const loggedInUser = this._loggedInUser$.getValue()
    if (!loggedInUser) return
    if (loggedInUser.coins - transfer.amount < 0) {
      console.log('no sufficient funds')
      return
    }
    loggedInUser.moves.unshift(transfer)
    loggedInUser.coins -= transfer.amount
    const idx = this._userDb.findIndex(u => u._id === loggedInUser._id)
    this._userDb.splice(idx, 1, loggedInUser)
    this._users$.next([...this._userDb])
    this._saveUsers([...this._userDb])
  }

  private _saveUsers(users: User[]): void {
    localStorage.setItem(USER_KEY, JSON.stringify(users))
  }
}

function _loadUsers(): User[] {
  let users: User[]
  const data = localStorage.getItem(USER_KEY)
  if (data) users = JSON.parse(data)
  else users = [
    {
      username: 'admin',
      password: 'admin',
      coins: 100,
      moves: [],
      _id: 'user1005f5as'
    },
    {
      username: 'denis',
      password: '123',
      coins: 100,
      moves: [],
      _id: 'user105gec52'
    },
  ]
  localStorage.setItem(USER_KEY, JSON.stringify(users))
  return users
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
