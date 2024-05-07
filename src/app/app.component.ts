import { Component, OnInit } from '@angular/core';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ProductosService } from './productos.service';
import { Producto } from './producto';
import { TarjetaProductoComponent } from "./tarjeta-producto/tarjeta-producto.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [BarraMenuComponent, PiePaginaComponent, TarjetaProductoComponent, RouterOutlet]
})
export class AppComponent implements OnInit {
  title = 'parcial';
  existeProducto: boolean;
  listaProductos: Producto[] = [];
  constructor(private productosService: ProductosService) {
    this.existeProducto = true;
  }
  ngOnInit(): void {
    this.obtenerProducto();
  }
  obtenerProducto() {
    this.productosService.getProducts().subscribe({
      next:(value:Producto[])=>{
        console.log(value);
        this.listaProductos = value;
      }
    });
  }
}
