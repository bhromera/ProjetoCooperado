import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = '';
  subtitle: string = '';

  activatedRoute = '';

  activateRoute(activatedRoute: string) {
    this.activatedRoute = activatedRoute;
  }

  get headerTitle() {
    if (this.router.url == '/admissao-cooperado') {
      this.subtitle = "Cadastro / Admissão do Cooperado / Nova Admissão de Cooperado";
      return 'NOVA ADMISSÃO COOPERADO';      
    } else {
      this.subtitle = "";
      return 'AILOS';
    }
  }

  constructor(private storage: StorageService, private router: Router) { }

  async ngOnInit() {  
  }
}

