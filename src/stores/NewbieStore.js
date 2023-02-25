import { defineStore } from 'pinia'

export const useNewbieStore = defineStore('newbieStore',{
    state: () => ({
        info: {
            levelID: 1,
            title: 'УРОВЕНЬ 1.0. Ты - Юный Падаван',
            subtitle: 'Данный уровень для новеньких сотрудников торговой команды (менее 6 мес. в Компании)',
            description: `Мы рады приветствовать тебя в рядах Торговой Команды! Тебя ждет познавательный обучающий путь,
            где ты приобретешь ценные знания и опыт в продажах. Ниже описание ступеней, которые помогут тебе
            стать эффективным сотрудником`,
        },
        lectures: [
                {
                    id: 1,
                    btnColor: 'green',
                    title: 'ЗНАКОМСТВО С КОМПАНИЕЙ',
                    hasVideo: false,
                    description: `После прохождения тобой первой недели адаптации c Супервайзером, закрепи материалы ниже: 
                    \n 1. Welcome видео о Компании ACC 
                    \n 2. История компании P&G 
                    \n 3. Основные понятия в работе`,
                    link: 'https://www.duolingo.com/learn',
                    test: {
                        id: 1,
                        btnColor: 'red',
                        title: 'ЗНАКОМСТВО С КОМПАНИЕЙ',
                        link: '#'
                    }
                },
                {
                    id: 2,
                    btnColor: 'green',
                    title: 'ТОРГОВЫЕ УСЛОВИЯ',
                    hasVideo: false,
                    description: `Изучи документы совместно с Супервайзером: 
                    \n 1. Квалификация ТТ
                    \n 2. Торговые Условия
                    \n 3. Программа «Золотой Продавец»
                    `,
                    link: '',
                    test: {
                        id: 2,
                        btnColor: 'red',
                        title: 'ТОРГОВЫЕ УСЛОВИЯ',
                        link: '#'
                    }
                },
                {
                    id: 3,
                    btnColor: 'green',
                    title: 'ОСНОВЫ ДПШМ',
                    hasVideo: true,
                    description: `
                    1. Посмотри видео презентацию "Основы и принципы ДПМШ"
                    \n 2. Закрепи свои знания в полях с Супервайзером
                    `,
                    link: '#',
                    test: {
                        id: 3,
                        btnColor: 'red',
                        title: 'ОСНОВЫ ДПШМ',
                        link: '#'
                    }
                },
                {
                    id: 4,
                    btnColor: 'green',
                    title: '7 ШАГОВ ВИЗИТА',
                    hasVideo: true,
                    description: `
                    1. Посмотри видео презентацию "7 Шагов Визита"
                    \n 2. Закрепи свои знания в полях с Супервайзером`,
                    link: '#',
                    test: {
                        id: 4,
                        btnColor: 'red',
                        title: '7 ШАГОВ ВИЗИТА',
                        link: '#',
                    }
                },
            ],
    })
})