<template>
	<div class="app-container">
		<!-- header区域 -->
		<mt-header fixed title="车发发  一站式汽车服务"></mt-header>

		<!-- center区域 路由router-view -->
		<transition>
			<router-view></router-view>
		</transition>
		<!-- tabber区域 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 50px;
  overflow-x: hidden;
	padding-bottom: 50px;
 .mint-header.is-fixed{
	 font-size: 16px;
 }
 .mint-header{
	 height: 50px;
 }
	.mui-bar-tab .mui-tab-item1.mui-active {
		color: #007aff;
	}

	.mui-bar-tab .mui-tab-item1 {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}

	.mui-bar-tab .mui-tab-item1 .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s linear;
}
</style>
