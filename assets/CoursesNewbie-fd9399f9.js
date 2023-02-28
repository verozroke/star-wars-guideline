import{h as g,_ as V,e as y,i as n,o as d,c,a as e,F as x,j as S,u as t,f as N,g as I,T as B,t as l,n as a,k as T,l as $,p as z,d as D}from"./index-479b18af.js";import{_ as F,a as L}from"./testi-icon-9acccb88.js";const j=g("newbieStore",{state:()=>({info:{levelID:1,title:"УРОВЕНЬ 1.0. Ты - Юный Падаван",subtitle:"Данный уровень для новеньких сотрудников торговой команды (менее 6 мес. в Компании)",description:`Мы рады приветствовать тебя в рядах Торговой Команды! Тебя ждет познавательный обучающий путь,
            где ты приобретешь ценные знания и опыт в продажах. Ниже описание ступеней, которые помогут тебе
            стать эффективным сотрудником`},lectures:[{id:1,btnColor:"green",title:"ЗНАКОМСТВО С КОМПАНИЕЙ",hasVideo:!1,description:`После прохождения тобой первой недели адаптации c Супервайзером, закрепи материалы ниже: 
                    
 1. Welcome видео о Компании ACC 
                    
 2. История компании P&G 
                    
 3. Основные понятия в работе`,link:"https://www.duolingo.com/learn",test:{id:1,btnColor:"red",title:"ЗНАКОМСТВО С КОМПАНИЕЙ",link:"#"}},{id:2,btnColor:"green",title:"ТОРГОВЫЕ УСЛОВИЯ",hasVideo:!1,description:`Изучи документы совместно с Супервайзером: 
                    
 1. Квалификация ТТ
                    
 2. Торговые Условия
                    
 3. Программа «Золотой Продавец»
                    `,link:"",test:{id:2,btnColor:"red",title:"ТОРГОВЫЕ УСЛОВИЯ",link:"#"}},{id:3,btnColor:"green",title:"ОСНОВЫ ДПШМ",hasVideo:!0,description:`
                    1. Посмотри видео презентацию "Основы и принципы ДПМШ"
                    
 2. Закрепи свои знания в полях с Супервайзером
                    `,link:"#",test:{id:3,btnColor:"red",title:"ОСНОВЫ ДПШМ",link:"#"}},{id:4,btnColor:"green",title:"7 ШАГОВ ВИЗИТА",hasVideo:!0,description:`
                    1. Посмотри видео презентацию "7 Шагов Визита"
                    
 2. Закрепи свои знания в полях с Супервайзером`,link:"#",test:{id:4,btnColor:"red",title:"7 ШАГОВ ВИЗИТА",link:"#"}},{id:5,btnColor:"green",title:"АТТЕСТАЦИЯ",description:"Пройди аттестацию!",hasVideo:!1,link:"#",test:{id:5,btnColor:"red",title:"АТТЕСТАЦИЯ",link:"#"}}]})});const b=_=>(z("data-v-aa8477d1"),_=_(),D(),_),A={class:"courses"},E={class:"courses__container"},G={class:"courses__route-box"},M={class:"courses__route"},R={class:"item__title"},U={class:"item__row"},W=["onClick"],q=b(()=>e("img",{class:"play-icon",src:F,alt:""},null,-1)),H=[q],J={class:"item__outer-circle-video"},K=["onClick"],O=b(()=>e("img",{class:"test-icon",src:L,alt:""},null,-1)),Q=[O],X=["id"],Y={style:{display:"none"}},Z={class:"courses__card card"},P={class:"card__title"},ee={style:{"white-space":"pre-line"},class:"card__text"},te=["href"],se={__name:"CoursesNewbie",setup(_){y(()=>{window.scrollTo(0,0)});const m=j(),k={title:n(""),desc:n(`Мы рады приветствовать тебя в рядах Торговой Команды! 

Тебя ждет познавательный обучающий путь, где ты приобретешь ценные знания и опыт в продажах. 

Ниже описание ступеней, которые помогут тебе стать эффективным сотрудником`),btnColor:n(""),hasVideo:n(!1),link:n("")};let{title:o,desc:r,btnColor:u,hasVideo:p,link:v}=k,h=n(0);function f(i){return i[0].toUpperCase()+i.slice(1).toLowerCase()}function C(i){o.value=f(i.title),r.value=i.description,u.value=i.btnColor,p.value=i.hasVideo,v.value=i.link,h.value++}return(i,ie)=>(d(),c("div",null,[e("div",A,[e("div",E,[e("div",G,[e("ul",M,[(d(!0),c(x,null,S(t(m).lectures,s=>(d(),c("li",{key:s.id,class:"courses__item item"},[e("div",R,l(s.id)+". "+l(s.title),1),e("div",U,[e("div",{class:a(["item__outer-circle-video",{hidden:s.title==="АТТЕСТАЦИЯ"}])},[e("div",{class:a(["item__inner-circle-video",[s.btnColor]]),onClick:w=>C(s)},H,10,W)],2),e("div",{class:a(["item__line",{hidden:s.title==="АТТЕСТАЦИЯ"}])},null,2),e("div",J,[e("div",{class:a(["item__inner-circle-video",[s.test.btnColor]]),onClick:w=>C(s.test)},Q,10,K)])]),e("div",{id:`endline-${s.id}`,class:"item__endline"},null,8,X)]))),128))])]),N(B,{name:"slide",mode:"out-in"},{default:I(()=>[(d(),c("div",{key:t(h),class:"courses__card-box"},[e("div",Y,l(t(h)),1),e("div",Z,[e("div",P,l((t(o)==="Основы дпшм"?T(o)?o.value="Основы ДПШМ":o="Основы ДПШМ":t(o))?t(o):"Добро пожаловать!"),1),e("div",ee,l(t(r)?t(r):"Время проходить тесты!"),1),t(u)?(d(),c("a",{key:0,target:"_blank",href:t(v),class:a(["card__button",[t(u)]])},l(t(r)?t(p)?"Посмотреть видео":"Скачать документы":"Перейти в тест"),11,te)):$("",!0)])]))]),_:1})])])]))}},le=V(se,[["__scopeId","data-v-aa8477d1"]]);export{le as default};
