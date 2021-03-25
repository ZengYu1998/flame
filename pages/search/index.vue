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
						<u-search :focus="true" v-model="keyword" :show-action="false" height="55" :action-style="{color: '#fff'}"></u-search>
					</view>
				</view>
				<view class="navbar-right" slot="right" >
					<a @click="back()">取消</a>
				</view>
			</u-navbar>
		<view class="content">
			<p>搜索1</p>
			
		</view>
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				keyword: ''
			}
		},
		onLoad() {
			
		},
		methods: {
			back(){
				uni.switchTab({
				    url: '../index/index'
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