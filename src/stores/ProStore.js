import { defineStore } from "pinia";

export const useProStore = defineStore('proStore', {
    state: () => ({
        info: {
            levelID: 3,
            title: 'УРОВЕНЬ 3.0. Ты - Мастер Продаж',
            subtitle: 'Данный уровень для продвинутых сотрудников торговой команды',
            description: `
            Ты продвинутый сотрудник, который в работе использует различные техники продаж, изученные на уровне 2.0.\n\nДля того чтобы стать еще более эффективным в работе, необходимо пройти тренинги по категорийной экспертизе, а также повторить SBD рекомендации и выполнить задания в онлайн тренажере "Конструктор по Шелвингу" совместно с Супервайзером или Территориальным менеджером`,
        },
        lectures: [
            {
                id: 1,
                btnColor: 'green',
                title: 'КАТЕГОРИЙНАЯ ЭКСПЕРТИЗА',
                description: `1. Пройди обучение по категорийной экспертизе`,
                hasVideo: true,
                link: '#',
                test: {
                    id: 1,
                    btnColor: 'red',
                    title: 'КАТЕГОРИЙНАЯ ЭКСПЕРТИЗА',
                    link: '#',
                }
            },
            {
                id: 2,
                btnColor: 'green',
                title: 'SBD',
                description: `Изучи документы: 
                \n 1. Примеры фото с решелвинга`,
                hasVideo: false,
                link: '#',
                test: {
                    id: 2,
                    btnColor: 'red',
                    title: 'КАТЕГОРИЙНАЯ ЭКСПЕРТИЗА',
                    link: '#',
                }
            },
            {
                id: 3,
                btnColor: 'green',
                title: 'КОНСТРУКТОР ПО ШЕЛВИНГУ',
                description: `1. Пройди задания в конструкторе по шелвингу
                \n2. Сдай аттестацию с Супервайзером`,
                hasVideo: true,
                link: 'https://verozroke.github.io/shelving-simulator/',
                test: {
                    id: 3,
                    btnColor: 'red',
                    title: 'КОНСТРУКТОР ПО ШЕЛВИНГУ',
                    link: 'https://verozroke.github.io/shelving-simulator/',
                }
            },
        ],
    })
})