import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{
  textoTyping = '</skills>';
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
