import{h as y,_ as S,e as x,i as n,o as d,c,a as e,F as N,j as I,u as t,f as B,g as T,T as $,t as l,n as a,k as z,l as D,p as F,d as L}from"./index-72d79487.js";import{_ as W,a as j}from"./testi-icon-9acccb88.js";const A=y("newbieStore",{state:()=>({info:{levelID:1,title:"УРОВЕНЬ 1.0. Ты - Юный Падаван",subtitle:"Данный уровень для новеньких сотрудников торговой команды (менее 6 мес. в Компании)",description:`Мы рады приветствовать тебя в рядах Торговой Команды! Тебя ждет познавательный обучающий путь,
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
                    
 2. Закрепи свои знания в полях с Супервайзером`,link:"#",test:{id:4,btnColor:"red",title:"7 ШАГОВ ВИЗИТА",link:"#"}},{id:5,btnColor:"green",title:"АТТЕСТАЦИЯ",description:"Пройди аттестацию!",hasVideo:!1,link:"#",test:{id:5,btnColor:"red",title:"АТТЕСТАЦИЯ",link:"#"}}]})});const p=_=>(F("data-v-759a5e37"),_=_(),L(),_),E={class:"courses"},G={class:"courses__container"},M={class:"courses__route-box"},R={class:"courses__route"},U={class:"item__title"},q={class:"item__row"},H=["onClick"],J=p(()=>e("img",{class:"play-icon",src:W,alt:""},null,-1)),K=[J],O={class:"item__outer-circle-video"},Q=["onClick"],X=p(()=>e("img",{class:"test-icon",src:j,alt:""},null,-1)),Y=[X],Z=["id"],P={style:{display:"none"}},ee={class:"courses__card card"},te={class:"card__title"},se={style:{"white-space":"pre-line"},class:"card__text"},ie=["href"],oe=p(()=>e("div",{class:"blocker"}," contents ",-1)),ne={__name:"CoursesNewbie",setup(_){x(()=>{window.scrollTo(0,0)});const m=A(),k={title:n(""),desc:n(`Мы рады приветствовать тебя в рядах Торговой Команды! 

Тебя ждет познавательный обучающий путь, где ты приобретешь ценные знания и опыт в продажах. 

Ниже описание ступеней, которые помогут тебе стать эффективным сотрудником`),btnColor:n(""),hasVideo:n(!1),link:n("")};let{title:o,desc:r,btnColor:u,hasVideo:v,link:C}=k,h=n(0);function f(s){return s[0].toUpperCase()+s.slice(1).toLowerCase()}function b(s){window.screen.width>1e3?w(s):g()}function w(s){o.value=f(s.title),r.value=s.description,u.value=s.btnColor,v.value=s.hasVideo,C.value=s.link,h.value++}function g(s){console.log("opened")}return(s,le)=>(d(),c("div",null,[e("div",E,[e("div",G,[e("div",M,[e("ul",R,[(d(!0),c(N,null,I(t(m).lectures,i=>(d(),c("li",{key:i.id,class:"courses__item item"},[e("div",U,l(i.id)+". "+l(i.title),1),e("div",q,[e("div",{class:a(["item__outer-circle-video",{hidden:i.title==="АТТЕСТАЦИЯ"}])},[e("div",{class:a(["item__inner-circle-video",[i.btnColor]]),onClick:V=>b(i)},K,10,H)],2),e("div",{class:a(["item__line",{hidden:i.title==="АТТЕСТАЦИЯ"}])},null,2),e("div",O,[e("div",{class:a(["item__inner-circle-video",[i.test.btnColor]]),onClick:V=>b(i.test)},Y,10,Q)])]),e("div",{id:`endline-${i.id}`,class:"item__endline"},null,8,Z)]))),128))])]),B($,{name:"slide",mode:"out-in"},{default:T(()=>[(d(),c("div",{key:t(h),class:"courses__card-box"},[e("div",P,l(t(h)),1),e("div",ee,[e("div",te,l((t(o)==="Основы дпшм"?z(o)?o.value="Основы ДПШМ":o="Основы ДПШМ":t(o))?t(o):"Добро пожаловать!"),1),e("div",se,l(t(r)?t(r):"Время проходить тесты!"),1),t(u)?(d(),c("a",{key:0,target:"_blank",href:t(C),class:a(["card__button",[t(u)]])},l(t(r)?t(v)?"Посмотреть видео":"Скачать документы":"Перейти в тест"),11,ie)):D("",!0)])]))]),_:1}),oe])])]))}},ae=S(ne,[["__scopeId","data-v-759a5e37"]]);export{ae as default};
