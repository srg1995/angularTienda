import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '@components/admin/admin.component';
import { AlmacenComponent } from '@components/almacen/almacen.component';
import { ArticuloComponent } from '@components/articulo/articulo.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@components/home/home.component';

const routes: Routes = [
  {
    path: 'almacen',
    component: AlmacenComponent
  },
  {
    path: 'articulo',
    component: ArticuloComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
