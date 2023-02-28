<template>
    <div>
        <CoursesChoose/>
    </div>
</template>

<script setup>
import CoursesChoose from '../components/CoursesChoose.vue';
import FooterSection from '../components/FooterSection.vue';
import { onMounted } from 'vue';

onMounted(() =>{
  window.scrollTo(0, 0)
})
</script>

<style lang="scss" scoped>
.route {
    background-color: #f8f9fa;
    min-height: 3000px;
    &__container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        &>p {
            position: absolute;
        }
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
        &.completed {
            border-color: #ffc116;
        }
    }
    &__final {
        text-align: center;
        background-color: red;
        color: #f8f9fa;
        font-size: 24px;
        padding: 1em 5em;
        width: 22em;
        border-radius: 3em;
        margin: 1em 0 0 0;
        filter: drop-shadow(1em .5em .5em rgba(0, 0, 0, 0.33));
        &:hover {
            background-color: rgb(221, 0, 0);
            transition: .4s;
            filter: drop-shadow(.5em .25em .25em rgba(0, 0, 0, 0.33));            
        }
        &.disabled {
            background-color: #9a9a9a;
            width: 32em;
        }
        &.completed {
            background-color:#ffc400;
            width: 25em;
            &:hover {
                background-color:#ffb114;
            }
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
        &.green {
            background-color: #007f48;
            &:hover {
                background-color: #00532f;
            }
        }
        &.red {
            background-color: #ff4b4b;
            &:hover {
                background-color: #e31c1c;
            }
        }
        &.orange {
            background-color: #ffaf40;
            &:hover {
                background-color: #ff9600;
            }
        }
        &.blue {
            background-color: #1cb0f6;
            &:hover {
                background-color: #1b97d1;
            }
        }
        &.pink {
            background-color: #e73ba0;
            &:hover {
                background-color: #cc348d;
            }
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
    &__title {
        margin: 1em 0 2em 0;
        font-size: 40px;
        text-align: center;
        font-family: 'Hind', sans-serif;
        font-weight: 700;
    }
    &__subtitle {
        text-align: center;
        background-color: red;
        color: #f8f9fa;
        font-size: 24px;
        padding: 1em 5em;
        width: 20em;
        border-radius: 3em;
        margin: 1em 0 1em 0;
        transition: .4s;
        filter: drop-shadow(1em .5em .5em rgba(0, 0, 0, 0.33));
        &:hover {
            background-color: rgb(221, 0, 0);
            transition: .4s;
            filter: drop-shadow(.5em .25em .25em rgba(0, 0, 0, 0.33));            
        }
        &.disabled {
            background-color:#626262;
        }
        &.completed {
            background-color: #ffb300;
            &:hover {
                background-color: #eda602;
            }
        }
    }
    &__row {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 940px;
        width: 338.48px;
    }
    &__box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__line {
        height: 50px;
        width: 7px;
        background-color: rgb(176, 176, 176);
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

.card {
    margin: 20px;
    border: 2px solid #e5e5e5;
    background-color: #fff;
    font-family: 'Noto Sans', sans-serif;
    filter: drop-shadow(0 4px 0px rgba(0, 0, 0, 0.359));
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 20px 40px;
    border-radius: 1em;
    justify-content: center;
    gap: 1em;
    height: 275px;
    &__title {
        text-align: start;
        font-weight: 700;
        font-size: 24px;
        width: 100%;
    }
    &__text {
        text-align: start;
        font-weight: 500;
        font-size: 16px;
    }
    &__button {
        margin: 1em 0 0 0;
        background-color: red;
        border-radius: 3em;
        padding: .7em 5em .7em 5em;
        font-size: 18px;
        font-weight: 500;
        transition: .4s;
        max-width: 20em;
        font-family: 'Noto Sans', sans-serif;
        letter-spacing: normal;
        color: #fff;
        border: 2px solid red;
        filter: drop-shadow(0 2.5px 5px rgba(0, 0, 0, .8));
        &:hover {
            transition: .4s;
            color: red;
            background-color: #fff;
            filter: drop-shadow(0 0px 2.5px rgba(0, 0, 0, .3));
        }
    }
}
</style>