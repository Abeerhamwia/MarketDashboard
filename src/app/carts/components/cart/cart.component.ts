import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartsService } from '../../services/carts.service';
import { ProductsService } from '../../../products/services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts:any[] = []
  products:any[] = [];
  total = 0
  form!:FormGroup
  detalis:any

  constructor(private service:CartsService , private bulid:FormBuilder , private productService:ProductsService) { }

  ngOnInit(): void {
    this.form = this.bulid.group({
      start:[''],
      end:['']
    })
    this.getAllCarts()
  }

  getAllCarts() {
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts = res
    })
  }

  applyFilter() {
    let date = this.form.value
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts = res
    })
  }
  
  deleteCart(id:number) {
    this.service.deleteCart(id).subscribe(res => {
      this.getAllCarts()
      alert("Cart deleted Success")
    })
  }

  

  view(index:number) {
    this.products = []
    this.detalis = this.carts[index]
    for(let x in this.detalis.products)
    {
      this.productService.getProductById(this.detalis.products[x].productId).subscribe(res => {
        this.products.push({item: res, quantity:this.detalis.products[x].quantity})
      })
    }
  }
}
