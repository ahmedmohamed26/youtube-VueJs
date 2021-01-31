<template>
	<Header />
	<router-view />
</template>

<script>
import Header from './shared/header/Header';
export default {
	components: {
		Header,
	},
};
</script>

<style lang="scss">
body{
	background-color: #f5f5f5;
}
.container {
	display: grid;
	padding: 0 100px;
}
</style>
