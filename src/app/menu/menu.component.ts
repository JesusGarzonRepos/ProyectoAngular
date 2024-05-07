import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraMenuComponent } from "../barra-menu/barra-menu.component";
import { TarjetaProductoComponent } from "../tarjeta-producto/tarjeta-producto.component";
import { PiePaginaComponent } from "../pie-pagina/pie-pagina.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [RouterOutlet, BarraMenuComponent, TarjetaProductoComponent, PiePaginaComponent]
})
export class MenuComponent {

}
