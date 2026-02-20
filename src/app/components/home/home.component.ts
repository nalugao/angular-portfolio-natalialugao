import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  textoTyping = '</home>';
  textoExibido = '';

  ngOnInit() {
  let i = 0;
  let apagando = false;

  setInterval(() => {
    if (!apagando) {
      this.textoExibido += this.textoTyping[i];
      i++;
      if (i >= this.textoTyping.length) {
        apagando = true;
      }
    } else {
      this.textoExibido = this.textoExibido.slice(0, -1);
      if (this.textoExibido.length === 0) {
        apagando = false;
        i = 0;
      }
    }
  }, 190);
}
}
