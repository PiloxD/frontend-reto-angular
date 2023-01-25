import { Host, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';
@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.host.getProductsEndpoint}`);
  }
  createCartService(cart: Cart) {
    return this.http.post(`${environment.host.createCartEndpoint}`, { ...cart });
  }


}