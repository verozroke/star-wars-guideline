<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__line"></div>
            <div class="footer__row">
                <div class="footer__name">
                    <div class="footer__logo"><RouterLink :to="{name: 'Home'}"><img src="../img/footer/company_logo.png" alt=""></RouterLink></div>
                    <div class="footer__title">© Apple City Corps</div>
                </div>
                <div class="footer__media">
                    <ul class="footer__list">
                        <!-- <li class="footer__el"><a target="_blank" href="https://twitter.com/applecityllc"><img src="../img/footer/icons/twitter.png" alt=""></a></li>
                        <li class="footer__el"><a target="_blank" href="https://www.instagram.com/applecity_careers"><img src="../img/footer/icons/insta.png" alt=""></a></li>
                        <li class="footer__el"><a target="_blank" href="https://www.facebook.com/APPLECityLLC/?locale=ru_RU"><img src="../img/footer/icons/facebook.png" alt=""></a></li> -->
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.footer {
    height: 72px;
    background-color: #010101;
    color: #c0c0c0c4;
    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    &__row {
        display: flex;
        width: 1200px;
        justify-content: space-between;
    }
    &__list {
        height: 72px;
        display: flex;
        width: 128px;
        justify-content: space-between;
        align-items: center;
    }
    &__name {
        display: flex;
        align-items: center;
        gap: 2em;
        color: #c0c0c0c4;
    }
    &__logo {
        width: 45px;
        height: 56px;
        & img {
            width: 45px;
            height: 56px;
        }
    }
    &__el {
        height: 25px;
        width: 25px;
        &>a>img {
            height: 25px;
            width: 25px;
        }
    }
}

</style>
