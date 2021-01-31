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
body {
	background-color: #f5f5f5;
	width: 100%;
}
.container {
	// width: 100%;
	// display: grid;
	padding: 0 10%;
}
.row {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
}
.column {
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
 
	min-height: 100px;
	width: 100%;
}
.mr{
	margin-right: 10px;
}
.ml{
	margin-left: 10px;
}
.pr{
	padding-right: 10px;
}
.pl{
	padding-left: 10px;
}
</style>
