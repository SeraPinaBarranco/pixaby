import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  private error$= new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor(private http : HttpClient) { }


  setError(mensaje:string){
    this.error$.next(mensaje);
  }

  getError():Observable<string>{
    return this.error$.asObservable();
  }

  enviarTerminoBusqueda(termino:string){
    this.terminoBusqueda$.next(termino);
  }

  getTerminoBusqueda():Observable<string>{
    return this.terminoBusqueda$.asObservable();
  }

  getImagenes(termino:string):Observable<any>{
    const KEY= '21766337-b319bffd2e6e1430a8555e185'
    const URL= `https://pixabay.com/api/?key=${KEY}&q=${termino}`;
    return this.http.get(URL);
  }
}
