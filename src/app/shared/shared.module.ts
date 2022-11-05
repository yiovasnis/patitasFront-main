import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeModule } from '../primeNG/prime.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
