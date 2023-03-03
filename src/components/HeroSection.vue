<template>
    <div class="hero">
        <div class="hero__container">
            <div class="hero__logo"><img src="../img/hero/hero_log.png" alt=""><a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D1%91%D0%B7%D0%B4%D0%BD%D1%8B%D0%B5_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B">Что такое "Звездные Войны"? Ознакомиться здесь!</a></div>
            <div class="hero__box">
                <div class="hero__title">Добро пожаловать на обучающую платформу «Путь Джедая»</div>
                <div class="hero__subtitle">Для Торговой Команды Традиционной Розницы Управления Продаж APPLECITY corps! </div>
                <div class="hero__text">«Перейди на светлую сторону» и пройди обучение по всем уровням! <br><br>
                                        <b style="color: red">I уровень</b> «Юный Падаван» – для вновь принятых сотрудников<br>
                                        <b style="color: red">II уровень</b> «Джедай Продаж» - для опытных сотрудник<br>
                                        <b style="color: red">III уровень</b> «Мастер Продаж» - для продвинутых сотрудников<br><br>
                                        Получи значок с присужденным рангом после прохождения аттестации по каждому уровню!   
</div>
                <div href="#downloadsection" @click.prevent="scrollDown('downloadsection')" class="hero__button button">Перейти на светлую сторону</div>

            </div>
        </div>
    </div>
</template>

<script setup>
function scrollDown(blockID) {
    const $block = document.getElementById(blockID)
    $block.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}
</script>

<style lang="scss" scoped>
.hero {
    background-color: #010101;
    &__container {
        background-image: url('../img/hero/bg.jpg');
        min-height: 41.2em;
        display: flex;
        font-family: 'Noto Sans', sans-serif;
    }
    &__logo {
        flex-direction: column;
        width: 550px;
        min-height: 41.2em;
        display: flex;
        padding: 0 10em 0 0;
        justify-content: center;
        align-items: center;
        color: red;
        font-family: 'Old Standard TT', serif;
        text-align: center;
        font-size: 16px;
        text-decoration: underline;
        font-style: italic;
        font-weight: 700;
        & a {
            color: red;
            &:visited {
                color: red;
            }
        }
        & img {
            width: 550px;
            height: 550px;
            object-fit: contain;
            margin: 0 0 2em 0;
        }
    }
    &__box {
        padding: 7.3em 0 0 0;
        color: #fff;
        min-height: 41.2em;
        text-align: end;
        font-family: 'Noto Sans', sans-serif;

        width: 780px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        letter-spacing: .5em;
    }
    &__title {
        font-size: 35px;
        margin: 0 0 .5em 0;
        font-weight: 700;
        font-family: 'Noto Sans', sans-serif;

        letter-spacing: .5px;
    }
    &__subtitle {
        letter-spacing: .5px;
        color: red;
        width: 500px;
        font-size: 18px;
        line-height: 1.4;
        font-weight: 700;
        margin: 0 0 2em 0;
        font-family: 'Noto Sans', sans-serif;
    }
    &__text {
        letter-spacing: .2em;
        width: 450px;
        font-size: 15.5px;
        letter-spacing: 1.5px;
        margin: 0 0 50px 0;
        line-height: 1.30em;
        font-family: 'Noto Sans', sans-serif;
    }
    &__button {
        background-color: #010101;
        border-radius: 3em;
        padding: 0.35em 3em 0.5em 3em;
        font-size: 20px;
        font-weight: 700;
        transition: .4s;
        max-width: 23em;
        font-family: 'Noto Sans', sans-serif;
        letter-spacing: normal;
        color: rgb(255, 0, 0, 0.7);
        border: 2px solid rgb(255, 0, 0, 0.7);
        &:hover {
            transition: .4s;
            color: #010101;
            background-color: #fff;
            border-color: #fff;
            filter: drop-shadow(0 0 2rem rgba(234, 255, 45, 0.282));
        }
    }
}

@media only screen and (max-width: 1200px) {
    .hero {
        &__container {
            flex-direction: column;
            align-items: center;
        }
        &__logo {
            padding: 0;
        }
        &__box {
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        &__title {
            width: 450px;
        }
    }

}

@media only screen and (max-width: 500px) {
    .hero {
        &__box {

        }
        &__title {
            width: 340px;
            font-size: 25px;
        }
        &__subtitle {
            width: 340px;
            font-size: 15px;
        }
        &__text {
            width: 340px;
            font-size: 14px;
        }
        &__button {
            padding: 0.35em 1em 0.5em 1em;
            font-size: 17px;
        }
    }

}

@media only screen and (max-width: 400px) { 
    .hero {
        &__logo {
            width: 400px;
            font-size: 14px;
            & img {
                width: 400px;
                height: 400px;
                object-fit: contain;
                margin: 0 0 2em 0;
            }
        }
    
    }
}

@media only screen and (max-width: 350px) {
    .hero {
        &__logo {
            font-size: 13px;
            width: 275px;
        }
        &__box {

        }
        &__title {
            width: 275px;
            font-size: 22px;
        }
        &__subtitle {
            width: 275px;
            font-size: 13px;
        }
        &__text {
            width: 275px;
            font-size: 12px;
        }
        &__button {
            padding: 0.35em 1em 0.5em 1em;
            font-size: 14px;
        }
    }

}

</style>