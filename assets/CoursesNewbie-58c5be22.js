import{h as y,_ as V,i as o,o as n,c as l,a as e,F as S,j as x,u as t,f as C,g as N,T as I,t as c,n as p,k as F,p as B,b as $}from"./index-47c08e6b.js";import{_ as z,a as D}from"./testi-icon-49b7abd7.js";import{F as L}from"./FooterSection-74f4ac21.js";const T=y("newbieStore",{state:()=>({info:{levelID:1,title:"УРОВЕНЬ 1.0. Ты - Юный Падаван",subtitle:"Данный уровень для новых сотрудников торговой команды",description:`Мы рады приветствовать тебя в рядах Торговой Команды! Тебя ждет познавательный обучающий путь,
            где ты приобретешь ценные знания и опыт в продажах. Ниже описание ступеней, которые помогут тебе
            стать эффективным сотрудником`},lectures:[{id:1,btnColor:"purple",title:"ЗНАКОМСТВО С КОМПАНИЕЙ",hasVideo:!1,description:`После прохождения тобой первой недели адаптации c Супервайзером, закрепи материалы ниже: 
                    
 1. Welcome видео о Компании ACC 
                    
 2. История компании P&G 
                    
 3. Основные понятия вработе`,link:"https://www.duolingo.com/learn",test:{id:1,btnColor:"green",title:"ЗНАКОМСТВО С КОМПАНИЕЙ",link:"#"}},{id:2,btnColor:"orange",title:"ТОРГОВЫЕ УСЛОВИЯ",hasVideo:!1,description:`Изучи документы совместно  Супервайзером: 
                    
 1. Квалификация ТТ
                    
 2. Торговые Условия
                    
 3. Программа «Золотой Продавец»
                    `,link:"",test:{id:2,btnColor:"red",title:"ТОРГОВЫЕ УСЛОВИЯ",link:"#"}},{id:3,btnColor:"pink",title:"ОСНОВЫ ДПШМ",hasVideo:!0,description:`
                    1. Посмотри видео презентацию "Основы и принципы ДПМШ"
                    
 2. Закрепи свои знания в полях с Супервайзером
                    `,link:"#",test:{id:3,btnColor:"blue",title:"ОСНОВЫ ДПШМ",link:"#"}},{id:4,btnColor:"red",title:"КОНЦЕПТУАЛЬНАЯ ПРОДАЖА",hasVideo:!0,description:`
                    1. Посмотри видео презентацию "Концептуальная продажа"
                    
 2. Изучи 10 задач в Магазине. Закрепи свои знания в полях
                    `,link:"#",test:{id:4,btnColor:"purple",title:"КОНЦЕПТУАЛЬНАЯ ПРОДАЖА",link:"#"}}]})});const h=_=>(B("data-v-ab5c4b5f"),_=_(),$(),_),j={class:"courses"},A={class:"courses__container"},E={class:"courses__route-box"},G={class:"courses__route"},U={class:"item__title"},W={class:"item__row"},q={class:"item__outer-circle-video"},H=["onClick"],J=h(()=>e("img",{class:"play-icon",src:z,alt:""},null,-1)),K=[J],M=h(()=>e("div",{class:"item__line"},null,-1)),O={class:"item__outer-circle-video"},Q=["onClick"],R=h(()=>e("img",{class:"test-icon",src:D,alt:""},null,-1)),X=[R],Y=["id"],Z={style:{display:"none"}},P={class:"courses__card card"},ee={class:"card__title"},te={style:{"white-space":"pre-line"},class:"card__text"},se=["href"],ie={__name:"CoursesNewbie",setup(_){const k=T(),f={title:o(""),desc:o("Здесь находятся все нужные тебе лекции и тесты!"),btnColor:o(""),hasVideo:o(!1),link:o("")};let{title:a,desc:d,btnColor:r,hasVideo:v,link:b}=f,u=o(0);function w(s){return s[0].toUpperCase()+s.slice(1).toLowerCase()}function m(s){a.value=w(s.title),d.value=s.description,r.value=s.btnColor,v.value=s.hasVideo,b.value=s.link,u.value++}return(s,oe)=>(n(),l("div",null,[e("div",j,[e("div",A,[e("div",E,[e("ul",G,[(n(!0),l(S,null,x(t(k).lectures,i=>(n(),l("li",{key:i.id,class:"courses__item item"},[e("div",U,c(i.title),1),e("div",W,[e("div",q,[e("div",{class:p(["item__inner-circle-video",[i.btnColor]]),onClick:g=>m(i)},K,10,H)]),M,e("div",O,[e("div",{class:p(["item__inner-circle-video",[i.test.btnColor]]),onClick:g=>m(i.test)},X,10,Q)])]),e("div",{id:`endline-${i.id}`,class:"item__endline"},null,8,Y)]))),128))])]),C(I,{name:"slide",mode:"out-in"},{default:N(()=>[(n(),l("div",{key:t(u),class:"courses__card-box"},[e("div",Z,c(t(u)),1),e("div",P,[e("div",ee,c(t(a)?t(a):"Добро пожаловать!"),1),e("div",te,c(t(d)?t(d):"Время проходить тесты!"),1),t(r)?(n(),l("a",{key:0,href:t(b),class:p(["card__button",[t(r)]])},c(t(d)?t(v)?"Посмотреть видео":"Скачать документы":"Перейти в тест"),11,se)):F("",!0)])]))]),_:1})])]),C(L)]))}},_e=V(ie,[["__scopeId","data-v-ab5c4b5f"]]);export{_e as default};
