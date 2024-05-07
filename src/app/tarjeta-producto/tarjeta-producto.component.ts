import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {
  title = 'proyectoangular';
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
