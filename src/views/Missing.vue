<template>
    <div class="missing">
        <div class="missing__container">
            <div class="missing__title">404</div>
            <div class="missing__subtitle">Not Found.</div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

.missing {
    min-height: 82.3vh;
    
    &__container {
        min-height: 82.3vh;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    &__title {
        font-weight: 700;
        font-size: 200px;
    }
    &__subtitle {
        font-size: 75px;
        text-align: center;
        margin-left: 30px;
    }
}

</style>