(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();const Y=[{id:"hospedagem",label:"Hospedagem e turismo",regime:"6x1",jornada:44,risco:"alto",salarioMedio:1850,prioritario:!0,pct6x1:52,pctFolhaHe:13,contratacoesPor10:1,sub:["Hotéis e pousadas","Rotas turísticas"],impacto:"Setor prioritário na pesquisa Sebrae (mai/2026): 52% dos empregados estão na escala 6x1 (MTE) — o nível mais crítico entre os pequenos negócios. Operação 24/7 torna a redução de jornada muito sensível.",icone:"hotel"},{id:"alimentacao",label:"Alimentação e bebidas",regime:"6x1",jornada:44,risco:"alto",salarioMedio:1800,prioritario:!0,pct6x1:47.1,pctNegativa:55,pctFolhaHe:13,contratacoesPor10:1,sub:["Bares e restaurantes","Padarias e lanchonetes"],impacto:"Setor prioritário na pesquisa Sebrae (mai/2026): 47% dos empregados estão na escala 6x1 (MTE) e são 156 mil MPEs. A redução de 44h para 40h exige contratação adicional ou banco de horas.",icone:"restaurant"},{id:"comercio_varejo",label:"Comércio varejista",regime:"6x1",jornada:44,risco:"alto",salarioMedio:1700,prioritario:!0,pct6x1:42.2,pctNegativa:47,pctFolhaHe:13,contratacoesPor10:1,sub:["Varejo alimentar (supermercados e minimercados)","Moda","Saúde (farmácias, óticas, artigos médicos)","Materiais de construção"],destaque:"varejo alimentar chega a 61% e moda a 57%",impacto:"42% dos empregados do varejo estão na escala 6x1 (MTE 2026): com o teto de 40h, as escalas de sábado e domingo exigem reorganização ou contratação.",icone:"store"},{id:"agro",label:"Agronegócio e produção rural",regime:"6x1",jornada:44,risco:"medio",salarioMedio:1950,prioritario:!0,pct6x1:36.6,pctNegativa:55,pctFolhaHe:13,contratacoesPor10:1,sub:["Bovinocultura (leite, corte e outros)","Serviços de apoio à agropecuária","Cultivos: soja, café, milho e cana"],impacto:"Setor prioritário na pesquisa Sebrae (mai/2026): 37% dos empregados na escala 6x1 (MTE), com 254 mil MPEs — incluindo produtores rurais pessoa física que contratam CLT.",icone:"plant"},{id:"industria",label:"Indústria",regime:"5x2",jornada:44,risco:"medio",salarioMedio:2200,prioritario:!0,pct6x1:32.5,pctNegativa:39,pctFolhaHe:13,contratacoesPor10:1,sub:["Alimentos e bebidas","Materiais de construção, marcenarias e serralherias","Celulose e papel"],destaque:"materiais de construção chega a 47%",impacto:"Setor prioritário na pesquisa Sebrae (mai/2026): 33% dos empregados na escala 6x1 (MTE) e 185 mil MPEs — destaque para alimentos e bebidas, materiais de construção e celulose e papel.",icone:"factory"},{id:"servicos_locais",label:"Serviços locais",regime:"5x2",jornada:44,risco:"medio",salarioMedio:1900,prioritario:!0,pct6x1:31.5,pctNegativa:29,pctFolhaHe:13,contratacoesPor10:1,sub:["Pet shops","Oficinas automotivas","Serviços pessoais (imobiliárias e assistências técnicas)"],destaque:"pet shops chega a 64%, o maior de toda a pesquisa",impacto:"Setor prioritário na pesquisa Sebrae (mai/2026): 31% dos empregados na escala 6x1 (MTE) e mais de 1 milhão de MPEs — destaque para serviços pessoais, pet shops e oficinas automotivas.",icone:"tools"},{id:"beleza_estetica",label:"Beleza e estética",regime:"5x2",jornada:44,risco:"medio",salarioMedio:1900,prioritario:!1,pctFolhaHe:13,contratacoesPor10:1,impacto:"Turnos longos em dias de pico (sábado) tornam-se horas extras com a nova regra.",icone:"scissors"},{id:"saude",label:"Saúde e bem-estar",regime:"5x2",jornada:40,risco:"baixo",salarioMedio:2800,prioritario:!1,pctFolhaHe:0,contratacoesPor10:0,semImpacto:!0,impacto:"Setor parcialmente adaptado. Plantões noturnos e de final de semana exigem atenção.",icone:"hospital"},{id:"construcao",label:"Construção civil",regime:"5x2",jornada:44,risco:"medio",salarioMedio:2200,prioritario:!1,pctNegativa:39,pctFolhaHe:13,contratacoesPor10:1,impacto:"Priorização em avaliação na pesquisa Sebrae (mai/2026): 29% dos empregados estão na escala 6x1 (MTE), abaixo dos setores prioritários, mas 39% dos donos esperam impacto negativo (Pesquisa Pulso 12ª ed.) — acima da média geral de 38%.",icone:"hammer"},{id:"transporte",label:"Transporte e logística",regime:"6x1",jornada:44,risco:"medio",salarioMedio:2100,prioritario:!1,pctFolhaHe:13,contratacoesPor10:1,impacto:"O índice alto do MTE é do transporte aéreo, com presença residual de pequenos negócios. Motoristas profissionais têm regulação própria; para os demais vínculos do setor, o impacto é moderado.",icone:"truck"},{id:"educacao",label:"Educação e ensino",regime:"5x2",jornada:40,risco:"baixo",salarioMedio:2500,prioritario:!1,pctFolhaHe:0,contratacoesPor10:0,semImpacto:!0,impacto:"Setor já alinhado com jornada de 40h na maioria dos segmentos.",icone:"book"},{id:"tecnologia",label:"Tecnologia e serviços digitais",regime:"5x2",jornada:40,risco:"baixo",salarioMedio:4500,prioritario:!1,pctFolhaHe:0,contratacoesPor10:0,semImpacto:!0,impacto:"Setor já majoritariamente em 40h. Oportunidade de formalizar acordos de flexibilidade.",icone:"code"}],va=[{id:"garcom",setor:"alimentacao",label:"Garçom / Garçonete",regime:"6x1",turnoMin:440,dias:["ter","qua","qui","sex","sab","dom"]},{id:"cozinheiro",setor:"alimentacao",label:"Cozinheiro(a)",regime:"6x1",turnoMin:440,dias:["ter","qua","qui","sex","sab","dom"]},{id:"auxiliar-cozinha",setor:"alimentacao",label:"Auxiliar de cozinha",regime:"6x1",turnoMin:440,dias:["ter","qua","qui","sex","sab","dom"]},{id:"atendente-balcao",setor:"alimentacao",label:"Atendente de balcão",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"pizzaiolo",setor:"alimentacao",label:"Pizzaiolo / Chapeiro",regime:"6x1",turnoMin:440,dias:["ter","qua","qui","sex","sab","dom"]},{id:"caixa-alim",setor:"alimentacao",label:"Operador(a) de caixa",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"entregador",setor:"alimentacao",label:"Entregador(a) (moto)",regime:"6x1",turnoMin:440,dias:["ter","qua","qui","sex","sab","dom"]},{id:"gerente-alim",setor:"alimentacao",label:"Gerente",regime:"6x1",turnoMin:440,dias:["ter","qua","qui","sex","sab","dom"]},{id:"vendedor",setor:"comercio_varejo",label:"Vendedor(a) de loja",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"caixa-varejo",setor:"comercio_varejo",label:"Operador(a) de caixa",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"estoquista",setor:"comercio_varejo",label:"Estoquista",regime:"5x2",turnoMin:528,dias:["seg","ter","qua","qui","sex"]},{id:"repositor",setor:"comercio_varejo",label:"Repositor(a)",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"gerente-loja",setor:"comercio_varejo",label:"Gerente de loja",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"cabeleireiro",setor:"beleza_estetica",label:"Cabeleireiro(a)",regime:"5x2",turnoMin:528,dias:["ter","qua","qui","sex","sab"]},{id:"barbeiro",setor:"beleza_estetica",label:"Barbeiro",regime:"5x2",turnoMin:528,dias:["ter","qua","qui","sex","sab"]},{id:"manicure",setor:"beleza_estetica",label:"Manicure / Pedicure",regime:"5x2",turnoMin:528,dias:["ter","qua","qui","sex","sab"]},{id:"esteticista",setor:"beleza_estetica",label:"Esteticista",regime:"5x2",turnoMin:480,dias:["ter","qua","qui","sex","sab"]},{id:"recep-salao",setor:"beleza_estetica",label:"Recepcionista de salão",regime:"5x2",turnoMin:528,dias:["ter","qua","qui","sex","sab"]},{id:"recep-clinica",setor:"saude",label:"Recepcionista de clínica",regime:"5x2",turnoMin:480,dias:["seg","ter","qua","qui","sex"]},{id:"tec-enfermagem",setor:"saude",label:"Técnico(a) de enfermagem",regime:"12x36",turnoMin:720,dias:["seg","qua","sex","dom"]},{id:"enfermeiro",setor:"saude",label:"Enfermeiro(a)",regime:"5x2",turnoMin:480,dias:["seg","ter","qua","qui","sex"]},{id:"cuidador",setor:"saude",label:"Cuidador(a) de idosos",regime:"12x36",turnoMin:720,dias:["seg","qua","sex","dom"]},{id:"pedreiro",setor:"construcao",label:"Pedreiro",regime:"5x2",turnoMin:528,dias:["seg","ter","qua","qui","sex"]},{id:"servente",setor:"construcao",label:"Servente de obra",regime:"5x2",turnoMin:528,dias:["seg","ter","qua","qui","sex"]},{id:"mestre-obras",setor:"construcao",label:"Mestre de obras",regime:"5x2",turnoMin:528,dias:["seg","ter","qua","qui","sex"]},{id:"eletricista",setor:"construcao",label:"Eletricista",regime:"5x2",turnoMin:528,dias:["seg","ter","qua","qui","sex"]},{id:"motorista",setor:"transporte",label:"Motorista de entrega",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"ajudante-carga",setor:"transporte",label:"Ajudante de carga e descarga",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"logistica",setor:"transporte",label:"Auxiliar de logística",regime:"5x2",turnoMin:528,dias:["seg","ter","qua","qui","sex"]},{id:"professor",setor:"educacao",label:"Professor(a)",regime:"5x2",turnoMin:240,dias:["seg","ter","qua","qui","sex"]},{id:"auxiliar-classe",setor:"educacao",label:"Auxiliar de classe",regime:"5x2",turnoMin:480,dias:["seg","ter","qua","qui","sex"]},{id:"coord-ped",setor:"educacao",label:"Coordenador(a) pedagógico(a)",regime:"5x2",turnoMin:480,dias:["seg","ter","qua","qui","sex"]},{id:"recep-hotel",setor:"hospedagem",label:"Recepcionista (diurno)",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"recep-noturno",setor:"hospedagem",label:"Recepcionista noturno",regime:"12x36",turnoMin:720,dias:["seg","qua","sex","dom"],noturno:!0},{id:"camareira",setor:"hospedagem",label:"Camareiro(a)",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"governanta",setor:"hospedagem",label:"Governanta",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"desenvolvedor",setor:"tecnologia",label:"Desenvolvedor(a) de software",regime:"5x2",turnoMin:480,dias:["seg","ter","qua","qui","sex"]},{id:"suporte",setor:"tecnologia",label:"Analista de suporte técnico",regime:"5x2",turnoMin:480,dias:["seg","ter","qua","qui","sex"]},{id:"designer",setor:"tecnologia",label:"Designer",regime:"5x2",turnoMin:480,dias:["seg","ter","qua","qui","sex"]},{id:"rural",setor:"agro",label:"Trabalhador(a) rural",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"tratorista",setor:"agro",label:"Tratorista / Operador de máquinas",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"operador-prod",setor:"industria",label:"Operador(a) de produção",regime:"5x2",turnoMin:528,dias:["seg","ter","qua","qui","sex"]},{id:"auxiliar-prod",setor:"industria",label:"Auxiliar de produção",regime:"5x2",turnoMin:528,dias:["seg","ter","qua","qui","sex"]},{id:"marceneiro",setor:"industria",label:"Marceneiro(a)",regime:"5x2",turnoMin:528,dias:["seg","ter","qua","qui","sex"]},{id:"mecanico",setor:"servicos_locais",label:"Mecânico(a) automotivo",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"atendente-pet",setor:"servicos_locais",label:"Atendente de pet shop",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]},{id:"banhista",setor:"servicos_locais",label:"Banhista / Tosador(a)",regime:"6x1",turnoMin:440,dias:["seg","ter","qua","qui","sex","sab"]}],L=[{key:"seg",label:"Seg",longo:"Segunda"},{key:"ter",label:"Ter",longo:"Terça"},{key:"qua",label:"Qua",longo:"Quarta"},{key:"qui",label:"Qui",longo:"Quinta"},{key:"sex",label:"Sex",longo:"Sexta"},{key:"sab",label:"Sáb",longo:"Sábado"},{key:"dom",label:"Dom",longo:"Domingo"}],ka=[{id:"5x2",label:"5x2",desc:"5 dias de trabalho e 2 dias de folga por semana",dias:5},{id:"6x1",label:"6x1",desc:"6 dias de trabalho e 1 dia de folga por semana",dias:6},{id:"4x3",label:"4x3",desc:"4 dias de trabalho e 3 dias de folga por semana",dias:4},{id:"12x36",label:"12x36",desc:"12 horas de trabalho seguidas de 36 horas de descanso",dias:4}],ga={"5x2":480,"6x1":400,"4x3":600,"12x36":720},R=1.615,O=4.33,F=40,da=1.5,wa=.2,Pa=2;function h(a){return(Number(a)||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:0,maximumFractionDigits:0})}function N(a){return(Number(a)||0).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}function D(a){let e=String(a??"").replace(/[^\d.,-]/g,"");return e.includes(",")?e=e.replace(/\./g,"").replace(",","."):((e.match(/\./g)||[]).length>1||/\.\d{3}$/.test(e))&&(e=e.replace(/\./g,"")),Math.max(0,parseFloat(e)||0)}function La(){return"g"+Math.random().toString(36).slice(2,9)}function fa(a){const e={"5x2":5,"6x1":6,"4x3":4,"12x36":4}[a]??5;return L.slice(0,e).map(r=>r.key)}function ba(a){return a<=4?0:a<=6?.25:1}function B(a){return a+Math.round(ba(a/60)*60)}function I(a,e){const[r,o]=a.split(":").map(Number),i=((r*60+o+e)%1440+1440)%1440;return`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}function Aa(a,e){if(!a||!e)return 0;const[r,o]=a.split(":").map(Number),[i,l]=e.split(":").map(Number);let c=i*60+l-(r*60+o);return c<0&&(c+=1440),Math.round(c/60*100)/100}function Fa(a,e){const r=Aa(a,e);return Math.max(0,Math.round((r-ba(r))*100)/100)}function ua(a,e){if(!a||!e)return!1;const[r,o]=a.split(":").map(Number),[i,l]=e.split(":").map(Number),c=r*60+o;let u=i*60+l;u<=c&&(u+=1440);const x=(S,C,$,w)=>Math.max(0,Math.min(C,w)-Math.max(S,$));return x(c,u,1320,1740)>0||x(c,u,0,300)>0}function Na(a){const e=Math.floor(a/60),r=a%60;return r?`${e}h${String(r).padStart(2,"0")}min`:`${e}h`}function pa(a,e){const r=e?a*wa:0,o=a+r,i=o*.2,l=o*.08,c=o*.03,u=o*.048,x=o/12*(1+1/3),S=o/12,C=o*.04,$=o+i+l+c+u+x+S+C;return{salario:a,adicional:r,inss:i,fgts:l,rat:c,terceiros:u,ferias:x,decimo:S,rescisao:C,total:a*R+r*R,detalheTotal:$}}function X(a){var o;const e=((o=a.dias)==null?void 0:o.length)||5,r=Fa(a.inicio,a.fim);return Math.round(r*e*10)/10}function Ta(a){var ra,ta,ia;const e=a.grupos.filter(t=>!t.semVinculo).flatMap(t=>t.pessoas.map(d=>({...d,grupo:t.label,regime:t.regime,inicio:t.inicio,fim:I(t.inicio,B(t.turnoMin)),dias:t.dias,noturno:ua(t.inicio,I(t.inicio,B(t.turnoMin)))}))),r=a.grupos.filter(t=>t.semVinculo).flatMap(t=>t.pessoas.map(d=>({...d,grupo:t.label}))),o=e.length,i=r.reduce((t,d)=>t+(d.salario||0),0);if(o===0)return{erro:"Inclua ao menos um funcionário com vínculo CLT."};const l=e.map(X),c=Math.round(l.reduce((t,d)=>t+d,0)/o*10)/10,u=Math.round(l.reduce((t,d)=>t+d,0)*10)/10,x=o*F,S=u>0?Math.round((1-x/u)*100):0,C=e.map(t=>pa(t.salario||0,t.noturno)),$=Math.round(C.reduce((t,d)=>t+d.total,0)),w=e.map((t,d)=>Math.max(0,l[d]-F)),A=w.map(t=>Math.round(t*O*10)/10),E=o?Math.round(A.reduce((t,d)=>t+d,0)/o*10)/10:0,W=e.map((t,d)=>{const P=l[d]||F,T=P>0?t.salario/(P*O):0;return A[d]*T*da*R}),J=Math.round($+W.reduce((t,d)=>t+d,0)),n=J-$,f=$>0?Math.round(n/$*100):0,b=w.reduce((t,d)=>t+d,0),m=b>0?Math.ceil(b/F):0,M=e.reduce((t,d)=>t+(d.salario||0),0)/o,j=M*R,aa=Math.round($+m*j),_=aa-$,xa=$>0?Math.round(_/$*100):0,$a=e.reduce((t,d,P)=>{const T=l[P]||F,Q=T>0?d.salario/(T*O):0;return t+A[P]*Q*Pa},0),ea=Math.round($a),oa=c<=F&&b===0,Ma=a.grupos.filter(t=>t.pessoas.length).map(t=>{const d=t.semVinculo?[]:t.pessoas.map(q=>{const y={...q,inicio:t.inicio,fim:I(t.inicio,B(t.turnoMin)),dias:t.dias},H=X(y),Ca=Math.max(0,H-F)*O,Ea=H>0?q.salario/(H*O):0,la=pa(q.salario||0,ua(y.inicio,y.fim)).total,ja=la+Ca*Ea*da*R;return{nome:q.nome||"Funcionário",atual:Math.round(la),he:Math.round(ja),salario:q.salario||0}}),P=d.reduce((q,y)=>q+y.atual,0),T=d.reduce((q,y)=>q+y.he,0),Q=t.semVinculo?0:t.pessoas.reduce((q,y)=>{const H=X({...y,inicio:t.inicio,fim:I(t.inicio,B(t.turnoMin)),dias:t.dias});return q+Math.max(0,H-F)},0),na=Q>0?Math.ceil(Q/F):0,ca=t.pessoas.length?Math.round(t.pessoas.reduce((q,y)=>q+(y.salario||0),0)/t.pessoas.length):0,Sa=P+na*ca*R;return t.semVinculo?t.pessoas.reduce((q,y)=>q+(y.salario||0),0):d.reduce((q,y,H)=>Math.max(0,T-P),0),{nome:t.label,n:t.pessoas.length,regime:t.regime,semVinculo:!!t.semVinculo,salMedioG:ca,atual:Math.round(P),he:Math.round(T),contrata:Math.round(Sa),extras:na,diarias:t.semVinculo?Math.round(t.pessoas.reduce((q,y)=>q+(y.salario||0),0)):Math.round(ea*(P/Math.max($,1))),pessoas:d}}),k=C.reduce((t,d)=>(t.salario_base+=d.salario,t.adicional_noturno+=d.adicional,t.inss+=d.inss,t.fgts+=d.fgts,t.rat+=d.rat,t.terceiros+=d.terceiros,t.ferias+=d.ferias,t.decimo+=d.decimo,t.rescisao+=d.rescisao,t),{salario_base:0,adicional_noturno:0,inss:0,fgts:0,rat:0,terceiros:0,ferias:0,decimo:0,rescisao:0});Object.keys(k).forEach(t=>{k[t]=Math.round(k[t]/o)});let z="";if(oa)z="Sua equipe já trabalha dentro de 40h por semana, então a PEC 221 não impacta a escala que você tem hoje nem a sua folha: seu negócio já se enquadra na proposta.";else if(m===0)z="Operando em 40h, a folha segue no valor de hoje, sem hora extra e sem novas contratações.";else{const t=n-_;Math.abs(t)<$*.02?z=`Manter a equipe com hora extra e contratar ${m} pessoa${m>1?"s":""} ficam em faixas próximas. Hora extra preserva o tamanho da equipe, mas o custo varia mês a mês. Contratar deixa a folha previsível.`:n<_?z=`No curto prazo, manter a equipe com hora extra sai cerca de ${h(_-n)}/mês mais barato do que contratar. No médio prazo, o custo extra e o cansaço da equipe tendem a favorecer a contratação.`:z=`Contratar ${m} pessoa${m>1?"s":""} para operar em 40h sai cerca de ${h(n-_)}/mês mais barato do que pagar hora extra para manter a capacidade de hoje.`}let K=0;((ra=a.faturamento)==null?void 0:ra.modo)==="mensal"?K=Number(a.faturamento.mensal)||0:((ta=a.faturamento)==null?void 0:ta.modo)==="diario"&&(K=Object.values(a.faturamento.diario||{}).reduce((t,d)=>t+(Number(d)||0),0)*O);const sa=Number((ia=a.faturamento)==null?void 0:ia.margemPct)||0,qa=K*(sa/100);return{n:o,jornadaMedia:c,horasEquipe:u,horasEquipe40:x,quedaCapacidade:S,folhaHoje:$,folhaHe:J,deltaHe:n,pctHe:f,heMesMedia:E,novasContratacoes:m,folhaContrata:aa,deltaContrata:_,pctContrata:xa,custoNovo:Math.round(j),diarias:ea,custoFreela:Math.round(i),nFreelas:r.length,jaDentro:oa,porGrupo:Ma,recomendacao:{mensagem:z},fatMensal:Math.round(K),margemPct:sa,margem:Math.round(qa),salarioMedio:Math.round(M),breakdown:{salario_base:k.salario_base,adicional_noturno:k.adicional_noturno,encargos:{inss:k.inss,fgts:k.fgts,rat:k.rat,terceiros:k.terceiros},provisoes:{ferias:k.ferias,decimo_terceiro:k.decimo,aviso_previo:k.rescisao}},escala:Va(a)}}function Va(a){const e=[];return a.grupos.forEach(r=>{r.pessoas.forEach((o,i)=>{var x;const l=((x=o.nome)==null?void 0:x.trim())||`${r.label} ${i+1}`,c=I(r.inicio,B(r.turnoMin)),u={};L.forEach(S=>{u[S.key]=r.dias.includes(S.key)?{tipo:"trabalho",inicio:r.inicio,fim:c}:{tipo:"folga"}}),e.push({nome:l,grupo:r.label,semVinculo:!!r.semVinculo,celulas:u})})}),e}function _a(a,e={}){const r=e.regime||a||"6x1";return{id:La(),label:e.label||"Equipe geral",cargoId:e.cargoId||"",regime:r,turnoMin:e.turnoMin||ga[r]||480,inicio:e.inicio||"08:00",dias:e.dias?[...e.dias]:fa(r),semVinculo:!!e.semVinculo,pessoas:[]}}const za={hotel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/><path d="M9 10h.01M15 10h.01"/></svg>',restaurant:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 3v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3"/><path d="M10 12v9M6 3v4M14 8h6M17 8v13"/></svg>',store:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l1.5-6h15L21 9"/><path d="M3 9h18v12H3z"/><path d="M9 21v-8h6v8"/></svg>',plant:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22V11"/><path d="M12 11c0-6 6-8 9-8-1 5-6 7-9 8z"/><path d="M12 11c0-6-6-8-9-8 1 5 6 7 9 8z"/></svg>',factory:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 21h20V10l-6 4V10l-6 4V8H2z"/><path d="M6 17h2M10 17h2"/></svg>',tools:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a5 5 0 0 0-7 7l-5 5 2 2 5-5a5 5 0 0 0 7-7l-3 3-2-2z"/></svg>',scissors:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/></svg>',hospital:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>',hammer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 12l7-7-3-3-7 7"/><path d="M9 8L2 21l3 1 7-10"/></svg>',truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 7h13v10H1z"/><path d="M14 11h5l4 4v2h-9"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6"/></svg>',calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12l5 5L20 7"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 9v4M12 17h.01"/><path d="M10.3 4.3L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0z"/></svg>',plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V5h6v2M6 7l1 14h10l1-14"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>',chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12M7 11l5 5 5-5"/><path d="M5 21h14"/></svg>',money:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5c.5-1 3.5-1.5 3.5.5s-4 1-4 2.5 3 2 4.5.5"/></svg>',team:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.8-4 4-6 6-6s5.2 2 6 6M14 14c2 0 4.5 1.2 5.5 4"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V4M4 20h16"/><path d="M8 16v-5M12 16V8M16 16v-8"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12a9 9 0 1 1-2.6-6.4L21 8"/><path d="M21 3v5h-5"/></svg>',info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 8h.01"/></svg>'};function v(a,e=""){return`<span class="ico ${e}" aria-hidden="true">${za[a]||""}</span>`}const p=document.getElementById("app"),Ha=[360,380,440,480,528,720],Oa=[240,300,360,480],s={passo:1,setorId:null,grupos:[],faturamento:{modo:"mensal",mensal:0,diario:{seg:0,ter:0,qua:0,qui:0,sex:0,sab:0,dom:0},margemPct:0},caminho:"contratar",individual:!1,resultado:null,erro:"",confirmarLimpar:!1};function Z(){return Y.find(a=>a.id===s.setorId)||null}function Ra(){return va.filter(a=>a.setor===s.setorId)}function ma(a){return a==="alto"?"Impacto alto na folha":a==="medio"?"Impacto médio na folha":"Impacto baixo na folha"}function Ba(a){return a.jornada<=40?"Maioria já trabalha 40h/semana":a.regime==="6x1"?"Jornada típica dos funcionários: 6 dias por semana":"Jornada típica dos funcionários: 5 dias por semana"}function Ia(){return s.grupos.filter(a=>!a.semVinculo).reduce((a,e)=>a+e.pessoas.length,0)}function G(a){let e=document.querySelector(".toast");e||(e=document.createElement("div"),e.className="toast",e.style.cssText="position:fixed;top:16px;left:50%;transform:translateX(-50%);background:#2B3064;color:#fff;padding:10px 16px;border-radius:10px;z-index:50;font-weight:700;font-size:14px;box-shadow:0 8px 24px rgba(43,48,100,.28)",document.body.appendChild(e)),e.textContent=a,e.hidden=!1,clearTimeout(G._t),G._t=setTimeout(()=>e.hidden=!0,2800)}function V(a,...e){return a.reduce((r,o,i)=>r+o+(e[i]??""),"")}function g(){const a=Z();p.innerHTML=V`
    <div class="barra-marca">
      <div class="topo">
        <a class="logo" href="./" aria-label="Coelho de Souza Advogados, início">
          <img src="/logo.png" alt="Coelho de Souza Advogados" />
        </a>
        <span class="selo">Simulador</span>
      </div>
      <header class="hero">
        <div class="hero-inner">
          <p class="eyebrow">Fim da escala 6x1 · EC 141/2026</p>
          <h1>Simule o impacto na <em>folha</em> do seu negócio</h1>
          <p>
            A PEC 221/2019 foi promulgada como Emenda Constitucional 141/2026 em 16/10/2026:
            a jornada máxima cai de 44 para 40 horas semanais, com 2 folgas por semana — o fim
            da escala 6x1. Informe o setor, os funcionários e a jornada, e compare os caminhos:
            manter a equipe pagando hora extra, contratar ou cobrir com freelancers.
          </p>
          <div class="chips">
            <span class="chip">Gratuito</span>
            <span class="chip">Resultado na hora</span>
            <span class="chip">Compare contratar, hora extra ou freelancers</span>
          </div>
        </div>
      </header>
    </div>
    ${Da()}
    <main class="layout" id="main-content">
      ${s.passo<5?Ga(a):Za()}
    </main>
    <footer class="rodape">
      <p>
        <b>Coelho de Souza Advogados</b> — ferramenta de apoio para donos de pequenos negócios.
        Os números são estimativas (salário + encargos de cerca de 61,5%). A convenção
        coletiva da sua categoria pode ter regras próprias. Consulte seu contador.
      </p>
    </footer>
  `,ce()}function Da(){return V`<nav class="passos-nav" aria-label="Etapas da simulação">
    ${[{n:1,l:"Setor"},{n:2,l:"Equipe"},{n:3,l:"Jornada"},{n:4,l:"Faturamento"}].map(e=>{const r=s.passo>e.n||s.passo===5&&e.n<=4,o=s.passo===e.n,i=e.n<=Math.max(s.passo,1)||r;return`<button type="button" class="pn${o?" on":""}${r?" ok":""}" data-goto="${e.n}" ${i?"":"disabled"} title="Passo ${e.n}: ${e.l}${o?" (passo atual)":""}">
          <span class="n">${r&&!o?v("check"):e.n}</span>
          <span>${e.l}</span>
        </button>`}).join("")}
  </nav>`}function Ga(a){return s.passo===1?Ja(a):s.passo===2?Ua():s.passo===3?Ka():Ya()}function Ja(a){const e=Y.filter(o=>o.prioritario),r=Y.filter(o=>!o.prioritario);return V`<section class="cartao">
    <h2>Qual é o <em>setor</em> do seu negócio?</h2>
    <p class="sub">Selecione o setor que melhor representa sua atividade e clique em <strong>Continuar</strong>.</p>
    <div class="grupo-setores-titulo">Setores mais impactados pelo fim da 6x1</div>
    <p class="nota-setores">
      Nesses setores, o impacto típico é de +13% na folha, ou uma contratação a cada 10 pessoas.
      <span class="fonte-dado">Fonte: Pesquisa Sebrae, com dados do Ministério do Trabalho e Emprego (MTE), 2026</span>
    </p>
    <div class="grid-setores grid-setores--ricos">
      ${e.map(o=>ha(o,a,!0)).join("")}
    </div>
    <div class="grupo-setores-titulo" style="margin-top:22px">Outros setores</div>
    <div class="grid-setores grid-setores--compactos">
      ${r.map(o=>ha(o,a,!1)).join("")}
    </div>
    ${a?Qa(a):""}
    ${s.erro?`<p class="erro-msg">${s.erro}</p>`:""}
    ${U(!0,"Continuar")}
  </section>`}function ha(a,e,r){const o=(e==null?void 0:e.id)===a.id;return r?`<button type="button" class="setor setor--rico${o?" sel":""}" data-setor="${a.id}" aria-pressed="${o}">
    <div class="setor-topo"><span class="setor-ic">${v(a.icone)}</span><span class="nome">${a.label}</span></div>
    <div class="freq">${v("calendar")} ${Ba(a)}</div>
    ${a.sub?`<div class="exemplos">${a.sub.join(" · ")}</div>`:""}
    <span class="risco ${a.risco}">${ma(a.risco)}</span>
  </button>`:`<button type="button" class="setor setor--compacto${o?" sel":""}" data-setor="${a.id}" aria-pressed="${o}">
      <span class="setor-ic">${v(a.icone)}</span>
      <span><span class="nome">${a.label}</span><span class="risco ${a.risco}">${ma(a.risco)}</span></span>
    </button>`}function Qa(a){const e=a.semImpacto||a.jornada<=40;let r="";return e?r="a maioria dos negócios do setor já trabalha <strong>40h/semana</strong> — para esses, a PEC não gera custo extra na folha. Só quem passa de 40h precisa escolher entre hora extra e contratação.":r=`com a PEC, cada pessoa que hoje faz 44h deixa de trabalhar <strong>4h por semana</strong> (cerca de 17h/mês). No seu setor, o típico é <strong>+${a.pctFolhaHe??13}% na folha</strong> pagando hora extra ou <strong>+${a.contratacoesPor10??1} ${(a.contratacoesPor10??1)===1?"contratação":"contratações"} a cada 10 pessoas</strong> para operar em 40h. ${a.regime==="6x1"?"Como a maioria trabalha 6 dias por semana, o desafio extra é cobrir as novas folgas sem fechar dias de atendimento. ":""}`,typeof a.pct6x1=="number"&&(r+=`Hoje, <strong>${String(a.pct6x1).replace(".",",")}%</strong> dos empregados do setor estão na escala 6x1 (MTE/2026). `),typeof a.pctNegativa=="number"&&(r+=`Na Pesquisa Pulso (12ª ed.), <strong>${a.pctNegativa}%</strong> dos donos do setor esperam impacto negativo — a média dos pequenos negócios é 38%${a.destaque?`; no detalhe, ${a.destaque}`:""}. `),`<div class="setor-info"><strong>${a.label}:</strong> ${r}<strong>Nos próximos passos você vê isso com os SEUS números.</strong></div>`}function Ua(a){const e=Ra(),r=s.grupos.some(o=>o.pessoas.length);return V`<section class="cartao">
    <h2>Quantos são os <em>funcionários</em> da sua equipe?</h2>
    <p class="sub">Preencha a quantidade e o salário da sua equipe e clique em <strong>Continuar</strong>.</p>
    <div class="lote" id="lote">
      <div>
        <label class="rotulo" for="loteCargo">Cargo (opcional)</label>
        <select id="loteCargo" class="campo">
          <option value="">Sem cargo (Equipe geral)</option>
          ${e.map(o=>`<option value="${o.id}">${o.label}</option>`).join("")}
          <option value="__outro">Outro cargo (digitar)</option>
          <option value="__freela">Freelancers / diárias (sem vínculo CLT)</option>
        </select>
      </div>
      <div id="outroWrap" hidden>
        <label class="rotulo" for="loteOutro">Nome do cargo</label>
        <input id="loteOutro" class="campo" maxlength="24" placeholder="Ex.: Barbeiro" />
      </div>
      <div>
        <label class="rotulo" for="loteQtd">Quantos funcionários</label>
        <div class="stepper">
          <button type="button" id="qtdMenos" aria-label="Diminuir">−</button>
          <input id="loteQtd" type="number" min="1" max="30" value="1" />
          <button type="button" id="qtdMais" aria-label="Aumentar">+</button>
        </div>
      </div>
      <div>
        <label class="rotulo" for="loteSal" id="loteSalLabel">Salário do grupo (opcional)</label>
        <div class="prefixo"><span>R$</span><input id="loteSal" class="campo mono" inputmode="numeric" placeholder="0,00" /></div>
      </div>
      <button type="button" class="btn-lote" id="addGrupo">${v("plus")} Adicionar à equipe</button>
    </div>
    <p class="lote-dica">Monte a equipe em <strong>grupos</strong>: escolha o cargo (opcional), informe quantos e o salário do grupo e clique em Adicionar. Repita para cargos ou salários diferentes (ex.: 5 garçons de R$ 2.000 e 1 nutricionista de R$ 4.000). Depois ajuste o nome e o salário de cada um na lista.</p>
    ${r?Wa():`<div class="equipe-vazia">${v("team")}<p>Sua equipe aparece aqui. Use a barra acima para adicionar o primeiro grupo de funcionários.</p></div>`}
    ${s.erro?`<p class="erro-msg">${s.erro}</p>`:""}
    ${U(!0,"Continuar")}
  </section>`}function Wa(){const a=Ia();return`<div class="lista-grupos-head">
      <span class="lg-titulo">Grupos da equipe</span>
      <button type="button" class="btn-limpar${s.confirmarLimpar?" confirmar":""}" id="limparTodos">
        ${s.confirmarLimpar?v("alert")+" Confirmar remoção?":v("trash")+" Remover todos"}
      </button>
    </div>
    <p class="orientacao-grupos nota-etapa">Preencha o salário de cada funcionário. O nome é opcional e pode ficar em branco.</p>
    ${s.grupos.filter(e=>e.pessoas.length).map(e=>{const r=e.pessoas.reduce((i,l)=>i+(l.salario||0),0),o=e.semVinculo?`${e.pessoas.length} pessoa(s) · ${r>0?"custo de R$ "+N(r)+"/mês":"custo a informar"} · fora da folha (sem vínculo CLT)`:`${e.pessoas.length} pessoa(s) · ${e.pessoas.every(i=>i.salario===e.pessoas[0].salario)?e.pessoas[0].salario?"R$ "+N(e.pessoas[0].salario):"salário a informar":"salários variados"}`;return`<div class="grupo-card">
          <div class="grupo-head">
            <button type="button" class="grupo-toggle" data-toggle="${e.id}">
              ${v("chevron")} <span class="gnome">${e.label}</span>
              <span class="gresumo">${o}</span>
            </button>
            <button type="button" class="btn-x" data-del-grupo="${e.id}" aria-label="Remover o grupo ${e.label}">${v("trash")}</button>
          </div>
          <div class="grupo-corpo">
            <div class="cabecalho-func"><span>Nome (opcional)</span><span>${e.semVinculo?"Custo mensal":"Salário"}</span><span></span></div>
            ${e.pessoas.map((i,l)=>`<div class="func-linha">
                <input class="campo" data-nome="${e.id}:${l}" placeholder="Ex.: João Silva" value="${i.nome||""}" />
                <div class="prefixo"><span>R$</span>
                  <input class="campo mono${i.salario>0?"":" campo-invalido"}" data-sal="${e.id}:${l}" inputmode="numeric" placeholder="0,00" value="${i.salario?N(i.salario):""}" />
                </div>
                <button type="button" class="btn-x" data-del-p="${e.id}:${l}" aria-label="Remover">${v("close")}</button>
              </div>`).join("")}
            <button type="button" class="btn-add" data-add-p="${e.id}">${v("plus")} ${e.semVinculo?"Adicionar freelancer":"Adicionar funcionário"}</button>
          </div>
        </div>`}).join("")}
    <p class="nota-etapa">Dias de trabalho, horário e regime valem por grupo e são ajustados no próximo passo, junto da escala. Precisou de uma exceção para alguém (folga ou horário diferente)? Ajuste na escala do resultado, funcionário por funcionário.</p>
    <p class="total-equipe">Total: <strong>${a}</strong> funcionário(s) em <strong>${s.grupos.filter(e=>e.pessoas.length).length}</strong> grupo(s)</p>`}function Ka(){const a=s.grupos.filter(e=>e.pessoas.length);return V`<section class="cartao">
    <h2>Confira a <em>jornada</em> de cada grupo</h2>
    <p class="sub">Confira regime, dias, duração e turnos de cada grupo e clique em <strong>Continuar</strong>. O adicional noturno é aplicado sozinho, pelo horário do turno.</p>
    ${a.map(Xa).join("")}
    ${s.erro?`<p class="erro-msg">${s.erro}</p>`:""}
    ${U(!0,"Continuar")}
  </section>`}function Xa(a){const e=I(a.inicio,B(a.turnoMin)),r={inicio:a.inicio,fim:e,dias:a.dias,salario:0},o=a.pessoas.length&&!a.semVinculo?X({...r}):0;let i="";!a.semVinculo&&a.pessoas.length&&(o>44?i=`<p class="jornada-real ruim">${v("alert")} Jornada real: <strong>${String(o).replace(".",",")}h/sem</strong>, excede as 44h permitidas hoje. Reveja a duração do turno ou os dias de trabalho.</p>`:o>40?i=`<p class="jornada-real atencao">${v("alert")} Jornada real: <strong>${String(o).replace(".",",")}h/sem</strong>, acima das 40h propostas pela PEC (aparecerá no resultado).</p>`:i=`<p class="jornada-real ok">${v("check")} Jornada real: <strong>${String(o).replace(".",",")}h/sem</strong>, dentro das 40h propostas pela PEC.</p>`);const l=a.semVinculo?Oa:Ha;return`<div class="grupo-card" style="margin-bottom:14px">
    <div class="grupo-head">
      <div class="grupo-toggle" style="cursor:default">
        <span class="gnome">${a.label}</span>
        <span class="gresumo">${a.pessoas.length} pessoa(s) · ${a.inicio}–${e}${a.semVinculo?" · fora da folha":""}</span>
      </div>
    </div>
    <div class="grupo-corpo">
      ${a.semVinculo?"":`<div class="bloco-escala">
        <span class="rotulo-mini">Regime</span>
        <div class="chips-row">
          ${ka.map(c=>`<button type="button" class="chip-reg${a.regime===c.id?" on":""}" data-reg="${a.id}:${c.id}" title="${c.desc}">${c.label}</button>`).join("")}
        </div>
      </div>`}
      <div class="bloco-escala">
        <span class="rotulo-mini">${a.semVinculo?"Dias de cobertura":"Dias de trabalho"}</span>
        <div class="dias-chips">
          ${L.map(c=>`<button type="button" class="chip-dia${a.dias.includes(c.key)?" on":""}" data-dia="${a.id}:${c.key}" aria-pressed="${a.dias.includes(c.key)}">${c.label}</button>`).join("")}
        </div>
      </div>
      <div class="bloco-escala">
        <span class="rotulo-mini">${a.semVinculo?"Horário da cobertura":"Início e duração do turno"}</span>
        <div class="turnos-linha">
          <input type="time" value="${a.inicio}" data-ini="${a.id}" aria-label="Início" />
          <span>até ${e}</span>
        </div>
        <div class="chips-row" style="margin-top:8px">
          ${l.map(c=>{const u=!a.semVinculo&&c/60*(a.dias.length||5)<=40;return`<button type="button" class="chip-turno${a.turnoMin===c?" on":""}${u?" chip-pec":""}" data-turno="${a.id}:${c}">${Na(c)}${u?" · PEC":""}</button>`}).join("")}
        </div>
        ${i}
      </div>
    </div>
  </div>`}function Ya(){const a=new Set;s.grupos.forEach(o=>o.dias.forEach(i=>a.add(i)));const e=L.filter(o=>a.has(o.key)),r=s.faturamento.modo==="diario";return V`<section class="cartao">
    <h2>Quanto o seu negócio <em>fatura</em>?</h2>
    <p class="sub">Preencha por dia da semana ou como média mensal e clique em <strong>Simular</strong>. Com a receita conseguimos avaliar se vale a pena contratar, abrir em cada dia ou mudar a escala. <strong>Esta etapa é opcional.</strong></p>
    <div class="espaco">
      <span class="rotulo">${v("money")} Como você prefere informar?</span>
      <div class="toggle-fat">
        <button type="button" class="${r?"sel":""}" id="fatDiario">
          <div class="t">Por dia da semana</div>
          <div class="d">Para quem vende no balcão e a receita varia por dia</div>
        </button>
        <button type="button" class="${r?"":"sel"}" id="fatMensal">
          <div class="t">Média mensal</div>
          <div class="d">Para mensalidades, contratos e receita recorrente</div>
        </button>
      </div>
      ${r?`<div style="margin-top:16px">
            <span class="rotulo">${v("calendar")} Faturamento diário (Seg a Dom)</span>
            <p class="nota-etapa">Os dias seguem o que você marcou na etapa <strong>Jornada</strong>: sem funcionário escalado, o dia fica fechado e travado em zero. Pode deixar zerado os dias em que não abre.</p>
            <div class="grid-dias-fat">
              ${L.map(o=>{const i=a.has(o.key);return`<div class="dia-fat${i?"":" off"}">
                  <label>${o.label}</label>
                  <div class="prefixo"><span>R$</span>
                    <input class="campo mono" data-fat-dia="${o.key}" ${i?"":"disabled"} value="${i?s.faturamento.diario[o.key]?N(s.faturamento.diario[o.key]):"":"0,00"}" placeholder="0,00" />
                  </div>
                  ${i?"":'<span class="fechado">Fechado, sem equipe</span>'}
                </div>`}).join("")}
            </div>
          </div>`:`<div style="margin-top:16px">
            <span class="rotulo">${v("calendar")} Faturamento mensal médio</span>
            <div class="prefixo" style="max-width:280px"><span>R$</span>
              <input id="fatMensalVal" class="campo mono" placeholder="0,00" value="${s.faturamento.mensal?N(s.faturamento.mensal):""}" />
            </div>
            <p class="nota-etapa">Some tudo que entra num mês típico (vendas, mensalidades, contratos) ou faça a média dos últimos meses. Para a análise, distribuímos esse valor pelos dias em que sua equipe trabalha: <strong>${e.map(o=>o.longo).join(", ")}</strong>.</p>
          </div>`}
      <div class="margem-box">
        <label class="rotulo" for="margem">Margem de contribuição (opcional)</label>
        <div class="prefixo"><input id="margem" class="campo mono" placeholder="0" value="${s.faturamento.margemPct||""}" /><span>%</span></div>
        <p class="nota-etapa">Use 30% como estimativa. Faturar não é o mesmo que lucrar e a margem deixa a análise mais realista.</p>
      </div>
    </div>
    ${s.erro?`<p class="erro-msg">${s.erro}</p>`:""}
    ${U(!0,"Simular")}
  </section>`}function U(a,e){return`<div class="acoes">
    ${s.passo>1?'<button type="button" class="btn ghost" id="voltar">Voltar</button>':"<span></span>"}
    <button type="button" class="btn" id="avancar">${e}</button>
  </div>`}function Za(a){var o;const e=s.resultado;if(!e||e.erro)return`<section class="cartao"><p class="erro-msg">${(e==null?void 0:e.erro)||"Não foi possível simular."}</p>${U(!0,"Voltar")}</section>`;const r=e.jaDentro?"manter":s.caminho;return V`<section class="cartao">
    <p class="eyebrow" style="font-family:var(--mono);font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--acento);font-weight:700">Simulação concluída</p>
    <h2>O que muda na <em>folha</em> da sua empresa</h2>
    <p class="sub">Utilize os resultados para planejar escalas, dimensionar equipes e tomar decisões para a organização do seu negócio.</p>
    <div class="placar">
      <div><span>Funcionários CLT</span><b>${e.n}</b></div>
      <div><span>Jornada média</span><b>${String(e.jornadaMedia).replace(".",",")}h</b></div>
      <div><span>Folha de hoje</span><b>${h(e.folhaHoje)}</b></div>
    </div>
    ${e.jaDentro?ae(e):ee(e,r)}
    ${e.custoFreela>0?`<div class="alerta azul">${v("user")} Além da folha: <strong>${h(e.custoFreela)}/mês</strong> com ${e.nFreelas} freelancer${e.nFreelas>1?"s":""}/diárias, sem vínculo CLT. Esse custo sai da margem, não é afetado pela PEC e fica fora de todos os cálculos acima. Freelancer habitual e subordinado caracteriza vínculo: valide o formato com seu contador.</div>`:""}
    ${(o=e.recomendacao)!=null&&o.mensagem?`<div class="destaque-reco">${v("chart")}<div><div class="rt">O que os números mostram</div><p>${e.recomendacao.mensagem}</p></div></div>`:""}
    ${e.fatMensal>0?se(e,r):""}
    ${re(e,r)}
    ${ie(e)}
    ${ne(e)}
    <div class="exportar">
      <button type="button" class="btn" id="csv">${v("download")} Baixar Excel (CSV)</button>
      <button type="button" class="btn ghost" id="print">${v("download")} Imprimir / PDF</button>
      <button type="button" class="btn ghost" id="refazer">${v("refresh")} Refazer simulação</button>
    </div>
    <p class="aviso-legal">Estimativa educativa. Encargos aproximados de 61,5% sobre o salário (INSS patronal, FGTS, RAT, Sistema S, férias + 1/3, 13º e provisão de rescisão). Hora extra com adicional de 50%. Adicional noturno de 20% quando o turno atravessa 22h–5h. Não substitui parecer contábil nem convenção coletiva.</p>
  </section>`}function ae(a){return`<div class="cenario" style="border-left:6px solid var(--acento)">
    <span class="badge marca">Já dentro da PEC</span>
    <div class="cv">${h(a.folhaHoje)}</div>
    <p class="cx">${a.n} funcionário(s) · jornada média de ${String(a.jornadaMedia).replace(".",",")}h semanais · ${a.horasEquipe}h de equipe por semana</p>
    <p class="cx">Sua equipe já trabalha dentro de 40h por semana, então a PEC 221 não impacta a escala que você tem hoje nem a sua folha: seu negócio já se enquadra na proposta.</p>
  </div>`}function ee(a,e){const r=a.novasContratacoes;return`<div class="comparador">
    <p class="intro-cenarios">Escolha um caminho e compare com a sua folha de hoje:</p>
    <div class="seletor-caminho" role="tablist" aria-label="Caminhos de adaptação">
      <button type="button" class="cam${e==="manter"?" on":""}" data-cam="manter">Manter a equipe (sem contratar)</button>
      <button type="button" class="cam${e==="contratar"?" on":""}" data-cam="contratar">${r>0?`Contratar +${r} pessoa${r>1?"s":""} (reposição integral)`:"Operar em 40h sem hora extra"}</button>
      <button type="button" class="cam${e==="free"?" on":""}" data-cam="free">Cobrir com freelancers (diárias)</button>
    </div>
    <div class="grid-comparativo">
      <div class="cenario">
        <div class="badges"><span class="badge cinza">Como sua folha está hoje</span></div>
        <div class="cv">${h(a.folhaHoje)}</div>
        <p class="cx"><strong>${a.n}</strong> funcionário(s) · jornada média de ${String(a.jornadaMedia).replace(".",",")}h semanais · ${a.horasEquipe}h de equipe por semana</p>
        ${a.jornadaMedia>40?'<p class="cx cx-mini">Jornada acima de 40h deixa de ser permitida quando a PEC vigorar.</p>':""}
      </div>
      ${oe(a,e)}
    </div>
  </div>`}function oe(a,e){return e==="free"?`<div class="cenario painel-caminho">
      <div class="badges"><span class="badge marca">Como deve ficar · com freelancers</span></div>
      <div class="cv">${h(a.folhaHoje+a.diarias)} <span class="cv-tag">folha + diárias</span></div>
      <p class="cx"><strong>${h(a.folhaHoje)} de folha mantida</strong> + cerca de <strong>${h(a.diarias)}/mês em diárias</strong>, fora da folha: sai da margem de lucro, sem novas contratações e sem hora extra.</p>
      <p class="cx cx-mini">Estimativa pela hora avulsa, cerca de 2x a hora contratada, sem encargos.</p>
      <p class="cx cx-mini">Freelancer com trabalho habitual e subordinado caracteriza vínculo empregatício. Use para picos e valide o formato com seu contador.</p>
    </div>`:e==="manter"?`<div class="cenario painel-caminho">
      <div class="badges"><span class="badge marca">Como deve ficar · mantendo a equipe</span></div>
      <div class="cv">${h(a.folhaHe)} <span class="cv-tag">pagando hora extra</span></div>
      <p class="cx">+${a.pctHe}% (+${h(a.deltaHe)}/mês) · <strong>${String(a.heMesMedia).replace(".",",")}h extras/mês</strong> por pessoa, com a capacidade de hoje mantida.</p>
      <p class="cx cx-mini">O custo varia mês a mês e pesa no descanso da equipe. Teto legal: 2h extras por dia.</p>
      <p class="cx cx-alt"><strong>Ou absorvendo sem hora extra:</strong> a folha fica nos ${h(a.folhaHoje)} de hoje, mas ${a.quedaCapacidade>0?`as horas da equipe caem de ${a.horasEquipe}h para ${a.horasEquipe40}h por semana (−${a.quedaCapacidade}% de capacidade)`:"a capacidade fica no limite"} e pode faltar gente nos horários de pico.</p>
    </div>`:`<div class="cenario painel-caminho">
    <div class="badges"><span class="badge marca">Como deve ficar · ${a.novasContratacoes>0?`contratando +${a.novasContratacoes}`:"operando em 40h"}</span></div>
    <div class="cv">${h(a.folhaContrata)}</div>
    <p class="cx">+${a.pctContrata}% (+${h(a.deltaContrata)}/mês)${a.novasContratacoes>0?` · custo do novo contratado: <strong>${h(a.custoNovo)}/mês</strong>`:""}.</p>
    <p class="cx"><strong>${a.n+a.novasContratacoes}</strong> pessoa${a.n+a.novasContratacoes>1?"s":""} · 40h semanais cada · as mesmas ${a.horasEquipe}h de operação de hoje.</p>
    <p class="cx cx-mini">Custo fixo e previsível, sem hora extra.</p>
  </div>`}function se(a,e){const r=e==="manter"?a.deltaHe:e==="contratar"?a.deltaContrata:a.diarias,o=a.fatMensal>0?Math.round(r/a.fatMensal*1e3)/10:0,i=a.margem>0?r<=a.margem:null;return`<div class="fat-analise">
    <div class="rt">Em relação ao faturamento</div>
    <p>O caminho escolhido adiciona cerca de <strong>${h(r)}/mês</strong> (${String(o).replace(".",",")}% do faturamento informado de ${h(a.fatMensal)})${a.margemPct?i?`. Com margem de ${a.margemPct}%, o extra cabe na margem de ${h(a.margem)}.`:`. Com margem de ${a.margemPct}%, o extra supera a margem de ${h(a.margem)} (a margem não cobre o custo).`:"."}</p>
  </div>`}function re(a,e){const r=e==="manter"?"manter a equipe com hora extra":e==="free"?"cobrir com freelancers (diárias)":"contratar para operar em 40h",o=e==="manter"?"Com hora extra":e==="free"?"Com diárias":"Contratando";return`<div class="secao">
    <h3>${v("team")} Impacto por grupo</h3>
    <p class="s-sub">Como cada grupo da sua equipe pesa no caminho selecionado acima: <strong>${r}</strong>. Troque a seleção para comparar o outro caminho.</p>
    ${a.porGrupo.map(i=>{const l=i.semVinculo?i.diarias:e==="manter"?i.he:e==="free"?i.atual+i.diarias:i.contrata;return`<div class="gi-card">
          <div class="gi-head">
            <span class="gi-nome">${i.nome}</span>
            <span class="gi-sub">${i.n} × ${h(i.salMedioG)} · ${i.regime}${i.semVinculo?" · fora da folha":""}</span>
          </div>
          ${s.individual&&!i.semVinculo?te(i,e,o):`<div class="gi-duplo">
                  <div class="gi-box"><div class="gi-label">Hoje</div><div class="gi-val">${h(i.atual)}</div></div>
                  <div class="gi-box gi-box--depois"><div class="gi-label">${o}</div><div class="gi-val">${h(l)}</div></div>
                </div>`}
        </div>`}).join("")}
    ${s.individual?`<button type="button" class="link-individual" id="toggleInd">${v("eye")} Ocultar o impacto individual</button>
           <p class="nota-etapa">${v("lock")} Detalhamento individual visível só para você. Nada é armazenado.</p>`:`<button type="button" class="link-individual" id="toggleInd">${v("eye")} Ver o impacto individual por funcionário</button>
           <p class="nota-etapa">${v("lock")} Ao exibir, você declara que os dados informados são de sua responsabilidade como empregador(a) e autoriza o uso somente para esta simulação. O detalhamento aparece só para você e não é armazenado.</p>`}
  </div>`}function te(a,e,r){return`<table class="gi-tab">
    <thead><tr><th>Funcionário</th><th>Hoje</th><th>${r}</th></tr></thead>
    <tbody>
      ${a.pessoas.map(o=>`<tr><th>${o.nome}</th><td>${h(o.atual)}</td><td>${h(e==="manter"?o.he:o.atual)}</td></tr>`).join("")}
      ${e==="contratar"&&a.extras>0?Array.from({length:a.extras},(o,i)=>{const l=Math.round(Math.max(0,a.contrata-a.atual)/a.extras);return`<tr class="linha-nova"><th>Novo contratado${a.extras>1?" "+(i+1):""}</th><td class="ln-vazio">não está na equipe hoje</td><td>${h(l)}</td></tr>`}).join(""):""}
    </tbody>
    <tfoot><tr><th>Total do grupo</th><td>${h(a.atual)}</td><td>${h(e==="manter"?a.he:e==="free"?a.atual+a.diarias:a.contrata)}</td></tr></tfoot>
  </table>`}function ie(a){const e=a.breakdown;return`<div class="colapsavel">
    <button type="button" class="colapsavel-btn" id="toggleBd">Como chegamos neste valor? ${v("chevron")}</button>
    <div class="colapsavel-corpo" id="bdCorpo" hidden>
      <table class="breakdown">
        <thead><tr><th>Item</th><th>Valor médio por funcionário</th></tr></thead>
        <tbody>
          <tr><td>Salário base (médio)</td><td>${h(e.salario_base)}</td></tr>
          ${e.adicional_noturno>0?`<tr><td>Adicional noturno (20%)</td><td>${h(e.adicional_noturno)}</td></tr>`:""}
          <tr><td>Contribuição do patrão ao INSS (20%)</td><td>${h(e.encargos.inss)}</td></tr>
          <tr><td>FGTS (8%)</td><td>${h(e.encargos.fgts)}</td></tr>
          <tr><td>RAT + Sistema S (cerca de 7,8%)</td><td>${h(e.encargos.rat+e.encargos.terceiros)}</td></tr>
          <tr><td>Férias + 1/3 constitucional</td><td>${h(e.provisoes.ferias)}</td></tr>
          <tr><td>13º salário</td><td>${h(e.provisoes.decimo_terceiro)}</td></tr>
          <tr><td>Provisão para rescisão (estimativa)</td><td>${h(e.provisoes.aviso_previo)}</td></tr>
        </tbody>
      </table>
      <p class="nota-etapa">O fator 1,615 consolida encargos e provisões sobre o salário. É uma média nacional para ME/EPP; o RAT e o Sistema S variam por CNAE.</p>
    </div>
  </div>`}function ne(a){return`<div class="secao">
    <h3>${v("calendar")} Escala semanal sugerida</h3>
    <p class="s-sub">Montada com os dias, turnos e horários que você definiu no passo Jornada.</p>
    <div class="quadro">
      <table class="escala">
        <thead>
          <tr>
            <th class="nome">Pessoa</th>
            ${L.map(e=>`<th class="${e.key==="dom"?"dom":""}">${e.label}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${a.escala.map(e=>`<tr>
              <td class="nome">${e.nome}${e.semVinculo?' <span class="freela">diária</span>':""}</td>
              ${L.map(r=>{const o=e.celulas[r.key];return!o||o.tipo==="folga"?`<td class="F${r.key==="dom"?" dom":""}">Folga</td>`:`<td class="T${r.key==="dom"?" dom":""}">${o.inicio}–${o.fim}</td>`}).join("")}
            </tr>`).join("")}
        </tbody>
      </table>
    </div>
  </div>`}function ce(){var r,o,i,l,c,u,x,S,C,$,w,A,E,W,J;p.querySelectorAll("[data-goto]").forEach(n=>n.addEventListener("click",()=>{s.passo=Number(n.dataset.goto),s.erro="",g()})),p.querySelectorAll("[data-setor]").forEach(n=>n.addEventListener("click",()=>{const f=n.dataset.setor;s.setorId!==f&&(s.setorId=f,s.grupos=[]),s.erro="",g()}));const a=p.querySelector("#loteCargo");a&&a.addEventListener("change",()=>{const n=p.querySelector("#outroWrap"),f=p.querySelector("#loteSalLabel");n&&(n.hidden=a.value!=="__outro"),f&&(f.textContent=a.value==="__freela"?"Custo mensal (aqui ou na lista)":"Salário do grupo (opcional)");const b=p.querySelector("#lote");b&&b.classList.toggle("lote--outro",a.value==="__outro")});const e=p.querySelector("#loteQtd");(r=p.querySelector("#qtdMenos"))==null||r.addEventListener("click",()=>{e.value=Math.max(1,Number(e.value)-1)}),(o=p.querySelector("#qtdMais"))==null||o.addEventListener("click",()=>{e.value=Math.min(30,Number(e.value)+1)}),(i=p.querySelector("#addGrupo"))==null||i.addEventListener("click",le),p.querySelectorAll("[data-nome]").forEach(n=>{n.addEventListener("change",()=>{const[f,b]=n.dataset.nome.split(":"),m=s.grupos.find(M=>M.id===f);m&&(m.pessoas[Number(b)].nome=n.value)})}),p.querySelectorAll("[data-sal]").forEach(n=>{n.addEventListener("blur",()=>{const[f,b]=n.dataset.sal.split(":"),m=s.grupos.find(j=>j.id===f);if(!m)return;const M=D(n.value);m.pessoas[Number(b)].salario=M,n.value=M?N(M):"",n.classList.toggle("campo-invalido",!(M>0))})}),p.querySelectorAll("[data-del-p]").forEach(n=>n.addEventListener("click",()=>{const[f,b]=n.dataset.delP.split(":"),m=s.grupos.find(M=>M.id===f);m&&(m.pessoas.splice(Number(b),1),m.pessoas.length||(s.grupos=s.grupos.filter(M=>M.id!==f)),g())})),p.querySelectorAll("[data-add-p]").forEach(n=>n.addEventListener("click",()=>{const f=s.grupos.find(b=>b.id===n.dataset.addP);f&&(f.pessoas.push({nome:"",salario:0}),g())})),p.querySelectorAll("[data-del-grupo]").forEach(n=>n.addEventListener("click",()=>{s.grupos=s.grupos.filter(f=>f.id!==n.dataset.delGrupo),g()})),(l=p.querySelector("#limparTodos"))==null||l.addEventListener("click",()=>{if(!s.confirmarLimpar){s.confirmarLimpar=!0,g(),setTimeout(()=>{s.confirmarLimpar=!1,g()},4e3);return}s.grupos=[],s.confirmarLimpar=!1,g()}),p.querySelectorAll("[data-reg]").forEach(n=>n.addEventListener("click",()=>{const[f,b]=n.dataset.reg.split(":"),m=s.grupos.find(M=>M.id===f);m&&(m.regime=b,m.dias=fa(b),m.turnoMin=ga[b]||m.turnoMin,g())})),p.querySelectorAll("[data-dia]").forEach(n=>n.addEventListener("click",()=>{const[f,b]=n.dataset.dia.split(":"),m=s.grupos.find(j=>j.id===f);if(!m)return;const M=m.dias.includes(b);if(M&&m.dias.length<=1){G("O grupo precisa de pelo menos um dia de trabalho na semana.");return}m.dias=M?m.dias.filter(j=>j!==b):[...m.dias,b],m.dias=L.map(j=>j.key).filter(j=>m.dias.includes(j)),g()})),p.querySelectorAll("[data-turno]").forEach(n=>n.addEventListener("click",()=>{const[f,b]=n.dataset.turno.split(":"),m=s.grupos.find(M=>M.id===f);m&&(m.turnoMin=Number(b),g())})),p.querySelectorAll("[data-ini]").forEach(n=>n.addEventListener("change",()=>{const f=s.grupos.find(b=>b.id===n.dataset.ini);f&&n.value&&(f.inicio=n.value,g())})),(c=p.querySelector("#fatDiario"))==null||c.addEventListener("click",()=>{s.faturamento.modo="diario",g()}),(u=p.querySelector("#fatMensal"))==null||u.addEventListener("click",()=>{s.faturamento.modo="mensal",g()}),(x=p.querySelector("#fatMensalVal"))==null||x.addEventListener("blur",n=>{s.faturamento.mensal=D(n.target.value),n.target.value=s.faturamento.mensal?N(s.faturamento.mensal):""}),p.querySelectorAll("[data-fat-dia]").forEach(n=>n.addEventListener("blur",()=>{s.faturamento.diario[n.dataset.fatDia]=D(n.value),n.value=s.faturamento.diario[n.dataset.fatDia]?N(s.faturamento.diario[n.dataset.fatDia]):""})),(S=p.querySelector("#margem"))==null||S.addEventListener("blur",n=>{s.faturamento.margemPct=Math.max(0,Math.min(100,Number(String(n.target.value).replace(",","."))||0))}),p.querySelectorAll("[data-cam]").forEach(n=>n.addEventListener("click",()=>{s.caminho=n.dataset.cam,g()})),(C=p.querySelector("#toggleInd"))==null||C.addEventListener("click",()=>{s.individual=!s.individual,g()}),($=p.querySelector("#toggleBd"))==null||$.addEventListener("click",()=>{const n=p.querySelector("#bdCorpo");n&&(n.hidden=!n.hidden)}),(w=p.querySelector("#csv"))==null||w.addEventListener("click",ue),(A=p.querySelector("#print"))==null||A.addEventListener("click",()=>window.print()),(E=p.querySelector("#refazer"))==null||E.addEventListener("click",()=>{s.passo=1,s.resultado=null,s.erro="",window.scrollTo({top:0,behavior:"smooth"}),g()}),(W=p.querySelector("#voltar"))==null||W.addEventListener("click",()=>{s.passo=Math.max(1,s.passo-1),s.erro="",g()}),(J=p.querySelector("#avancar"))==null||J.addEventListener("click",de)}function le(){var C,$,w,A;const a=((C=p.querySelector("#loteCargo"))==null?void 0:C.value)||"",e=((($=p.querySelector("#loteOutro"))==null?void 0:$.value)||"").trim().slice(0,24),r=Math.min(30,Math.max(1,Math.round(Number((w=p.querySelector("#loteQtd"))==null?void 0:w.value)||1))),o=D(((A=p.querySelector("#loteSal"))==null?void 0:A.value)||""),i=Z(),l=(i==null?void 0:i.regime)||"6x1",c=a==="__freela",u=!c&&a&&a!=="__outro"?va.find(E=>E.id===a):null,x=c?"Freelancers (diárias)":u?u.label:e||"Equipe geral";let S=s.grupos.find(E=>E.label===x&&!!E.semVinculo===c);S||(S=_a(l,{label:x,cargoId:(u==null?void 0:u.id)||"",regime:(u==null?void 0:u.regime)||l,turnoMin:c?240:u==null?void 0:u.turnoMin,inicio:u!=null&&u.noturno?"22:00":c?"18:00":"08:00",dias:u==null?void 0:u.dias,semVinculo:c}),s.grupos.push(S));for(let E=0;E<r;E++)S.pessoas.push({nome:"",salario:o});c?G(`${r} freelancer(s) adicionados. O custo mensal informado fica fora da folha e não entra no cálculo da PEC.`):o>0?G(`${r} funcionário(s) adicionados ao grupo ${x} com salário de R$ ${N(o)}.`):G(`${r} funcionário(s) adicionados ao grupo ${x}. Informe o salário de cada um na lista.`),g()}function de(){if(s.erro="",s.passo===1){if(!s.setorId){s.erro="Escolha o setor antes de avançar.",g();return}s.passo=2,g();return}if(s.passo===2){const a=s.grupos.flatMap(e=>e.pessoas.map(r=>({...r,sem:e.semVinculo})));if(!a.length){s.erro="Complete a equipe antes de avançar: todo funcionário precisa de salário — e cada freelancer, do custo mensal da diária.",g();return}if(a.some(e=>!(e.salario>0))){s.erro="Complete a equipe antes de avançar: todo funcionário precisa de salário — e cada freelancer, do custo mensal da diária.",g();return}if(!s.grupos.some(e=>!e.semVinculo&&e.pessoas.length)){s.erro="Inclua ao menos um funcionário com vínculo CLT: grupos de diárias/freelancers ficam fora do cálculo da PEC.",g();return}s.passo=3,g();return}if(s.passo===3){s.passo=4,g();return}if(s.passo===4){const a=p.querySelector("#fatMensalVal");a&&(s.faturamento.mensal=D(a.value));const e=p.querySelector("#margem");e&&(s.faturamento.margemPct=Math.max(0,Math.min(100,Number(String(e.value).replace(",","."))||0))),p.querySelectorAll("[data-fat-dia]").forEach(o=>{s.faturamento.diario[o.dataset.fatDia]=D(o.value)});const r=Ta(s);if(r.erro){s.erro=r.erro,g();return}s.resultado=r,s.caminho=r.jaDentro?"manter":r.novasContratacoes>0?"contratar":"manter",s.passo=5,window.scrollTo({top:0,behavior:"smooth"}),g()}}function ue(){var l;const a=s.resultado;if(!a)return;const r=[["Coelho de Souza Advogados — Simulação do fim da escala 6x1"],["Setor",((l=Z())==null?void 0:l.label)||""],["Funcionários CLT",a.n],["Jornada média (h)",String(a.jornadaMedia).replace(".",",")],["Folha hoje (R$)",a.folhaHoje],["Folha com hora extra (R$)",a.folhaHe],["Folha contratando (R$)",a.folhaContrata],["Novas contratações",a.novasContratacoes],["Diárias estimadas (R$)",a.diarias],[],["Escala semanal"],["Pessoa",...L.map(c=>c.longo)],...a.escala.map(c=>[c.nome,...L.map(u=>{const x=c.celulas[u.key];return!x||x.tipo==="folga"?"Folga":`${x.inicio}-${x.fim}`})])].map(c=>c.map(u=>`"${String(u).replace(/"/g,'""')}"`).join(";")).join(`
`),o=new Blob(["\uFEFF"+r],{type:"text/csv;charset=utf-8"}),i=document.createElement("a");i.href=URL.createObjectURL(o),i.download="simulacao-coelho-de-souza.csv",i.click()}g();
