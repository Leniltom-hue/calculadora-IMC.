// FREE = aparece pra todo mundo
// PRO  = aparece, mas com cadeado (e conteúdo travado)
window.EXS = [
  {
    id:"agachamento",
    nome:"Agachamento",
    grupo:"Pernas",
    nivel:"Iniciante",
    free:true,
    serve:"Fortalecer pernas e glúteos e melhorar estabilidade.",
    musculos:"Quadríceps, glúteo máximo, posterior, core.",
    como:[
      "Pés na largura do ombro e ponta levemente pra fora.",
      "Desça mantendo peito aberto e coluna neutra.",
      "Joelhos acompanham a linha do pé (não entra pra dentro).",
      "Suba contraindo glúteos."
    ],
    erros:["Curvar a lombar","Joelho cair pra dentro","Descer sem controle"],
    pro:"Progressões + cargas + variações (hack, smith, livre) e planilha de evolução."
  },
  {
    id:"supino",
    nome:"Supino reto",
    grupo:"Peito",
    nivel:"Iniciante",
    free:true,
    serve:"Ganhar força e massa no peitoral.",
    musculos:"Peitoral maior, tríceps, deltoide anterior.",
    como:["Pés firmes no chão.","Desça a barra controlando.","Cotovelos levemente fechados.","Empurre sem tirar o quadril do banco."],
    erros:["Barra bater no peito","Cotovelos muito abertos","Punho quebrado"],
    pro:"Rotina PRO: progressão 4 semanas + técnicas (pausa, drop, rest-pause)."
  },
  {
    id:"remada",
    nome:"Remada baixa",
    grupo:"Costas",
    nivel:"Iniciante",
    free:true,
    serve:"Dar densidade nas costas e melhorar postura.",
    musculos:"Dorsal, romboides, trapézio médio, bíceps.",
    como:["Coluna reta.","Puxe levando cotovelos pra trás.","Contraia as escápulas.","Volte devagar."],
    erros:["Balançar o tronco","Encolher ombros","Puxar com o braço só"],
    pro:"Ajuste de pegada + foco dorsal vs romboide + séries ideais por objetivo."
  },
  {
    id:"stiff",
    nome:"Stiff",
    grupo:"Pernas",
    nivel:"Intermediário",
    free:true,
    serve:"Fortalecer posterior e glúteos.",
    musculos:"Posterior de coxa, glúteos, lombar estabilizadora.",
    como:["Joelho semi-flexionado.","Desça empurrando quadril pra trás.","Barra perto da perna.","Suba contraindo glúteos."],
    erros:["Arredondar costas","Descer demais perdendo postura","Dobrar muito o joelho"],
    pro:"Guia PRO de amplitude + carga segura + variações (RDL/halteres)."
  },
  {
    id:"rosca",
    nome:"Rosca direta",
    grupo:"Bíceps",
    nivel:"Iniciante",
    free:true,
    serve:"Fortalecer bíceps e melhorar o braço.",
    musculos:"Bíceps braquial, braquial, antebraço.",
    como:["Cotovelos colados ao corpo.","Suba sem balançar.","Desça controlando.","Mantenha punhos firmes."],
    erros:["Roubar com lombar","Cotovelos abrirem","Descer rápido demais"],
    pro:"Métodos PRO: 21, drop-set, tempo 3-1-2 + divisão semanal."
  },

  // PRO (bloqueados)
  { id:"terra", nome:"Levantamento terra", grupo:"Costas", nivel:"Avançado", free:false,
    serve:"Força total e cadeia posterior.",
    musculos:"Posterior, glúteos, costas, core.",
    como:["Trave o core.","Barra perto da canela.","Suba empurrando o chão.","Desça controlado."],
    erros:["Arredondar lombar","Barra longe do corpo"],
    pro:"Aula PRO completa: setup, respiração, progressão e prevenção de lesão."
  },
  { id:"desenvolvimento", nome:"Desenvolvimento militar", grupo:"Ombro", nivel:"Intermediário", free:false,
    serve:"Ombros mais fortes e definidos.",
    musculos:"Deltoide, tríceps, trapézio.",
    como:["Core firme.","Suba reto.","Desça até o queixo."],
    erros:["Arquear lombar","Empurrar pra frente"],
    pro:"Técnica PRO + variações (halter, smith) + periodização."
  },
  {
  nome: "Supino inclinado com halteres",
  grupo: "Peito",
  paraQueServe: "Trabalha a parte superior do peitoral.",
  comoFazer: [
    "Deite no banco inclinado.",
    "Segure os halteres na altura do peito.",
    "Empurre para cima até estender os braços.",
    "Desça controlando."
  ],
  dicas: [
    "Não arqueie demais a lombar.",
    "Controle a descida."
  ],
  errosComuns: [
    "Descer muito rápido.",
    "Bater os halteres no topo."
  ]
},

{
  nome: "Barra fixa",
  grupo: "Costas",
  paraQueServe: "Fortalece dorsais, bíceps e core.",
  comoFazer: [
    "Segure a barra com pegada aberta.",
    "Puxe o corpo até o queixo passar da barra.",
    "Desça devagar."
  ],
  dicas: [
    "Evite balançar o corpo.",
    "Contraia as escápulas."
  ],
  errosComuns: [
    "Usar impulso.",
    "Não completar o movimento."
  ]
},

{
  nome: "Agachamento livre",
  grupo: "Pernas",
  paraQueServe: "Fortalece quadríceps, glúteos e posterior.",
  comoFazer: [
    "Pés na largura dos ombros.",
    "Desça flexionando os joelhos.",
    "Mantenha o peito erguido.",
    "Suba empurrando o chão."
  ],
  dicas: [
    "Joelhos alinhados com os pés.",
    "Desça até pelo menos 90°."
  ],
  errosComuns: [
    "Deixar joelho fechar.",
    "Curvar a lombar."
  ]
},

{
  nome: "Stiff",
  grupo: "Posterior",
  paraQueServe: "Trabalha posterior de coxa e glúteos.",
  comoFazer: [
    "Segure a barra à frente.",
    "Desça mantendo as pernas quase estendidas.",
    "Suba contraindo glúteos."
  ],
  dicas: [
    "Coluna sempre neutra.",
    "Movimento controlado."
  ],
  errosComuns: [
    "Curvar as costas.",
    "Descer além da mobilidade."
  ]
},

{
  nome: "Elevação lateral",
  grupo: "Ombro",
  paraQueServe: "Desenvolve o deltoide lateral.",
  comoFazer: [
    "Segure halteres ao lado do corpo.",
    "Eleve até a altura dos ombros.",
    "Desça devagar."
  ],
  dicas: [
    "Leve inclinação do tronco.",
    "Controle total do peso."
  ],
  errosComuns: [
    "Subir acima da linha do ombro.",
    "Usar impulso."
  ]
},

{
  nome: "Rosca direta",
  grupo: "Bíceps",
  paraQueServe: "Desenvolve o bíceps braquial.",
  comoFazer: [
    "Segure a barra com pegada supinada.",
    "Flexione os cotovelos.",
    "Desça controlando."
  ],
  dicas: [
    "Não balance o corpo.",
    "Mantenha os cotovelos fixos."
  ],
  errosComuns: [
    "Usar impulso.",
    "Abrir os cotovelos."
  ]
},

{
  nome: "Tríceps corda",
  grupo: "Tríceps",
  paraQueServe: "Fortalece a parte posterior do braço.",
  comoFazer: [
    "Segure a corda na polia.",
    "Empurre para baixo estendendo os braços.",
    "Retorne devagar."
  ],
  dicas: [
    "Cotovelos colados ao corpo.",
    "Separe a corda no final."
  ],
  errosComuns: [
    "Mover o ombro.",
    "Deixar cotovelo abrir."
  ]
},

{
  nome: "Abdominal infra",
  grupo: "Abdômen",
  paraQueServe: "Trabalha a parte inferior do abdômen.",
  comoFazer: [
    "Deite no chão.",
    "Eleve as pernas estendidas.",
    "Desça devagar."
  ],
  dicas: [
    "Lombar sempre apoiada.",
    "Controle o movimento."
  ],
  errosComuns: [
    "Balançar as pernas.",
    "Tirar lombar do chão."
  ]
},

{
  nome: "Hip thrust",
  grupo: "Glúteo",
  paraQueServe: "Fortalece principalmente os glúteos.",
  comoFazer: [
    "Apoie as costas no banco.",
    "Barra sobre o quadril.",
    "Eleve o quadril até alinhar com o tronco.",
    "Desça controlando."
  ],
  dicas: [
    "Contraia forte no topo.",
    "Pés alinhados."
  ],
  errosComuns: [
    "Não estender totalmente.",
    "Abrir demais os joelhos."
  ]
}
];
