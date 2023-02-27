import{h as y,_ as V,e as S,i as n,o as c,c as _,a as e,F as x,j as N,u as t,f as b,g as I,T as F,t as l,n as h,k as B,l as T,p as $,d as z}from"./index-138fba1c.js";import{_ as D,a as L}from"./testi-icon-9acccb88.js";import{F as j}from"./FooterSection-fd966ff5.js";const A=y("newbieStore",{state:()=>({info:{levelID:1,title:"УРОВЕНЬ 1.0. Ты - Юный Падаван",subtitle:"Данный уровень для новеньких сотрудников торговой команды (менее 6 мес. в Компании)",description:`Мы рады приветствовать тебя в рядах Торговой Команды! Тебя ждет познавательный обучающий путь,
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
                    
 2. Закрепи свои знания в полях с Супервайзером`,link:"#",test:{id:4,btnColor:"red",title:"7 ШАГОВ ВИЗИТА",link:"#"}}]})});const p=d=>($("data-v-5a291788"),d=d(),z(),d),E={class:"courses"},G={class:"courses__container"},M={class:"courses__route-box"},R={class:"courses__route"},U={class:"item__title"},W={class:"item__row"},q={class:"item__outer-circle-video"},H=["onClick"],J=p(()=>e("img",{class:"play-icon",src:D,alt:""},null,-1)),K=[J],O=p(()=>e("div",{class:"item__line"},null,-1)),Q={class:"item__outer-circle-video"},X=["onClick"],Y=p(()=>e("img",{class:"test-icon",src:L,alt:""},null,-1)),Z=[Y],P=["id"],ee={style:{display:"none"}},te={class:"courses__card card"},se={class:"card__title"},oe={style:{"white-space":"pre-line"},class:"card__text"},ie=["href"],ne={__name:"CoursesNewbie",setup(d){S(()=>{window.scrollTo(0,0)});const k=A(),f={title:n(""),desc:n(`Мы рады приветствовать тебя в рядах Торговой Команды! 

Тебя ждет познавательный обучающий путь, где ты приобретешь ценные знания и опыт в продажах. 

Ниже описание ступеней, которые помогут тебе стать эффективным сотрудником`),btnColor:n(""),hasVideo:n(!1),link:n("")};let{title:i,desc:a,btnColor:r,hasVideo:v,link:m}=f,u=n(0);function w(s){return s[0].toUpperCase()+s.slice(1).toLowerCase()}function C(s){i.value=w(s.title),a.value=s.description,r.value=s.btnColor,v.value=s.hasVideo,m.value=s.link,u.value++}return(s,le)=>(c(),_("div",null,[e("div",E,[e("div",G,[e("div",M,[e("ul",R,[(c(!0),_(x,null,N(t(k).lectures,o=>(c(),_("li",{key:o.id,class:"courses__item item"},[e("div",U,l(o.id)+". "+l(o.title),1),e("div",W,[e("div",q,[e("div",{class:h(["item__inner-circle-video",[o.btnColor]]),onClick:g=>C(o)},K,10,H)]),O,e("div",Q,[e("div",{class:h(["item__inner-circle-video",[o.test.btnColor]]),onClick:g=>C(o.test)},Z,10,X)])]),e("div",{id:`endline-${o.id}`,class:"item__endline"},null,8,P)]))),128))])]),b(F,{name:"slide",mode:"out-in"},{default:I(()=>[(c(),_("div",{key:t(u),class:"courses__card-box"},[e("div",ee,l(t(u)),1),e("div",te,[e("div",se,l((t(i)==="Основы дпшм"?B(i)?i.value="Основы ДПШМ":i="Основы ДПШМ":t(i))?t(i):"Добро пожаловать!"),1),e("div",oe,l(t(a)?t(a):"Время проходить тесты!"),1),t(r)?(c(),_("a",{key:0,href:t(m),class:h(["card__button",[t(r)]])},l(t(a)?t(v)?"Посмотреть видео":"Скачать документы":"Перейти в тест"),11,ie)):T("",!0)])]))]),_:1})])]),b(j)]))}},ae=V(ne,[["__scopeId","data-v-5a291788"]]);export{ae as default};
