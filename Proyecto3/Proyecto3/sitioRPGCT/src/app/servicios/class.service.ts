import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  public _subject = new BehaviorSubject<any>("")
  emit<T>(data: T) {
    this._subject.next(data)
  }
  on<T>(): Observable<T> {
    return this._subject.asObservable();
  }
  constructor(private http: HttpClient) { }

  obtenerDatos2() {
    return this.http.get('http://localhost:3000/api/clases')
  }

  obtenerDatos2nyId(id:string) {
    return this.http.get('http://localhost:3000/api/clases/'+id)
  }
}
