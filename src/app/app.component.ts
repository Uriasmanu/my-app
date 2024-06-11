import { Produto } from './modelo/produto';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  http = inject(HttpClient);
  url = 'https://myloja-api.azurewebsites.net';
  produtos: Produto[] = [];

  ngOnInit(): void {
    this.obterProdutos();
  }

  obterProdutos(){
    this.http.get<Produto[]>(`${this.url}/estoque`)
      .subscribe(produtos => this.produtos = produtos)
  }
}
