<template>
    <div class="hero">
        <div class="hero__container">
            <div class="hero__logo"><img src="../img/hero/hero_logo.png" alt=""></div>
            <div class="hero__box">
                <div class="hero__title">Приветствуем!</div>
                <div class="hero__subtitle">Добро пожаловать в путь Джедая</div>
                <div class="hero__text">Мы рады приветствовать тебя в рядах Торговой Команды! Тебя ждет познавательный обучающий путь,
                                        где ты приобретешь ценные знания и опыт в продажах. <br><br>Ниже уровни, которые помогут тебе
                                        стать эффективным сотрудником</div>
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
        background-image: url('../img/hero/hero_background.png');
        min-height: 41.2em;
        display: flex;
        font-family: 'Noto Sans', sans-serif;
    }
    &__logo {
        width: 550px;
        min-height: 41.2em;
        display: flex;
        align-items: center;
        & img {
            width: 550px;
            height: 550px;
            
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
        font-size: 65px;
        margin: 0 0 .2em 0;
        font-weight: 700;
    }
    &__subtitle {
        color: red;
        font-size: 23px;
        margin: 0 0 1em 0;
        font-family: 'Noto Sans', sans-serif;
    }
    &__text {
        letter-spacing: .2em;
        width: 450px;
        font-size: 20px;
        margin: 0 0 50px 0;
        line-height: 1.30em;
        font-family: 'Noto Sans', sans-serif;
    }
    &__button {
        background-color: #010101;
        border-radius: 3em;
        padding: 0.5em 2em 0.5em 2em;
        font-size: 20px;
        font-weight: 700;
        transition: .4s;
        max-width: 20em;
        font-family: 'Noto Sans', sans-serif;
        letter-spacing: normal;
        color: rgb(255, 0, 0, 0.5);
        border: 2px solid rgb(255, 0, 0, 0.5);
        &:hover {
            transition: .4s;
            color: #010101;
            background-color: #fff;
            border-color: #fff;
            filter: drop-shadow(0 0 2rem rgba(234, 255, 45, 0.282));
        }
    }
}

</style>