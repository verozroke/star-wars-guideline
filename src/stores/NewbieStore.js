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
                    link: 'https://drive.google.com/file/d/1Vrm5hBdg1EtjlhQRgyPwczyw9TT15Tem/view?usp=sharing',
                    test: {
                        id: 1,
                        btnColor: 'red',
                        title: 'ЗНАКОМСТВО С КОМПАНИЕЙ',
                        link: 'https://forms.gle/HPjwcP49HhgQbnK5A'
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
                    link: 'https://drive.google.com/file/d/1jORCBE2mLYvmEZZT4pcdhZ4ScpJT75_p/view?usp=sharing',
                    test: {
                        id: 2,
                        btnColor: 'red',
                        title: 'ТОРГОВЫЕ УСЛОВИЯ',
                        link: 'https://forms.gle/UFPvdeXDxuKnnVRC7'
                    }
                },
                {
                    id: 3,
                    btnColor: 'green',
                    title: 'ОСНОВЫ ДПШМ',
                    hasVideo: true,
                    description: `
                    1. Посмотри видео презентацию "Основы и принципы ДПШМ"
                    \n 2. Закрепи свои знания в полях с Супервайзером
                    `,
                    link: 'https://youtu.be/NUdZJJoX6bU',
                    test: {
                        id: 3,
                        btnColor: 'red',
                        title: 'ОСНОВЫ ДПШМ',
                        link: 'https://forms.gle/vzxYqRVM4HUJ1TyJ6'
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
                    link: 'https://www.youtube.com/watch?v=U1o627h4KeE&feature=youtu.be',
                    test: {
                        id: 4,
                        btnColor: 'red',
                        title: '7 ШАГОВ ВИЗИТА',
                        link: 'https://forms.gle/Q3SPZnbWvQp5Yd87A',
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
                        link: 'https://forms.gle/euobaMQj5eoxNbSXA',
                    }
                },
            ],
    })
})