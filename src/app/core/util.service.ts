import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  private userNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Jhon Deo');

  userName$ : Observable<string> = this.userNameSubject.asObservable();
  
  UpdateUserName(userName: string){
    this.userNameSubject.next(userName);
  }
  checkUniqueUserName(userName: string) {
    let existingUserName = ['Raju', 'Jeelaga', 'Prince'];
    let isExists = existingUserName.indexOf(userName) > -1 ? true: false;
     return of(isExists).pipe(delay(3000));
  }
}
