import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule
  ]
})
export class CartsModule { }
