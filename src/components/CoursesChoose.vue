<template>
    <div id="courses-page" class="courses-page">
        <div class="courses-page__container">
            <div class="courses-page__title">Выбери свой путь</div>
            <ul class="courses-page__row">
                <li class="courses-page__item">
                    <div class="courses-page__number">Уровень I</div>
                    <router-link :to="{name: 'CoursesNewbie'}" class="courses-page__post post">
                        <div class="post__image"><img src="../img/courses-choose/1.png" alt=""></div>
                        <div class="post__text">Юный падаван</div>
                    </router-link>
                    <div class="courses-page__subtitle">Данный уровень для новеньких сотрудников торговой команды (менее 6 мес. в Компании)</div>
                </li>
                <li class="courses-page__item">
                    <div class="courses-page__number">Уровень II</div>
                    <router-link :to="{name: 'CoursesExperienced'}" class="courses-page__post post">
                        <div class="post__image"><img src="../img/courses-choose/2.jpg" alt=""></div>
                        <div class="post__text">Джедай Продаж</div>
                    </router-link>
                    <div class="courses-page__subtitle">Данный уровень для опытных сотрудников торговой команды (более 6 мес. в Компании)</div>
                </li>
                <li class="courses-page__item">
                    <div class="courses-page__number">Уровень III</div>
                    <router-link :to="{name: 'CoursesPro'}" class="courses-page__post post">
                        <div class="post__image"><img src="../img/courses-choose/3.png" alt=""></div>
                        <div class="post__text">Мастер Продаж</div>
                    </router-link>
                    <div class="courses-page__subtitle">Данный уровень для продвинутых сотрудников торговой команды</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.courses-page {
    min-height: 43em;
    &__container {
        min-height: 43em;
        font-family: 'Noto Sans', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4em;
    }
    &__title {
        margin: 1em 0 0 0;
        font-size: 50px;
        font-weight: 700;
    }
    &__row {
        display: flex;
        width: 100%;
        height: 400px;
        justify-content: center;
        align-items: center;
    }
    &__item {
        width: 33.333%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: space-between;
        gap: 1em;
    }
    &__number {
        font-weight: 700;
        font-size: 24px;

    }
    &__post {
    }
    &__subtitle {
        text-align: center;
        width: 300px;
        font-family: 'Old Standard TT', serif;
        font-size: 19px;
        color: rgba(0, 0, 0, 0.647);
        line-height: 1.25em;
    }
}

.post {
    // border: 2px solid #e5e5e5;
    background-color: #fff;
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.8));
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 275px;
    padding: 20px 10px;
    border-radius: 1em;
    justify-content: center;
    gap: 1em;
    height: 400px;
    &__text {
        text-align: center;
        font-weight: 700;
        font-size: 24px;
    }
    &__image {
        height: 250px;
        width: 200px;
        & img {
            border-radius: .2em;
            height: 250px;
            width: 200px;
            object-fit: cover;
        }
        
    }
    transition: .3s;
    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.8));
        transition: .3s;
    }
    &:hover {
        color: rgb(195, 65, 65);;
    }

  // Hover styles
  &:hover .post__image::before,
  &:hover .post__image::after {
    width: 100%;
    border-radius: .2em;
    height: 100%;
  }

  &:hover .post__image::before {
    border-top-color: rgb(195, 65, 65);; // Make borders visible
    border-right-color: rgb(195, 65, 65);;
    border-radius: .2em;
    transition:
      width 0.1s ease-out, // Width expands first
      height 0.1s ease-out 0.1s; // And then height
  }

  &:hover .post__image::after {
    border-bottom-color: rgb(195, 65, 65); // Make borders visible
    border-left-color: rgb(195, 65, 65);
    border-radius: .2em;
    transition:
      border-color 0s ease-out 0.2s, // Wait for ::before to finish before showing border
      width 0.1s ease-out 0.2s, // And then exanding width
      height 0.1s ease-out 0.34s; // And finally height
  }
}
.post__image {
    transition: color 0.3s;
    border-radius: .2em;
    position: relative;
    vertical-align: middle;

  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &::before,
  &::after {
    // Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
    border: 3px solid transparent;

    width: 0;
    height: 0;
  }

  // This covers the top & right borders (expands right, then down)
  &::before {
    top: 0;
    left: 0;
  }

  // And this the bottom & left borders (expands left, then up)
  &::after {
    bottom: 0;
    right: 0;
  }
  
  
}

a {
    color: inherit;
    &:visited {
        color: inherit
    }
}


@media only screen and (max-width: 855px) {

    .courses-page {
        min-height: 108sem;
        &__row {
            justify-content: flex-start;
            min-height: 108em;
            flex-direction: column;
            gap: 3em;
            height: auto;
        }
        &__item {
            height:auto;
            width: 100%;
        }
    }
}

@media only screen and (max-width: 855px) {
    .courses-page {
        &__title {
            font-size: 35px;
        }
    }
}

@media only screen and (max-width: 350px) {
    .courses-page {
        &__container {
            gap: 2em;
        }
        &__title {
            font-size: 25px;

        }
    }
}

@media only screen and (max-width: 281px) {
    .courses-page__subtitle {
        width: 260px;
    }

}




</style>