import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AlmacenComponent} from '@components/almacen/almacen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { ModalFacturaComponent } from './components/modal-factura/modal-factura.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { AdminComponent } from './components/admin/admin.component';
import { MenuComponent } from './components/menu/menu.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';

import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './components/home/home.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent, 
    AlmacenComponent, ModalFacturaComponent, ArticuloComponent, AdminComponent, MenuComponent, MenuLateralComponent, HomeComponent, LoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { 

  

}
