<template>
	<view>
		小说
		<u-tabbar
		    :list="tabbar"
			:mid-button="false"
			:inactive-color="'#909399'"
			:activeColor="'#5098FF'"
			:bg-color="'#ffffff'"
			:border-top="true"
		></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabbar: ''
			}
		},
		onLoad() {
			this.tabbar=this.$store.state.tabbarList
			this.$store.commit('setMyCount',10)
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
