import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';




@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    DynamicDialogModule,
    DialogModule,
    DividerModule,
    RippleModule,
    RadioButtonModule,
    ToastModule,
    MenubarModule,
    PasswordModule,
    InputTextModule,
    StepsModule,

  ]
})
export class PrimeModule { }
