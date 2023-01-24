
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
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
  cart: Cart[] = [];
  itemInCart: ItemInCart = new ItemInCart();
  body: NgForm;
  idForm: string;
  quantityA: number;
  nameForm: string;
  showCart: boolean = false;
  page: number = 1;
  maxPage = environment.paginationmax;
  items: Array<ItemInCart> = new Array()

  addForm = new FormGroup({
    quantityForm: new FormControl(),
  });

  constructor(
    private router: Router,
    private service: EndpointsService,

  ) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe({
      next: (res) => {
        this.products = res
      }
    })
  }

   addToCart(body: NgForm, idSelected: string, nameSelected: string) {
    const quantityget = this.addForm.get('quantityForm')
    this.quantityA =  quantityget?.value
    this.idForm = idSelected
    this.nameForm = nameSelected
    this.itemInCart= {id: this.idForm, name: this.nameForm, quantity: this.quantityA}
    this.items.push(this.itemInCart)
  }

  openCart() {
    this.showCart = !this.showCart
  }

}