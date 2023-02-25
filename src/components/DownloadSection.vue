<template>
                
    <div class="download" id="downloadsection">
        <div class="download__container">
            <div class="download__title">Навигационная карта</div>
            <div class="download__subtitle">Мы подготовили для тебя навигационную карту. В данной карте отображены все уровни. Здесь ты можешь ознакомиться со всей обучающей программой в рамках «Путь Джедая»</div>
            <div class="download__image"><img src="../img/download/card.png" alt=""></div>
            <a href="https://drive.google.com/file/d/1I7SPADzhsqI_h99YTiPfAqoYHadyxvLk/view?usp=sharing" target="_blank" class="download__button">Скачать PDF</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.download {
    min-height: 42em;
    font-family: 'Noto Sans', sans-serif;
    &__container {
        display: flex;
        min-height: 42em;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
    }
    &__image {
        max-width: 700px;
        & img {
            width: 700px;
            border-radius: .5em;
        }
    }
    &__title {
        margin: 1.5em 0 0 0;
        font-size: 50px;
        font-weight: 700;
    }
    &__subtitle {
        font-size: 20px;
        font-family: 'Old Standard TT', serif;
        letter-spacing: 1px;
        font-style: italic;
        font-weight: 700;
        width: 700px;
        text-align: center;
    }
    &__button {
        margin: 1em 0 2em 0;
        background-color: red;
        border-radius: 3em;
        padding: .7em 2em .7em 2em;
        font-size: 25px;
        font-weight: 500;
        transition: .4s;
        max-width: 20em;
        font-family: 'Noto Sans', sans-serif;
        letter-spacing: normal;
        color: #fff;
        border: 2px solid red;
        filter: drop-shadow(0 5px 10px rgba(0, 0, 0, .8));
        &:hover {
            transition: .4s;
            color: red;
            background-color: #fff;
            filter: drop-shadow(0 0px 5px rgba(0, 0, 0, .3));
        }
    }
}


</style>