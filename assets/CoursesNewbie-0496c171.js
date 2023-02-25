import{h as y,_ as V,i as o,o as l,c,a as e,F as S,j as x,u as t,f as b,g as N,T as I,t as n,n as h,k as F,p as B,b as $}from"./index-9426cbf6.js";import{_ as z,a as D}from"./testi-icon-9acccb88.js";import{F as L}from"./FooterSection-6430a54f.js";const T=y("newbieStore",{state:()=>({info:{levelID:1,title:"УРОВЕНЬ 1.0. Ты - Юный Падаван",subtitle:"Данный уровень для новых сотрудников торговой команды",description:`Мы рады приветствовать тебя в рядах Торговой Команды! Тебя ждет познавательный обучающий путь,
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
                    
 2. Закрепи свои знания в полях с Супервайзером`,link:"#",test:{id:4,btnColor:"red",title:"7 ШАГОВ ВИЗИТА",link:"#"}}]})});const p=_=>(B("data-v-fa3e4070"),_=_(),$(),_),j={class:"courses"},A={class:"courses__container"},E={class:"courses__route-box"},G={class:"courses__route"},U={class:"item__title"},W={class:"item__row"},q={class:"item__outer-circle-video"},H=["onClick"],J=p(()=>e("img",{class:"play-icon",src:z,alt:""},null,-1)),K=[J],M=p(()=>e("div",{class:"item__line"},null,-1)),O={class:"item__outer-circle-video"},Q=["onClick"],R=p(()=>e("img",{class:"test-icon",src:D,alt:""},null,-1)),X=[R],Y=["id"],Z={style:{display:"none"}},P={class:"courses__card card"},ee={class:"card__title"},te={style:{"white-space":"pre-line"},class:"card__text"},se=["href"],ie={__name:"CoursesNewbie",setup(_){const k=T(),f={title:o(""),desc:o(`Мы рады приветствовать тебя в рядах Торговой Команды! 

Тебя ждет познавательный обучающий путь, где ты приобретешь ценные знания и опыт в продажах. 

Ниже описание ступеней, которые помогут тебе стать эффективным сотрудником`),btnColor:o(""),hasVideo:o(!1),link:o("")};let{title:a,desc:d,btnColor:r,hasVideo:v,link:m}=f,u=o(0);function w(s){return s[0].toUpperCase()+s.slice(1).toLowerCase()}function C(s){a.value=w(s.title),d.value=s.description,r.value=s.btnColor,v.value=s.hasVideo,m.value=s.link,u.value++}return(s,oe)=>(l(),c("div",null,[e("div",j,[e("div",A,[e("div",E,[e("ul",G,[(l(!0),c(S,null,x(t(k).lectures,i=>(l(),c("li",{key:i.id,class:"courses__item item"},[e("div",U,n(i.id)+". "+n(i.title),1),e("div",W,[e("div",q,[e("div",{class:h(["item__inner-circle-video",[i.btnColor]]),onClick:g=>C(i)},K,10,H)]),M,e("div",O,[e("div",{class:h(["item__inner-circle-video",[i.test.btnColor]]),onClick:g=>C(i.test)},X,10,Q)])]),e("div",{id:`endline-${i.id}`,class:"item__endline"},null,8,Y)]))),128))])]),b(I,{name:"slide",mode:"out-in"},{default:N(()=>[(l(),c("div",{key:t(u),class:"courses__card-box"},[e("div",Z,n(t(u)),1),e("div",P,[e("div",ee,n(t(a)?t(a):"Добро пожаловать!"),1),e("div",te,n(t(d)?t(d):"Время проходить тесты!"),1),t(r)?(l(),c("a",{key:0,href:t(m),class:h(["card__button",[t(r)]])},n(t(d)?t(v)?"Посмотреть видео":"Скачать документы":"Перейти в тест"),11,se)):F("",!0)])]))]),_:1})])]),b(L)]))}},_e=V(ie,[["__scopeId","data-v-fa3e4070"]]);export{_e as default};
