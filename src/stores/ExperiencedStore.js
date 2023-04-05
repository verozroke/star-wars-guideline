import { defineStore } from "pinia";

export const useExperiencedStore = defineStore('experiencedStore', {
    state: () => ({
        info: {
            levelID: 2,
            title: 'УРОВЕНЬ 2.0. Ты - Джедай Продаж',
            subtitle: 'Данный уровень для опытных сотрудников торговой команды (более 6 мес. в Компании)',
            description: `Ты опытный сотрудник, который в работе использует, изученные знания и навыки для достижения результатов.
            Пройдя тренинги по карте уровня 2.0. ты можешь изучить и/или подтвердить свои знания и навыки в основах
            ДПШМ, в выполнении семи шагов визита в торговую точку и в категориной экспертизе.`,
        },
        lectures: [
            {
                id: 1,
                btnColor: 'green',
                title: 'ОСНОВЫ ДПШМ',
                description: `1. Посмотри видео презентацию "Основы и принципы ДПШМ"
                \n2. Закрепи свои знания в полях с Супервайзером`,
                hasVideo: true,
                link: '#',
                test: {
                    id: 1,
                    btnColor: 'red',
                    title: 'ОСНОВЫ ДПШМ',
                    link: 'https://forms.gle/vzxYqRVM4HUJ1TyJ6',
                }

            },
            {
                id: 2,
                btnColor: 'green',
                title: 'СВОЙСТВО ПРЕИМУЩЕСТВА ВЫГОДЫ',
                description: `1. Посмотри видео запись тренинга "Свойство Преимущества Выгоды"
                \n2. Закрепи материал в полях с Супервайзером и на оффлайн тренингах с участием коллег`,
                hasVideo: true,
                link: 'https://youtu.be/wHTWyazn4zM',
                test: {
                    id: 2,
                    btnColor: 'red',
                    title: 'СВОЙСТВО ПРЕИМУЩЕСТВА ВЫГОДЫ',
                    link: 'https://forms.gle/17DH3LwngngCv6QQ9',
                }

            },
            {
                id: 3,
                btnColor: 'green',
                title: 'ФОРМАТ УБЕДИТЕЛЬНЫХ ПРОДАЖ',
                description: `
                1. Посмотри видео запись тренинга "Формат Убедительных Продаж"
                \n2. Закрепи материал в полях с Супервайзером и на оффлайн тренингах с участием коллег
                `,
                hasVideo: true,
                link: 'https://youtu.be/9ZDwHFOO4eg',
                test: {
                    id: 3,
                    btnColor: 'red',
                    title: 'ФОРМАТ УБЕДИТЕЛЬНЫХ ПРОДАЖ',
                    link: 'https://forms.gle/bqAj5QEPmahsk1iAA',
                }
            },
            {
                id: 4,
                btnColor: 'green',
                title: 'ПРЕОДОЛЕНИЕ ВОЗРАЖЕНИЙ',
                description: `
                1. Посмотри видео запись тренинга "Преодоление возражений"
                \n2. Закрепи материал в полях с Супервайзером и на оффлайн тренингах с участием коллег`,
                hasVideo: true,
                link: 'https://youtu.be/Vv-xWLV_G2M',
                test: {
                    id: 4,
                    btnColor: 'red',
                    title: 'ПРЕОДОЛЕНИЕ ВОЗРАЖЕНИЙ',
                    link: 'https://forms.gle/d2WuYQX56yRmwH2z5',
                }
            },
            {
                id: 5,
                btnColor: 'green',
                title: 'АТТЕСТАЦИЯ',
                description: `Пройди аттестацию!`,
                hasVideo: false,
                link: '#',
                test: {
                    id: 5,
                    btnColor: 'red',
                    title: 'АТТЕСТАЦИЯ',
                    link: 'https://forms.gle/QsJvjYT9nJL6LecBA',
                }
            },
        ]
    })
})