<template>
    <header class="header">
        <div class="header__container">
            <router-link :to="{name: 'Home'}" class="header__logo"><img src="../img/header/company_logo.png" alt=""></router-link> 
            <div class="header__nav">
                <ul class="header__list">
                    <li class="header__el"><router-link :to="{name: 'Home'}">Главная</router-link></li>
                    <li class="header__el"><router-link :to="{name: 'Courses'}">Курсы</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
    position: sticky;
    top: 0;
    z-index: 100000;
    background-color: #010101;
    backdrop-filter: brightness(50%);
    &::after {
        position: absolute;
        content: "";
        height: 1px;
        background-color: red;
        border-radius: 5em;
        width: 500px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 100%;       
    }
    &__container {
        position: relative;
        height: 4.5em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
    }
    &__logo {
        margin: 0 0 0 1em;
        width: 45px;
        height: 56px;
        img {
            width: 45px;
            height: 56px;
        }
    }
    &__nav {
        color: #fff;
        display: flex;
        align-items: center;
        width: 1000px;
        justify-content: flex-end;
        gap: 5em;
        font-weight: 700;
        margin: 0 1em 0 0;
    }
    &__list {
        display: flex;
        width: 150px;
        justify-content: space-between;
    }
    &__el {
        transition: .4s;
        &:hover {
            transition: .4s;
            color: red;
        }
    }
    &__login {
        background-color: #fff;
        border-radius: 3em;
        padding: .5em 2em;
        font-size: 16px;
        font-weight: 700;
        transition: .4s;
        max-width: 10em;
        &:hover {
            transition: .4s;
            color: #fff;
            background-color: red;
        }
    }
}

a {
    color: #fff;
    &:visited {
        color: #fff;
    }
    transition: .4s;
        &:hover {
            transition: .4s;
            color: red;
        }
}
</style>