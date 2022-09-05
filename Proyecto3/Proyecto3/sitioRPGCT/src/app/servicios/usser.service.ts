import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsserService {

  constructor(private http: HttpClient) { }
  obtenerNoRelacional() {
    return this.http.get('https://rpgct-pisco-default-rtdb.firebaseio.com/collection.json')
  }
}
