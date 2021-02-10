import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '@interfaces/articuloInterface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor(
    private _http: HttpClient
  ) { }

  public almacen: Articulo[] = [
    {
		"id":1,
		"nombre": "platano",
		"tipo": "fruta",
		"precio": 5,
    "stock": 3,
    "imagen": "assets/img/platano.jpg"
    },
    {
		"id":2,
		"nombre": "manzana",
		"tipo": "fruta",
		"precio": 2,
    "stock": 3,
    "imagen": "assets/img/manzana.jpg"
    },
    {
		"id":3,
		"nombre": "melon",
		"tipo": "fruta",
		"precio": 8,
    "stock": 3,
    "imagen": "assets/img/melon.jpg"
    },{
		"id":4,
		"nombre": "sandia",
		"tipo": "fruta",
		"precio": 8,
    "stock": 10,
    "imagen": "assets/img/sandia.jpg"
    }
  ];

  public getAlmacenBBDD(): Observable<Articulo[]>{
    return this._http
    .get<Articulo[]>('https://almacenbbdd.herokuapp.com/almacen/consultarTodos')
    .pipe(
      map((data: Articulo[]) => data.slice(0,10))
    )
  }

  public updateBBDD(articulo: Articulo): Observable<any>{
    let url = "https://almacenbbdd.herokuapp.com/almacen/actualizar"
    let json = JSON.stringify(articulo);
    let headers = new HttpHeaders({'Content-Type':'application/json'} );

    return this._http.post(url, json, {headers: headers});
  }

  public insertBBDD(articulo: Articulo): Observable<any>{
    let url = "https://almacenbbdd.herokuapp.com/almacen/actualizar"
    let json = JSON.stringify(articulo);
    let headers = new HttpHeaders({'Content-Type':'application/json'} );

    return this._http.post(url, json, {headers: headers});
  }

  public getArticles(): Observable<Articulo[]>{
    return this._http
    .get<Articulo[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map((data: Articulo[]) => data.slice(0,10))
    )
  }
}


