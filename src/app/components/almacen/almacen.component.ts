import { Component, OnInit } from '@angular/core';
import { Articulo } from '@interfaces/articuloInterface';
import { Carro } from '@interfaces/carritoInterface';
import { AlmacenService } from '@services/almacen/almacen.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
	selector: 'app-almacen',
	templateUrl: './almacen.component.html',
	styleUrls: ['./almacen.component.scss']
})
export class AlmacenComponent implements OnInit {

	constructor(
		private _as: AlmacenService,
		public dialog: MatDialog
	) { }

	public carrito: Carro[] = [];

  	public almacen: Articulo[];

	panelOpenState = false;

	factura: number = 0;

	ngOnInit(): void {

		//recogemos los datos del almacen
		this._as.getAlmacenBBDD().subscribe(almacen => this.almacen = almacen);

		(null !== sessionStorage.getItem('carrito')) ? this.carrito = JSON.parse(sessionStorage.getItem('carrito')) : "";
		(null !== sessionStorage.getItem('factura')) ? this.factura = parseInt(sessionStorage.getItem('factura')) : "";


	}

	public eliminarDelCarro(articuloCarro){
		console.log(JSON.stringify(this.almacen))
		//buscamos en el almacen y añadimos la existencia que quitamos del carrito
		var articuloActual = this.almacen.findIndex((arti => arti.nombre == articuloCarro.nombre));
		this.almacen[articuloActual].stock++ ;
		articuloCarro.cantidad--;

		//modificamos la factura total
		this.factura = this.factura - articuloCarro.precio;

		//eliminaremos de la lista del carrito, si la cantidad del producto eliminado es 0
		if(articuloCarro.cantidad <= 0){
			this.carrito = this.carrito.filter(item => item !== articuloCarro);
			console.log(this.carrito)
		}

		//actualizamos la variable de sesion
		sessionStorage.setItem('carrito', JSON.stringify(this.carrito));
		sessionStorage.setItem('factura', JSON.stringify(this.factura));

		//cambio los valores en la bbdd
		this._as.updateBBDD(this.almacen[articuloActual]).subscribe();
	}


	public anadirAlCarro(articulo){

		console.log(articulo)
		console.log(JSON.stringify(articulo))
		//restamos stock al producto
		articulo.stock--;

		//comprobamos si existe para modificar cantidad o si lo tenemos que añadir en el carrito
		if(this.carrito.find(arti => arti.nombre == articulo.nombre) == undefined ){
			this.carrito.push(
				{
					nombre: articulo.nombre,
					precio: articulo.precio,
					cantidad: 1,
					imagen:articulo.imagen
				}
			);

			
			console.log("no existe")
		}else{
			var articuloActual = this.carrito.findIndex((obj => obj.nombre == articulo.nombre));
			this.carrito[articuloActual].cantidad++ ;
		}

		//actualizamos la factura total
		this.factura = this.factura + parseInt(articulo.precio);

		//actualizamos la variable de sesion
		sessionStorage.setItem('carrito', JSON.stringify(this.carrito));
		sessionStorage.setItem('factura', JSON.stringify(this.factura));

		//cambio los valores en la bbdd
		this._as.updateBBDD(articulo).subscribe();
	}


	openDialog() {
		const dialogRef = this.dialog.open(DialogContentExampleDialog);
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log(`Dialog result: ${result}`);
		});
	  }
	  public irArticuloDetalle(id){
		console.log(id);
	  }
}


@Component({
	selector: 'dialog-content-example-dialog',
	templateUrl: '../modal-factura/modal-factura.component.html',
  })
  export class DialogContentExampleDialog {}