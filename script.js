const items=[
["filme","Capitão América: O Primeiro Vingador","Filme","Fase 1"],
["curta","Agente Carter","Curta / One-Shot","Fase 1"],
["curta","Uma Coisa Engraçada Aconteceu no Caminho para o Martelo de Thor","Curta / One-Shot","Fase 1"],
["filme","Capitã Marvel","Filme","Fase 1"],
["filme","Homem de Ferro","Filme","Fase 1"],
["filme","Homem de Ferro 2","Filme","Fase 1"],
["filme","O Incrível Hulk","Filme","Fase 1"],
["filme","Thor","Filme","Fase 1"],
["curta","O Consultor","Curta / One-Shot","Fase 1"],
["filme","Os Vingadores","Filme","Fase 1"],
["curta","Artigo 47","Curta / One-Shot","Fase 1"],
["filme","Homem de Ferro 3","Filme","Fase 2"],
["curta","Todos Saúdem o Rei","Curta / One-Shot","Fase 2"],
["filme","Thor: O Mundo Sombrio","Filme","Fase 2"],
["filme","Capitão América: O Soldado Invernal","Filme","Fase 2"],
["filme","Guardiões da Galáxia","Filme","Fase 2"],
["filme","Guardiões da Galáxia Vol. 2","Filme","Fase 2"],
["filme","Vingadores: Era de Ultron","Filme","Fase 2"],
["filme","Homem-Formiga","Filme","Fase 2"],
["serie","Demolidor — Temporada 1","Série","Defensores"],
["serie","Jessica Jones — Temporada 1","Série","Defensores"],
["serie","Demolidor — Temporada 2","Série","Defensores"],
["serie","Luke Cage — Temporada 1","Série","Defensores"],
["serie","Punho de Ferro — Temporada 1","Série","Defensores"],
["serie","Os Defensores — Temporada 1","Série","Defensores"],
["filme","Capitão América: Guerra Civil","Filme","Fase 3"],
["serie","O Justiceiro — Temporada 1","Série","Defensores"],
["serie","Jessica Jones — Temporada 2","Série","Defensores"],
["serie","Luke Cage — Temporada 2","Série","Defensores"],
["filme","Pantera Negra","Filme","Fase 3"],
["filme","Homem-Aranha: De Volta ao Lar","Filme","Fase 3"],
["serie","O Justiceiro — Temporada 2","Série","Defensores"],
["serie","Jessica Jones — Temporada 3","Série","Defensores"],
["filme","Doutor Estranho","Filme","Fase 3"],
["filme","Thor: Ragnarok","Filme","Fase 3"],
["filme","Homem-Formiga e a Vespa","Filme","Fase 3"],
["filme","Vingadores: Guerra Infinita","Filme","Fase 3"],
["filme","Vingadores: Ultimato","Filme","Saga do Infinito"],
["serie","WandaVision — Temporada 1","Série","Fase 4"],
["serie","Loki — Temporada 1","Série / Multiverso","Multiverso"],
["serie","Falcão e o Soldado Invernal — Temporada 1","Série","Fase 4"],
["filme","Shang-Chi e a Lenda dos Dez Anéis","Filme","Fase 4"],
["filme","Eternos","Filme","Fase 4"],
["filme","Homem-Aranha: Longe de Casa","Filme","Fase 4"],
["filme","Homem-Aranha: Sem Volta para Casa","Filme / Multiverso","Fase 4"],
["filme","Doutor Estranho no Multiverso da Loucura","Filme / Multiverso","Fase 4"],
["serie","Gavião Arqueiro — Temporada 1","Série","Fase 4"],
["serie","Cavaleiro da Lua — Temporada 1","Série","Fase 4"],
["filme","Thor: Amor e Trovão","Filme","Fase 4"],
["serie","Ms. Marvel — Temporada 1","Série","Fase 4"],
["filme","Pantera Negra: Wakanda Para Sempre","Filme","Fase 4"],
["serie","Mulher-Hulk: Defensora de Heróis — Temporada 1","Série","Fase 4"],
["curta","Lobisomem na Noite","Especial","Fase 4"],
["curta","Guardiões da Galáxia: Especial de Festas","Especial","Fase 4"],
["filme","Homem-Formiga e a Vespa: Quantumania","Filme","Fase 5"],
["serie","Invasão Secreta — Temporada 1","Série","Fase 5"],
["filme","Guardiões da Galáxia Vol. 3","Filme","Fase 5"],
["filme","As Marvels","Filme","Fase 5"],
["serie","Loki — Temporada 2","Série / Multiverso","Multiverso"],
["serie","What If...? — Temporada 1","Animação / Multiverso","Multiverso"],
["serie","What If...? — Temporada 2","Animação / Multiverso","Multiverso"],
["serie","What If...? — Temporada 3","Animação / Multiverso","Multiverso"],
["serie","Agatha Desde Sempre — Temporada 1","Série","Fase 5"],
["serie","Demolidor: Renascido — Temporada 1","Série","Fase 5"],
["filme","Capitão América: Admirável Mundo Novo","Filme","Fase 5"],
["filme","Thunderbolts*","Filme","Fase 5"],
["serie","Seu Amigão da Vizinhança Homem-Aranha — Temporada 1","Animação / Multiverso","Multiverso"],
["serie","Marvel Zombies — Temporada 1","Animação / Multiverso","Multiverso"],
["filme","Quarteto Fantástico: Primeiros Passos","Filme / Universo alternativo","Multiverso"],
["serie","Demolidor: Renascido — Temporada 2","Série","Fase 6"]
];

