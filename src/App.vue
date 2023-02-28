<script setup>
import { onMounted } from 'vue';
import HeaderVue from './components/HeaderVue.vue';
import FooterSection from './components/FooterSection.vue';

</script>

<template>
	<div class="wrapper">
		<header-vue/>
		<div class="main">
			<router-view  v-slot="{ Component }">
				<transition name="routering" mode="out-in">
					<component :is="Component"></component>
				</transition>
			</router-view>
		</div>
		<FooterSection class="footer"/>
	</div>
</template>

<style lang="scss">

.main {
  flex: 1 1 auto;
}


.wrapper {
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    min-height: 100vh;;
    background-color: #fff;
}

[class*="__container"] {
    max-width: 1200px;
    margin: 0 auto;
	font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-style: normal;   
}
body {
	overflow: overlay;
}
.routering {
	&-enter-from {
		opacity: 0;
		transform: translateX(1000px);
	}
	&-enter-active {
		transition: all 0.3s ease-out;
	}
	&-leave-to {
		opacity: 0;
		transform: translateX(-1000px);
	}
	&-leave-active {
		transition: all 0.3s ease-in;
	}
}


::-webkit-scrollbar {
	width: 13px;
	
	background-color: transparent;
	&-track {
		background-color: transparent;
		margin-block: .5em;
	}
	&-thumb {
		background-color: rgba(47, 47, 47, 0.836);
		border-radius: 100vw;
		transition: .4s;
		border: 4px solid rgba(0, 0, 0, 0);
		background-clip: padding-box;
		&:hover {
			background-color: rgb(28, 28, 28);
			transition: .4s;
		}
	}
	
}
</style>
