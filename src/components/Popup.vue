<template>
    <div class="popup">
            <div class="popup-inner">
                <div class="popup__title">{{ (title === 'Основы дпшм' ? 'Основы ДПШМ' : title) ? title : 'Добро пожаловать!' }}</div>
                <div style="white-space: pre-line;" class="popup__text">
                    {{ desc ? desc : 'Время проходить тесты!' }}
                </div>
                <a target="_blank" v-if="btnColor" :href="link" class="popup__button" :class="[btnColor]">{{ desc ? (hasVideo ?  'Посмотреть видео' : 'Скачать документы') : 'Перейти в тест' }}</a>
            </div>
    </div>
</template>

<script setup>
import { toRefs } from 'vue';

const { title, desc, btnColor, hasVideo, link } = toRefs(props)

const props = defineProps({
    togglePopUp: Function,
    title: String,
    desc: String,
    btnColor: String,
    hasVideo: Boolean,
    link: String,
})

</script>

<style lang="scss" scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    // background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &-inner {
        border-top-left-radius: 1em;
        border-top-right-radius: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2em;
        background: #fff;
        padding: 64px 32px;
        max-height: 400px;
        font-family: 'Noto Sans', sans-serif;
    }
    &__title {
        text-align: center;
        font-weight: 700;
        font-size: 23px;
        width: 100%;
    }
    &__text {
        text-align: start;
        font-weight: 500;
        font-size: 16px;
        color: rgb(102, 102, 102);
        line-height: 1.25em;
    }
    &__button {
        background-color: #7f39fb;
        border-radius: 3em;
        padding: .7em 4em .7em 4em;
        font-size: 17px;
        font-weight: 500;
        transition: .4s;
        max-width: 20em;
        font-family: 'Noto Sans', sans-serif;
        letter-spacing: normal;
        color: #fff;
        // border: 2px solid red;
        filter: drop-shadow(0 2.5px 5px rgba(0, 0, 0, .8));
        &:hover {
            transition: .4s;
            background-color:#5d2ab5;
            transition: .4s;
            filter: drop-shadow(0 0px 2.5px rgba(0, 0, 0, .3));
        }
    }
}


.green {
    background-color: #014743;
    &:hover {
        background-color: #02311d;
}
}
.red {
    background-color: #ff0000;
    &:hover {
        background-color: #dc0a0a;
    }
}
</style>