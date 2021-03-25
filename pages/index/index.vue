<template>
	<view>
		<u-navbar 
			:is-back="false" 
			title="" 
			:is-fixed="true"
			title-color="#fff" 
			back-icon-color="#ffffff"
		>
				<view class="slot-wrap">
					<view class="search-wrap" >
						<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
						<u-search :disabled="true" @click="search"  :show-action="false" height="55" :action-style="{color: '#fff'}"></u-search>
					</view>
				</view>
				<view class="navbar-right" slot="right" >
					<view class="message-box right-item">
						<u-icon name="icon custom-icon custom-icon-email" color="#000000" size="50"></u-icon>
						<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
					</view>
				</view>
			</u-navbar>
		<view class="content">
			<p>首页</p>
			
		</view>
		<view>
			<u-tabbar
			    :list="tabbar"
				:mid-button="false"
				:inactive-color="'#909399'"
				:activeColor="'#5098FF'"
				:bg-color="'#ffffff'"
				:border-top="true"
			></u-tabbar>
		</view>
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
		},
		methods: {
			search(){
				uni.navigateTo({
				    url: '../search/index'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}
	
	.navbar-right {
		margin-right: 24rpx;
		display: flex;
	}
	
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
	
	.right-item {
		margin: 0 12rpx;
		position: relative;
		color: #ffffff;
		display: flex;
	}
	
	.message-box {
		
	}
	
	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}
	
	.map-wrap {
		display: flex;
		align-items: center;
		padding: 4px 6px;
		background-color: rgba(240,240, 240, 0.35);
		color: #fff;
		font-size: 22rpx;
		border-radius: 100rpx;
		margin-left: 30rpx;
	}
	
	.map-wrap-text {
		padding: 0 6rpx;
	}
</style>