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

<style lang="scss"></style>
