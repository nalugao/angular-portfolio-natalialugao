import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  projetos = [
    {
      nome: 'SkillsUp',
      cargo: 'Product Designer & Front-end Developer',
      links: { site: 'https://skillsup-livid.vercel.app/index.html', youtube: 'https://www.youtube.com/watch?v=1y66SGXUl3o&list=PLGSIu-X0lEsAwN5t9iVMujf0iDEyBGMtf/watch?v=QzzBAoidNws&list=PLGSIu-X0lEsAmSVSW9CEh4uP_Pw7m14vr', github: 'https://github.com/Sophia-Coelho/GS---Global-Solucion-' },
      descricao: 'O projeto propõe integrar profissionais a um movimento que acredita no conhecimento compartilhado como solução para impulsionar o desenvolvimento humano e social — uma comunidade em que todos aprendem e ensinam simultaneamente.',
      contribuicao: 'Idealizei o layout, funcionalidades e experiência do usuário. Desenvolvi o Front-End das páginas `Ofereça uma Aula` e `Meus Agendamentos`, além de coordenar a organização e distribuição das tarefas do projeto. Também apoiou no refinamento do código',
      tecnologias: 'HTML, CSS, JavaScript, Bootstrap'
    },
    {
      nome: 'API de mulheres',
      cargo: 'Back-end Developer',
      links: { site: 'https://front-programaria-react-api.vercel.app/', github: 'https://github.com/nalugao/learning_API' },
      descricao: 'O projeto do back-end tem como objetivo praticar a construção, teste e aplicação de API - Banco de Dados, para um website que contém a lista das mulheres na tecnologia. Essa listá é gerenciada pelo BD, e é possível incluir cadastro pelo própio site.',
      contribuicao: '',
      tecnologias: 'Node.js, JavaScript, HTTP, CRUD, JSON, MongoDB, Mongoose, Insomnia, dotenv, cors'
    },
    {
      nome: 'AgroViva Web',
      cargo: 'Product Designer & Front-end Developer',
      links: { site: 'https://agrowebviva.vercel.app/', youtube: 'https://www.youtube.com/watch?v=QzzBAoidNws&list=PLGSIu-X0lEsAmSVSW9CEh4uP_Pw7m14vr', github: 'https://github.com/nalugao/agroviva-web' },
      descricao: 'O AgroViva Web conecta comunidade e agricultor e da visibilidade a produtores, valorizando a produção local e diminuindo intermediários.',
      contribuicao: 'Idealizei o layout, funcionalidades e experiência do usuário. Desenvolvi o Front-End da página Impacto Social, além de coordenar a organização e distribuição das tarefas do projeto. Também apoiou no refinamento do código',
      tecnologias: 'HTML, CSS, JavaScript, Bootstrap'
    },
    {
      nome: 'LinkAI',
      cargo: 'Web Designer',
      links: { site: 'https://linkai.plugin-ai.com.br/' },
      descricao: 'O LinkAI é uma extensão de navegador com inteligência artificial desenvolvida para aprimorar a comunicação profissional nas mensagens do LinkedIn.',
      contribuicao: 'Fui responsável pelo desenvolvimento da interface do site utilizando ReactJS e TailwindCSS, criando um layout limpo, responsivo e com foco em desempenho, acessibilidade e design moderno.',
    },
    {
      nome: 'CourseHub',
      cargo: 'Full-Stack Developer',
      descricao: 'O CourseHub é uma plataforma de gerenciamento de cursos, ideal para quem gosta de estudar bastante mas não consegue gerenciar seus cursos e metas.',
      contribuicao: 'Idealizei a ideia, funcionalidades e experiência do usuário. A aplicação está em construção',
      tecnologias: 'Código em construção'
    },
  ];

  projetoSelecionado = signal(this.projetos[0]);

  selecionar(projeto: any) {
    this.projetoSelecionado.set(projeto);   
  }

  profissionais = [
  {
    nome: 'Bayer',
    cargo: 'Analista Júnior de Operações Comerciais',
    periodo: 'JAN 23 - JAN 26',
    descricoes: [
      'Co-participação de mudança de sistemas. Contribui com a análise geral das funcionalidades, apoiei nos testes, criei manuais de procedimentos e gerenciei os incidentes.',
      'Criação de Agente IA, o qual foi alimentado com informações das instruções do trabalho. Isso apoiou os analistas que acabam suprindo a posição de outro colaborador temporariamente.',
      'Aumentei a eficiência operacional em 15% ao aplicar soluções de automação e análise de dados em processos de pós-venda. Isso gerou redução de 5 horas semanais no tempo de processamento e diminuição de erros em relatórios corporativos.',
      'Implementação de governança de dados para assegurar conformidade em contratos do setor público.'
    ]
  },
  {
    nome: 'Bayer SA',
    cargo: 'Estagiária',
    periodo: 'JAN 21 - DEZ 22',
    descricoes: [
      'Melhorei a tomada de decisão em vendas B2B ao criar ferramentas automatizadas de controle de estoque e gestão de vendas.',
      'Utilização de SAP e automações em Excel para entrada de dados e relatórios.',
      'Maior integridade das informações e fluxo de trabalho eficiente entre equipes comerciais.',
      'Aplicação de melhoria contínua para reduzir tarefas manuais e aumentar a precisão operacional.'
    ],
  }
];

profissionalSelecionado = signal(this.profissionais[0]);

selecionarProfissional(profissional: any) {
  this.profissionalSelecionado.set(profissional);
}
}