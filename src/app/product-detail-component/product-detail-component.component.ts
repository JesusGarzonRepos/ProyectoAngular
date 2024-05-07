import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detail-component.component.html',
  styleUrl: './product-detail-component.component.css',
})
export class ProductDetailComponent implements OnInit{
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'].toString();
    this.productosService.getProduct(productId).subscribe(data => {
      this.product = data;
    });
  }
}
