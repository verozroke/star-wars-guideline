<template>
    <div>
        <div class="courses">
            <div class="courses__container">
                <div class="courses__route-box">
                    <ul class="courses__route">
                            <li  v-for="lecture in experiencedStore.lectures" :key="lecture.id" class="courses__item item">
                                <div class="item__title">{{ lecture.id }}. {{ lecture.title }}</div>
                                <div class="item__row">
                                    <div class="item__outer-circle-video" :class="{'hidden': lecture.title === 'АТТЕСТАЦИЯ'}">
                                        <div class="item__inner-circle-video" :class="[lecture.btnColor]" @click="getInfo(lecture)">
                                            <img class="play-icon" src="../../img/route/icons/play-icon.png" alt="">
                                        </div>
                                    </div>            
                                    <div class="item__line" :class="{'hidden': lecture.title === 'АТТЕСТАЦИЯ'}"></div>
                                    <div class="item__outer-circle-video">
                                        <div class="item__inner-circle-video" :class="[lecture.test.btnColor]" @click="getInfo(lecture.test)">
                                            <img class="test-icon" src="../../img/route/icons/testi-icon.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div :id="`endline-${lecture.id}`" class="item__endline"></div>
                            </li>
                            <!-- <li v-for="test in experiencedStore.tests" :key="test.id" class="item__test">
                                <div class="item__title">{{ test.title }}</div>
                            </li> -->
                            <!-- test -->
                        
                    </ul>
                </div>
                <transition name="slide" mode="out-in">
                    <div :key="switcher" class="courses__card-box">
                        <div style="display: none;">{{ switcher }}</div>
                        <div class="courses__card card">
                            <div class="card__title">{{  (title === 'Основы дпшм' ? title = 'Основы ДПШМ' : title) ? title : 'Добро пожаловать!' }}</div>
                            <div style="white-space: pre-line;" class="card__text">
                                {{ desc ? desc : 'Время проходить тесты!' }}
                            </div>
                            <a target="_blank" v-if="btnColor" :href="link" class="card__button" :class="[btnColor]">{{ desc ? (hasVideo ?  'Посмотреть видео' : 'Скачать документы') : 'Перейти в тест' }}</a>
                        </div> 
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useExperiencedStore } from '../../stores/ExperiencedStore'
import FooterSection from '../../components/FooterSection.vue';
import { onMounted } from 'vue';

onMounted(() =>{
  window.scrollTo(0, 0)
})

const experiencedStore = useExperiencedStore()


const post = {
    title: ref(''),
    desc: ref('Ты опытный сотрудник, который в работе использует, изученные знания для достижения результатов. \n\nПройдя путь по карте уровня 2.0. ты можешь изучить и/или подтвердить свои знания в базовых тренингах по продажам.'),
    btnColor: ref(''),
    hasVideo: ref(false),
    link: ref(''),
}

let { title, desc, btnColor, hasVideo, link } = post

let switcher = ref(0)

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}


function getInfo(infoParam) {
    title.value = capitalize(infoParam.title)
    desc.value  = infoParam.description
    btnColor.value = infoParam.btnColor
    hasVideo.value = infoParam.hasVideo
    link.value = infoParam.link
    switcher.value++
}




</script>

<style lang="scss" scoped>


.courses {
    margin-top: 1em;
    &__container {
        position: relative;
        gap: 3em;
        padding: 0 2em;
        display: flex;
        min-height: 50em;
        justify-content: center;
        background-color: #fff;
        border: 5px solid #e5e5e5;
        border-radius:1em;
        // filter: drop-shadow(0 0px 20px rgba(0, 0, 0, 0.5))
    }
    &__route-box {
        width: 50%;
        // border: 1px solid black;
        display: flex;
        justify-content: center;
    }
    &__card-box {
        width: 50%;
        // border: 1px solid red;
    }
    &__route {
        margin: 3em 0 0 0;
        // border: 1px solid blue;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3em;
    }
    &__item {

    }
    
}

.card {
    position: sticky;
    top: 7em;
    margin: 3em 0 0 0;
    border: 2px solid #e5e5e5;
    background-color: #fff;
    font-family: 'Noto Sans', sans-serif;
    filter: drop-shadow(0 4px 0px rgba(0, 0, 0, 0.359));
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 40px;
    border-radius: 1em;
    justify-content: center;
    gap: 2em;
    height: auto;
    &__title {
        text-align: center;
        font-weight: 700;
        font-size: 24px;
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
        padding: .7em 5em .7em 5em;
        font-size: 18px;
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

.slide {
    &-enter-from {
        opacity: 0;
        transform: translate(25px, -50px);
        // transform: translateX(-100px);
    }
    &-enter-active {
        transition: all .2s ease-in;
    }
    &-leave-to {
        opacity: 0;
        transform: translate(-25px, 50px);
    }
    &-leave-active {
        transition: all .2s ease-out;
    }
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    &__title {
        font-size: 28px;
        font-weight: 700;
        text-align: center;
    }
    &__line {
        height: 50px;
        width: 7px;
        background-color: rgb(176, 176, 176);
        &.hidden {
            opacity: 0;
            height: 0;
            width: 0;
        }
    }
    &__row {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__endline {
        margin-top: 1em;
        width: 20em;
        height: 2px;
        border-radius: 1em;
        background-color: red;
    }
    &__outer-circle-video {
        background-color: #f8f9fa;
        border: 7px solid rgb(176, 176, 176);
        border-radius: 50%;
        width: 100px;
        height: 100px;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(.5em .25em .25em rgba(0, 0, 0, 0.33));
        
        &.hidden {
            opacity: 0;
            height: 0;
            width: 0;
        }
        &.completed {
            border-color: #ffc116;
        }
    }
    &__inner-circle-video {
        background-color: #7f39fb;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .4s;
        &:hover {
            background-color:#5d2ab5;
            transition: .4s;
        }
        &.disabled {
            background-color: #9a9a9a;
        }
        &.completed {
            background-color:#ffb114;
            &:hover {
                background-color:#ffc400;
            }
        }
    }
}

.purple {
    background-color: #7f39fb;
    &:hover {
        background-color:#5d2ab5;
        transition: .4s;
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
.orange {
    background-color: #ffaf40;
    &:hover {
        background-color: #ff9600;
    }
}
.blue {
    background-color: #1cb0f6;
    &:hover {
        background-color: #1b97d1;
    }
}
.pink {
    background-color: #e73ba0;
    &:hover {
        background-color: #cc348d;
    }
}


.play-icon {
    height: 40px;
    width: 40px;
    margin: 0 0 0 10px;
}

.test-icon {
    height: 50px;
    width: 50px;
    margin: 0 0 0 5px;
}

#endline-5 {
    opacity: 0;
}



</style>