const $ = (id)=>document.getElementById(id);

const list = $("list");
const q = $("q");
const grupo = $("grupo");

const modal = $("modal");
const closeModal = $("closeModal");
const mTitle = $("mTitle");
const mSub = $("mSub");
const mServe = $("mServe");
const mMusculos = $("mMusculos");
const mComo = $("mComo");
const mErros = $("mErros");
const proBox = $("proBox");
const mPro = $("mPro");
const copyBtn = $("copyBtn");
const proBtn = $("proBtn");
const unlockHint = $("unlockHint");

const LS_PRO = "lp_pro_active_v1";

// 🔒 modo PRO (por enquanto manual; depois você liga com pagamento)
function isPro(){ return localStorage.getItem(LS_PRO) === "1"; }
function setPro(v){ localStorage.setItem(LS_PRO, v ? "1" : "0"); render(); }

function cardHTML(ex){
  const locked = !ex.free && !isPro();
  return `
    <div class="card" data-id="${ex.id}">
      <b>${ex.nome}</b>
      <small>${ex.grupo} • ${ex.nivel}</small>
      <div class="badge ${locked ? "lock" : ""}">
        ${locked ? "🔒 PRO" : "✅ FREE"}
      </div>
    </div>
  `;
}

function filterItems(){
  const text = (q.value||"").toLowerCase().trim();
  const g = grupo.value || "";
  return window.EXS.filter(ex=>{
    const okText = !text || ex.nome.toLowerCase().includes(text) || ex.grupo.toLowerCase().includes(text);
    const okG = !g || ex.grupo === g;
    return okText && okG;
  });
}

function render(){
  proBtn.textContent = isPro() ? "✅ PRO ATIVO" : "🔒 PRO";
  const items = filterItems();
  list.innerHTML = items.map(cardHTML).join("");
}

function openModalById(id){
  const ex = window.EXS.find(x=>x.id===id);
  if(!ex) return;

  const locked = !ex.free && !isPro();

  mTitle.textContent = ex.nome;
  mSub.textContent = `${ex.grupo} • ${ex.nivel} • ${locked ? "🔒 PRO" : "✅ FREE"}`;

  mServe.textContent = ex.serve;
  mMusculos.textContent = ex.musculos;

  mComo.innerHTML = ex.como.map(x=>`<li>${x}</li>`).join("");
  mErros.innerHTML = ex.erros.map(x=>`<li>${x}</li>`).join("");

  if(locked){
    proBox.style.display = "block";
    mPro.textContent = "Esse exercício é PRO. Ative o Treino Pago para ver dicas avançadas, progressão e planilha.";
  } else {
    proBox.style.display = ex.pro ? "block" : "none";
    mPro.textContent = ex.pro || "";
  }

  modal.style.display = "flex";
  modal.setAttribute("aria-hidden","false");

  copyBtn.onclick = async ()=>{
    const resumo =
`${ex.nome} (${ex.grupo})
Para que serve: ${ex.serve}
Músculos: ${ex.musculos}
Como fazer:
- ${ex.como.join("\n- ")}
Erros:
- ${ex.erros.join("\n- ")}
`;
    try{
      await navigator.clipboard.writeText(resumo);
      alert("Copiado ✅");
    }catch{
      prompt("Copie:", resumo);
    }
  };
}

function closeM(){
  modal.style.display = "none";
  modal.setAttribute("aria-hidden","true");
}

list.addEventListener("click", (e)=>{
  const c = e.target.closest(".card");
  if(!c) return;
  openModalById(c.dataset.id);
});

closeModal.addEventListener("click", closeM);
modal.addEventListener("click", (e)=>{ if(e.target === modal) closeM(); });

q.addEventListener("input", render);
grupo.addEventListener("change", render);

// ✅ botão PRO (por enquanto: liga/desliga manual pra testar)
proBtn.addEventListener("click", ()=>{
  const v = isPro();
  const ok = confirm(v ? "Desativar PRO?" : "Ativar PRO (modo teste)?");
  if(ok) setPro(!v);
});

unlockHint?.addEventListener("click", ()=>{
  alert("Para ativar o PRO: em breve vamos colocar pagamento/assinatura aqui ✅");
});

render();
