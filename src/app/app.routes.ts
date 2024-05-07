import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailComponent } from './product-detail-component/product-detail-component.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
  path: 'menu',
  component: MenuComponent
  },
  {
    path: 'info/:id', // Modificado para aceptar un parámetro de ID
    component: ProductDetailComponent
  }
];
