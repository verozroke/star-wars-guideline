<template>
                
    <div class="download" id="downloadsection">
        <div class="download__container">
            <div class="download__title">Навигационная карта</div>
            <div class="download__subtitle">Мы подготовили тебя навигационную карту для вашего обучения!</div>
            <div class="download__image"><img src="../img/download/card.png" alt=""></div>
            <a href="https://psv4.userapi.com/c236331/u239206365/docs/d22/bfa353549f23/Obuchayuschaya_karta_kopia_2.pdf?extra=uBRvlkXEaHyTKhE8eM3PfP-SLUr6XrNYZGiHIX5p8Rx4BdPYwz1oR85dX2WqA9FZhh0sHfYfRy0NY3JWjVrKkfrmDc6570m_dHf5LTEwb20uKxBOKqsSPxz9Z9PFZdf6dw2goYhg9cI8TzA0xRxpbpZjcA" target="_blank" class="download__button">Скачать PDF</a>
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
        font-size: 50px;
        font-weight: 700;
    }
    &__subtitle {
        font-size: 20px;
        font-family: 'Old Standard TT', serif;
        letter-spacing: 1px;
        font-style: italic;
        font-weight: 700;
        width: 480px;
        text-align: center;
    }
    &__button {
        margin: 1em 0 0 0;
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