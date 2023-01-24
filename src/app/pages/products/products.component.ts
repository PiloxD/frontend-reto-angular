
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemInCart } from 'src/app/models/itemInCart.model';
import { Product } from 'src/app/models/product.model';
import { EndpointsService } from 'src/app/services/enpoints.service';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: Product[] = [];
  itemInCart: ItemInCart[] = [];
  body: NgForm;

  page: number = 1;
  maxPage = environment.paginationmax;

  addForm = new FormGroup({
    text_new_category: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  constructor(
    private router: Router,
    private service: EndpointsService,

  ) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: (res) => {
        this.products = res
        console.log(this.products)
      }
    })
  }

  addToCart(body: NgForm) {

  }

}