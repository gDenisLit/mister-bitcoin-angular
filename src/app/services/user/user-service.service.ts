import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Credentials } from 'src/app/models/credentials.model';
import { User } from 'src/app/models/user-model';

const USER_KEY = 'user_db'
const LOGGEDIN = 'logged_in_user'
const USER = _loadUsers()

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  private _userDb: User[] = USER
  private _users$ = new BehaviorSubject<User[]>([])
  private users$ = this._users$.asObservable()

  private _loggedInUser$ = new BehaviorSubject<User>({ username: '', password: '', coins: 0, moves: [] })
  private loggedInUser$ = this._users$.asObservable()

  public getLoggedinUser(): User | void {
    const data: string = sessionStorage.getItem(LOGGEDIN) || ''
    if (data) return JSON.parse(data)
  }

  public login(credentials: Credentials): void {
    const users = this._userDb
    const user = users.find(u => {
      return u.username === credentials.username &&
        u.password === credentials.password
    })
    if (user) {
      sessionStorage.setItem(LOGGEDIN, JSON.stringify(user))
      this._loggedInUser$.next(user)
    }
  }

  public signup(credentials: Credentials): void {
    const user = new User(credentials.username, credentials.password, 100, [],)
    if (typeof user.setId === 'function') user.setId(getRandomId())
    this._userDb.push(user)
    this._users$.next(this._userDb)
    localStorage.setItem(USER_KEY, JSON.stringify(this._userDb))
    this.login(credentials)
  }

  public logout(): void {
    sessionStorage.removeItem(LOGGEDIN)
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
      moves: []
    },
    {
      username: 'denis',
      password: '123',
      coins: 100,
      moves: []
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
