import{h as B,_ as $,i as l,e as I,o as c,c as a,f as b,g as f,T as m,a as t,F as T,j as z,u as e,k as C,l as D,m as V,t as d,n as _}from"./index-c8ba21c6.js";import{P as E,_ as F,a as U}from"./Popup-5458ada6.js";const j=B("newbieStore",{state:()=>({info:{levelID:1,title:"УРОВЕНЬ 1.0. Ты - Юный Падаван",subtitle:"Данный уровень для новеньких сотрудников торговой команды (менее 6 мес. в Компании)",description:`Мы рады приветствовать тебя в рядах Торговой Команды! Тебя ждет познавательный обучающий путь,
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
                    
 2. Закрепи свои знания в полях с Супервайзером`,link:"#",test:{id:4,btnColor:"red",title:"7 ШАГОВ ВИЗИТА",link:"#"}},{id:5,btnColor:"green",title:"АТТЕСТАЦИЯ",description:"Пройди аттестацию!",hasVideo:!1,link:"#",test:{id:5,btnColor:"red",title:"АТТЕСТАЦИЯ",link:"#"}}]})});const q={key:0,class:"background"},A={class:"courses"},G={class:"courses__container"},M={class:"courses__route-box"},R={class:"courses__route"},W={class:"item__title"},H={class:"item__row"},J=["onClick"],K={class:"item__outer-circle-video"},O=["onClick"],Q=["id"],X={style:{display:"none"}},Y={class:"courses__card card"},Z={class:"card__title"},P={style:{"white-space":"pre-line"},class:"card__text"},ee=["href"],te={__name:"CoursesNewbie",setup(se){document.addEventListener("click",s=>{o.value===!0&&!document.querySelector(".popup-inner").contains(s.target)&&!s.target.classList.contains("play-icon")&&!s.target.classList.contains("test-icon")&&w()});let o=l(!1);I(()=>{window.scrollTo(0,0)});const S=j(),x={title:l(""),desc:l(`Мы рады приветствовать тебя в рядах Торговой Команды! 

Тебя ждет познавательный обучающий путь, где ты приобретешь ценные знания и опыт в продажах. 

Ниже описание ступеней, которые помогут тебе стать эффективным сотрудником`),btnColor:l(""),hasVideo:l(!1),link:l("")};let{title:n,desc:r,btnColor:u,hasVideo:p,link:v}=x,h=l(0);function N(s){return s[0].toUpperCase()+s.slice(1).toLowerCase()}function g(s){window.screen.width>1e3?y(s):(y(s),w())}function w(){o.value=!o.value}function y(s){n.value=N(s.title),r.value=s.description,u.value=s.btnColor,p.value=s.hasVideo,v.value=s.link,h.value++}return(s,k)=>(c(),a("div",null,[b(m,{name:"backgroundich"},{default:f(()=>[e(o)?(c(),a("div",q)):C("",!0)]),_:1}),b(m,{name:"popup"},{default:f(()=>[e(o)?(c(),D(E,{key:0,onClose:k[0]||(k[0]=i=>V(o)?o.value=!1:o=!1),title:e(n),desc:e(r),"btn-color":e(u),"has-video":e(p),link:e(v)},null,8,["title","desc","btn-color","has-video","link"])):C("",!0)]),_:1}),t("div",A,[t("div",G,[t("div",M,[t("ul",R,[(c(!0),a(T,null,z(e(S).lectures,i=>(c(),a("li",{key:i.id,class:"courses__item item"},[t("div",W,d(i.id)+". "+d(i.title),1),t("div",H,[t("div",{class:_(["item__outer-circle-video",{hidden:i.title==="АТТЕСТАЦИЯ"}])},[t("div",{class:_(["item__inner-circle-video",[i.btnColor]])},[t("img",{class:"play-icon",src:F,alt:"",onClick:L=>g(i)},null,8,J)],2)],2),t("div",{class:_(["item__line",{hidden:i.title==="АТТЕСТАЦИЯ"}])},null,2),t("div",K,[t("div",{class:_(["item__inner-circle-video",[i.test.btnColor]])},[t("img",{class:"test-icon",src:U,onClick:L=>g(i.test),alt:""},null,8,O)],2)])]),t("div",{id:`endline-${i.id}`,class:"item__endline"},null,8,Q)]))),128))])]),b(m,{name:"slide",mode:"out-in"},{default:f(()=>[(c(),a("div",{key:e(h),class:"courses__card-box"},[t("div",X,d(e(h)),1),t("div",Y,[t("div",Z,d((e(n)==="Основы дпшм"?V(n)?n.value="Основы ДПШМ":n="Основы ДПШМ":e(n))?e(n):"Добро пожаловать!"),1),t("div",P,d(e(r)?e(r):"Время проходить тесты!"),1),e(u)?(c(),a("a",{key:0,target:"_blank",href:e(v),class:_(["card__button",[e(u)]])},d(e(r)?e(p)?"Посмотреть видео":"Скачать документы":"Перейти в тест"),11,ee)):C("",!0)])]))]),_:1})])])]))}},ne=$(te,[["__scopeId","data-v-6c4f1d9f"]]);export{ne as default};
