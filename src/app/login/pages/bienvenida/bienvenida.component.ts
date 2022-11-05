import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { LoginVeterinarioComponent } from '../login-veterinario/login-veterinario.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(private router: Router, private dialogService: DialogService, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  veterinarioLogin() {
    // this.router.navigateByUrl('/login')
    this.loginService.refLogin = this.dialogService.open(LoginVeterinarioComponent, {
      width: '68%',
      height: '47%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      dismissableMask: true,
      showHeader: false
      
    })
  }

  usuario(){
    this.router.navigateByUrl('/scanner')
  }

}
