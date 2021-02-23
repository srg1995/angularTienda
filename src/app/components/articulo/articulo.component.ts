import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlmacenService } from '@services/almacen/almacen.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {
  id: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _sa: AlmacenService
  ) { }

  public articulo;

  ngOnInit(): void {
    this._route.queryParams
    .pipe(filter(params => params.id))
      .subscribe(params => {
        this.id = params.id;
      }
    );
    if(this.id != null && this.id != undefined){
      this._sa.getArticleAlmacenBBDD(this.id).subscribe(articulo => this.articulo = articulo)
    }else{
      this._router.navigate(['almacen']);
    }
   

    
  }


}
