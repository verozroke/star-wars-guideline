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
                description: `1. Пройди тренинги по категорийной экспертизе`,
                hasVideo: true,
                link: 'https://applecitycorps-my.sharepoint.com/:f:/r/personal/gumarova_a_applecity_kz/Documents/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%9E%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B0%D1%8F%20%D0%BA%D0%B0%D1%80%D1%82%D0%B0/3%20%D1%83%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C.%20%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B9%D0%BD%D0%B0%D1%8F%20%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%B8%D0%B7%D0%B0?csf=1&web=1&e=bvrHIV',
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
                title: 'КОНСТРУКТОР ПО ШЕЛВИНГУ',
                description: `1. Пройди задания в конструкторе по шелвингу
                \n2. Сдай аттестацию с Супервайзером`,
                hasVideo: true,
                link: 'https://verozroke.github.io/apple-constructor/',
                test: {
                    id: 2,
                    btnColor: 'red',
                    title: 'КОНСТРУКТОР ПО ШЕЛВИНГУ',
                    link: 'https://verozroke.github.io/shelving-simulator/',
                }
            },
        ],
    })
})