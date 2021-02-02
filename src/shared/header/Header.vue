<template>
	<header>
		<div class="container">
			<nav class="navbar">
				<router-link to="/" class="navbar-brand">
					<img src="./../../assets/images/logo.jpg" alt="logo" />
				</router-link>
				<form>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Search" />
						<button class="search fa fa-search"></button>
					</div>
				</form>
			</nav>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Header.scss" lang="scss"></style>
