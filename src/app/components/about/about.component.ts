import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
    textoTyping = '</about>';
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

  }}
