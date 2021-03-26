<template>
	<view>
		<u-navbar :is-back="false" title="" :is-fixed="true" title-color="#fff" back-icon-color="#ffffff">
			<view class="slot-wrap">
				<view class="search-wrap">
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search :disabled="true" @click="search" :show-action="false" height="55" :action-style="{ color: '#fff' }"></u-search>
				</view>
			</view>
			<view class="navbar-right" slot="right">
				<view class="message-box right-item">
					<u-icon name="icon custom-icon custom-icon-email" color="#000000" size="50"></u-icon>
					<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
				</view>
			</view>
		</u-navbar>
		<view></view>
		
		<view class="wrap">
			<view>
				<u-tabs-swiper ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
				 swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottom">
						<view class="page-box">
							<u-grid v-if="index==0" :col="3">
									<u-grid-item>
										<u-image src='https://ci.xiaohongshu.com/2b498c79-1bee-575f-95c7-8e98bb891aa1?imageView2/2/w/1080/format/jpg/q/75' width="220rpx" height="300rpx"></u-image>
										<view class="grid-text">地缚少年花子君</view>
										<view class="grid-text" style="color: #909399;">看到8话/61话</view>
									</u-grid-item>
									<u-grid-item>
										<u-image src='https://i03piccdn.sogoucdn.com/e1af0fa7a364af64' width="220rpx" height="300rpx"></u-image>
										<view class="grid-text">鬼灭之刃</view>
										<view class="grid-text" style="color: #909399;">看到2话/39话</view>
									</u-grid-item>
									<u-grid-item>
										<u-image src='https://p1.pstatp.com/large/2cc0000f551eddafc0c' width="220rpx" height="300rpx"></u-image>
										<view class="grid-text">黑执事</view>
										<view class="grid-text" style="color: #909399;">看到1话/82话</view>
									</u-grid-item>
									<u-grid-item>
										<u-image src='http://p9-tt.byteimg.com/large/pgc-image/6214cf949af740dd813b134c837335c8' width="220rpx" height="300rpx"></u-image>
										<view class="grid-text">火影忍者</view>
										<view class="grid-text" style="color: #909399;">看到4话/714话</view>
									</u-grid-item>
								</u-grid>
								<view style="padding: 20rpx;" v-if="index==1">
									<u-swiper :mode="'none'" :list="list2" :effect3d="true" height="350"></u-swiper>
									
									<u-card margin="1rpx 1rpx" padding="10" :border="false" :foot-border-top="false" :head-border-bottom="false">
											<view class="" slot="body">
												<u-image src='https://img2.huashi6.com/images/resource/p16480/f31503680/2020/12/04/1412122_5112281711.jpg?imageView2/3/q/100/interlace/1/w/300/h/500/format/webp' width="100%" height="400rpx"></u-image>
											</view>
											<view class="" slot="foot">
												<view style="font-size: 38rpx; color: #000000; margin-bottom: 10rpx;">七宗罪</view>
												<u-tag style="margin-right: 20rpx;" text="玄幻" mode="light" size="mini" type="primary" />
												<font style="margin-right: 20rpx;">  第71话  </font>
												<u-icon name="chat-fill" size="30" color="" label="30"></u-icon>
											</view>
									</u-card>
									<u-card margin="1rpx 1rpx" padding="10" :border="false" :foot-border-top="false" :head-border-bottom="false">
											<view class="" slot="body">
												<u-image src='https://pic2.zhimg.com/80/v2-7a817aef25109c5a5be2609239690541_hd.jpg' width="100%" height="400rpx"></u-image>
											</view>
											<view class="" slot="foot">
												<view style="font-size: 38rpx; color: #000000; margin-bottom: 10rpx;">七宗罪</view>
												<u-tag style="margin-right: 20rpx;" text="玄幻" mode="light" size="mini" type="primary" />
												<font style="margin-right: 20rpx;">  第71话  </font>
												<u-icon name="chat-fill" size="30" color="" label="30"></u-icon>
											</view>
									</u-card>
								</view>
								
								
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>

		<u-tabbar  :list="tabbar"   :mid-button="false" :inactive-color="'#909399'" :activeColor="'#5098FF'" :bg-color="'#ffffff'" :border-top="true"></u-tabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabbar: '',
			list: [
				{
					name: '书架'
				},
				{
					name: '推荐'
				},
				{
					name: '热门'
				},
				{
					name: '排行'
				},
				{
					name: '分类'
				},
			],
			list2: [{
					image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqp4KMIAS5SNdll5r8b16Yn8FH5tBwdovGzQ&usqp=CAU',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东'
				},
				{
					image: 'https://img2.a9vg.com/i/600_/data/sharedata/XY-A9VG-1/d53d3c42b62c4f0019a2c049d0cc48af.JPEG',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				},
				{
					image: 'https://media.wepg.online/public/images/user_3102/1583378306_050320110318260000005e606f82723f9.jpg',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}
			],
			// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
			current: 0, // tabs组件的current值，表示当前活动的tab选项
			swiperCurrent: 0 // swiper组件的current值，表示当前那个swiper-item是活动的
		};
	},
	onLoad() {
		this.tabbar = this.$store.state.tabbarList;
	},
	methods: {
		// tabs通知swiper切换
		tabsChange(index) {
			this.swiperCurrent = index;
		},
		// swiper-item左右移动，通知tabs的滑块跟随移动
		transition(e) {
			let dx = e.detail.dx;
			this.$refs.uTabs.setDx(dx);
		},
		// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
		// swiper滑动结束，分别设置tabs和swiper的状态
		animationfinish(e) {
			let current = e.detail.current;
			this.$refs.uTabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		},
		search(){
			uni.navigateTo({
			    url: '../search/index'
			});
		},
		// scroll-view到底部加载更多
		onreachBottom() {}
	}
};
</script>

<style lang="scss" scoped>

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

.slot-wrap {
	display: flex;
	align-items: center;
	flex: 1;
}


.wrap {
	display: flex;
	flex-direction: column;
	height: calc(85vh - var(--window-top));
	width: 100%;
}
.swiper-box {
	flex: 1;
}
.swiper-item {
	height: 100%;
}



</style>
