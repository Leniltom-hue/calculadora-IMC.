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
  // NOVOS (FREE)
  {
    id:"supino_inclinado_halteres",
    nome:"Supino inclinado com halteres",
    grupo:"Peito",
    nivel:"Intermediário",
    free:true,
    serve:"Trabalha a parte superior do peitoral com mais estabilidade e amplitude.",
    musculos:"Peitoral superior, deltoide anterior, tríceps.",
    como:[
      "Deite no banco inclinado e firme os pés no chão.",
      "Comece com halteres na linha do peito.",
      "Empurre para cima sem bater os halteres.",
      "Desça controlando até sentir alongar o peitoral."
    ],
    erros:["Descer rápido demais","Arquear muito a lombar","Bater halteres no topo"],
    pro:"PRO: inclinação ideal + progressão de cargas + variações (pegada neutra, tempo)."
  },
  {
    id:"barra_fixa",
    nome:"Barra fixa",
    grupo:"Costas",
    nivel:"Intermediário",
    free:true,
    serve:"Fortalece dorsais, bíceps e melhora postura.",
    musculos:"Dorsal, bíceps, romboides, core.",
    como:[
      "Pegue a barra (aberta ou neutra).",
      "Trave o core e puxe até o queixo passar a barra.",
      "Desça devagar controlando.",
      "Evite balançar o corpo."
    ],
    erros:["Usar impulso/balanço","Encolher ombros","Não completar amplitude"],
    pro:"PRO: progressão (elástico/negativas) + variações + volume semanal ideal."
  },
  {
    id:"elevacao_lateral",
    nome:"Elevação lateral",
    grupo:"Ombro",
    nivel:"Iniciante",
    free:true,
    serve:"Dá largura ao ombro (deltoide lateral).",
    musculos:"Deltoide lateral, trapézio estabilizador.",
    como:[
      "Halteres ao lado do corpo, cotovelo levemente flexionado.",
      "Eleve até a altura do ombro (sem passar muito).",
      "Pausa curta em cima.",
      "Desça devagar."
    ],
    erros:["Usar impulso","Subir acima do ombro","Encolher ombros"],
    pro:"PRO: técnica (plano escapular) + séries/semana + drop-set seguro."
  },
  {
    id:"triceps_corda",
    nome:"Tríceps corda",
    grupo:"Tríceps",
    nivel:"Iniciante",
    free:true,
    serve:"Fortalece a parte de trás do braço (tríceps).",
    musculos:"Tríceps (todas as cabeças).",
    como:[
      "Cotovelos colados ao corpo na polia.",
      "Empurre a corda para baixo estendendo os braços.",
      "No final, separe levemente a corda.",
      "Volte controlando sem deixar cotovelo abrir."
    ],
    erros:["Mexer o ombro","Abrir cotovelos","Usar carga e roubar"],
    pro:"PRO: ajustes de pegada + volume + variações (barra V, unilateral)."
  },
  {
    id:"abdominal_infra",
    nome:"Abdominal infra",
    grupo:"Abdômen",
    nivel:"Iniciante",
    free:true,
    serve:"Foco em abdômen inferior e controle do core.",
    musculos:"Reto abdominal, iliopsoas (controle), core.",
    como:[
      "Deite e mantenha lombar colada no chão.",
      "Eleve pernas (ou joelhos) sem embalar.",
      "Desça devagar sem perder a lombar no chão."
    ],
    erros:["Tirar a lombar do chão","Balançar as pernas","Descer sem controle"],
    pro:"PRO: progressão (dobrado -> estendido) + tempo + séries seguras."
  },
  {
    id:"hip_thrust",
    nome:"Hip thrust",
    grupo:"Glúteo",
    nivel:"Intermediário",
    free:true,
    serve:"Um dos melhores para glúteos e força do quadril.",
    musculos:"Glúteo máximo, posterior de coxa, core.",
    como:[
      "Costas apoiadas no banco, barra no quadril (com proteção).",
      "Suba o quadril até alinhar tronco e coxa.",
      "Contraia forte no topo 1s.",
      "Desça controlando."
    ],
    erros:["Não estender totalmente","Abrir demais joelhos","Jogar a lombar"],
    pro:"PRO: posição dos pés + cadência + progressão de carga e reps."
  },
];