const key="mcu-watch-v1", saved=JSON.parse(localStorage.getItem(key)||"{}");
let filter="all", hideCompleted=false;
const $=s=>document.querySelector(s);

function render(){
 const q=$("#search").value.toLowerCase().trim(), list=$("#list");
 list.innerHTML="";
 let shown=0;
 let currentPhase="";
 items.forEach((it,i)=>{
   const done=!!saved[i];
   const [type,title,meta,phase]=it;
   if(filter!=="all" && !(filter==="animacao" ? meta.includes("Animação") : type===filter)) return;
   if(hideCompleted&&done)return;
   if(q && !title.toLowerCase().includes(q))return;
   if(phase!==currentPhase){currentPhase=phase;const h=document.createElement("div");h.className="phase";h.textContent=phase;list.appendChild(h)}
   shown++;
   const row=document.createElement("label");row.className="item"+(done?" done":"");
   row.innerHTML=`<input class="check" type="checkbox" ${done?"checked":""}><span class="num">${String(i+1).padStart(2,"0")}</span><span><div class="title">${title}</div><div class="meta">${meta}</div></span><span class="tag">${phase}</span>`;
   row.querySelector("input").addEventListener("change",e=>{saved[i]=e.target.checked;localStorage.setItem(key,JSON.stringify(saved));update();});
   list.appendChild(row);
 });
 if(!shown) list.innerHTML='<div class="empty">Nenhum item encontrado.</div>';
 update(false);
}
function update(doRender=true){
 const total=items.length, done=Object.values(saved).filter(Boolean).length, pct=total?Math.round(done/total*100):0;
 $("#progressText").textContent=`${done}/${total}`;
 $("#percent").textContent=pct+"%"; $("#barFill").style.width=pct+"%";
 if(doRender)render();
}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");filter=b.dataset.filter;render()}));
$("#search").addEventListener("input",render);
$("#toggleCompleted").addEventListener("click",()=>{hideCompleted=!hideCompleted;$("#toggleCompleted").textContent=hideCompleted?"Mostrar concluídos":"Ocultar concluídos";render()});
$("#reset").addEventListener("click",()=>{if(confirm("Desmarcar tudo?")){localStorage.removeItem(key);location.reload()}});
render();
