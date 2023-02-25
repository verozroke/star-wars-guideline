import{g as y,_ as V,h as n,o as c,c as _,a as e,F as S,i as x,u as t,e as b,f as N,T as I,t as l,n as h,j as F,k as B,p as $,d as z}from"./index-9e3bda10.js";import{_ as D,a as L}from"./testi-icon-9acccb88.js";import{F as T}from"./FooterSection-faf5085b.js";const j=y("newbieStore",{state:()=>({info:{levelID:1,title:"УРОВЕНЬ 1.0. Ты - Юный Падаван",subtitle:"Данный уровень для новеньких сотрудников торговой команды (менее 6 мес. в Компании)",description:`Мы рады приветствовать тебя в рядах Торговой Команды! Тебя ждет познавательный обучающий путь,
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
                    
 2. Закрепи свои знания в полях с Супервайзером`,link:"#",test:{id:4,btnColor:"red",title:"7 ШАГОВ ВИЗИТА",link:"#"}}]})});const p=d=>($("data-v-81098cee"),d=d(),z(),d),A={class:"courses"},E={class:"courses__container"},G={class:"courses__route-box"},R={class:"courses__route"},U={class:"item__title"},W={class:"item__row"},q={class:"item__outer-circle-video"},H=["onClick"],J=p(()=>e("img",{class:"play-icon",src:D,alt:""},null,-1)),K=[J],M=p(()=>e("div",{class:"item__line"},null,-1)),O={class:"item__outer-circle-video"},Q=["onClick"],X=p(()=>e("img",{class:"test-icon",src:L,alt:""},null,-1)),Y=[X],Z=["id"],P={style:{display:"none"}},ee={class:"courses__card card"},te={class:"card__title"},se={style:{"white-space":"pre-line"},class:"card__text"},ie=["href"],oe={__name:"CoursesNewbie",setup(d){const k=j(),f={title:n(""),desc:n(`Мы рады приветствовать тебя в рядах Торговой Команды! 

Тебя ждет познавательный обучающий путь, где ты приобретешь ценные знания и опыт в продажах. 

Ниже описание ступеней, которые помогут тебе стать эффективным сотрудником`),btnColor:n(""),hasVideo:n(!1),link:n("")};let{title:o,desc:r,btnColor:a,hasVideo:v,link:m}=f,u=n(0);function w(s){return s[0].toUpperCase()+s.slice(1).toLowerCase()}function C(s){o.value=w(s.title),r.value=s.description,a.value=s.btnColor,v.value=s.hasVideo,m.value=s.link,u.value++}return(s,ne)=>(c(),_("div",null,[e("div",A,[e("div",E,[e("div",G,[e("ul",R,[(c(!0),_(S,null,x(t(k).lectures,i=>(c(),_("li",{key:i.id,class:"courses__item item"},[e("div",U,l(i.id)+". "+l(i.title),1),e("div",W,[e("div",q,[e("div",{class:h(["item__inner-circle-video",[i.btnColor]]),onClick:g=>C(i)},K,10,H)]),M,e("div",O,[e("div",{class:h(["item__inner-circle-video",[i.test.btnColor]]),onClick:g=>C(i.test)},Y,10,Q)])]),e("div",{id:`endline-${i.id}`,class:"item__endline"},null,8,Z)]))),128))])]),b(I,{name:"slide",mode:"out-in"},{default:N(()=>[(c(),_("div",{key:t(u),class:"courses__card-box"},[e("div",P,l(t(u)),1),e("div",ee,[e("div",te,l((t(o)==="Основы дпшм"?F(o)?o.value="Основы ДПШМ":o="Основы ДПШМ":t(o))?t(o):"Добро пожаловать!"),1),e("div",se,l(t(r)?t(r):"Время проходить тесты!"),1),t(a)?(c(),_("a",{key:0,href:t(m),class:h(["card__button",[t(a)]])},l(t(r)?t(v)?"Посмотреть видео":"Скачать документы":"Перейти в тест"),11,ie)):B("",!0)])]))]),_:1})])]),b(T)]))}},de=V(oe,[["__scopeId","data-v-81098cee"]]);export{de as default};
