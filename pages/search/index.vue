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
			<view class="list hot" v-if="hotList.length > 0">
				<view class="head">
					<view>热搜</view>
				</view>
				<view class="list_ls">
					<view class="item"  v-for="(item,index) in hotList" :key="index" >
						<font>{{index+1}} </font>
					 {{item}}
					</view>
				</view>
			</view>
			<view class="list hot" v-if="hotList.length > 0">
				<view class="head">
					<view>搜索历史</view>
				</view>
				<view class="list_ls">
					<view class="item" :class="'square round-fill'" v-for="(item,index) in hotList" :key="index" >{{item}}</view>
				</view>
			</view>
		</view>
	</view>
	
	
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				hotList:['1','2']
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
	.list{padding: 0 20rpx;
		.head{display: flex;  justify-content: space-between; color: #1A1A1A;font-size: 30rpx;margin-bottom: 28rpx; margin-top: 20rpx;font-weight:bold;}
		.list_ls .item{display: inline-block;padding: 8rpx 24rpx;margin:0rpx 16rpx 22rpx 0rpx;font-size: 28rpx;color: #1A1A1A;
			&.round{border: 2rpx solid #EFEFEF;border-radius: 24rpx;font-size: 24rpx;color: #919191;}
			&.round-fill{background-color:#EFEFEF;border: 2rpx solid #EFEFEF;border-radius: 24rpx;font-size: 24rpx;color: #919191;}
			&.square{border: 2rpx solid #EFEFEF;border-radius: 8rpx;font-size: 24rpx;color: #919191;}
			&.square-fill{background-color:#EFEFEF; border-radius: 8rpx;font-size: 24rpx;color: #919191;}
		}
	}
</style>