import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		tabbarList:[{
						iconPath: "home",
						selectedIconPath: "home-fill",
						text: '首页',
						count: 2,
						isDot: true,
						customIcon: false,
						pagePath: "/pages/index/index"
					},
					{
						iconPath: "icon custom-icon custom-icon-book3",
						selectedIconPath: "icon custom-icon custom-icon-book2",
						text: '小说',
						customIcon: false,
						pagePath: "/pages/novel/index"
					},
					{
						iconPath: "icon custom-icon custom-icon-manhua",
						selectedIconPath: "icon custom-icon custom-icon-manhua1",
						text: '漫画',
						midButton: true,
						customIcon: false,
						pagePath: "/pages/comic-book/index"
					},
					{
						iconPath: "icon custom-icon custom-icon-dongmanxian",
						selectedIconPath: "icon custom-icon custom-icon-dongman1",
						text: '动漫',
						customIcon: false,
						pagePath: "/pages/animation/index"
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我的',
						count: 23,
						isDot: false,
						customIcon: false,
						pagePath: "/pages/my/index"
					},
				]
	},
    mutations: {
		setMyCount(state,count){
			state.tabbarList[4].count=count
		}
	},
    actions: {}
})
export default store