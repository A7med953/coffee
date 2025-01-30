import { Component } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { CreateComponent } from "./create/create.component";
import { ForgetpasComponent } from "./forgetpas/forgetpas.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-login',
  standalone: true,
  imports: [LoginComponent, CreateComponent, ForgetpasComponent ,CommonModule],
  templateUrl: './home-login.component.html',
  styleUrl: './home-login.component.css'
})
export class HomeLoginComponent {
currentView: any;
  changeView(view: string) {
    this.currentView = view;
  }
}
