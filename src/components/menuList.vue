<template>
	<div class="menuList">
		<div class="menuListItem">
			<div class="menuListItemClose">
				<div class="menuListRight">
					<i class="iconfont icon-tongzhilanchahao" @click="closeMenu"></i>
				</div>
			</div>
		</div>
		<div class="menuListItem">
			<router-link tag="div" class="menuListItemContent" to="/afficheAndNewList">
				<div class="menuListLeft">
					<i class="iconfont icon-wodezhuomian"></i>
					<span class="menuListName">我的桌面</span>
				</div>
				<div class="menuListRight">
					<span class="menuListNewCount">9</span>
				</div>
			</router-link>
		</div>
		<div class="menuListItem">
				<router-link tag="div" class="menuListItemContent" to="/afficheDetail">
				<div class="menuListLeft">
					<i class="iconfont icon-duihao"></i>
					<span class="menuListName">任务总览</span>
				</div>
				<div class="menuListRight">
					<span class="menuListNewCount">9</span>
				</div>
			</router-link>
		</div>
		<div class="menuListItem">
			<div class="menuListItemContent">
				<div class="menuListLeft">
					<i class="iconfont icon-xinjianrenwu"></i>
					<span class="menuListName">新建任务</span>
				</div>
				<div class="menuListRight">
					<span class="menuListNewCount">9</span>
				</div>
			</div>
		</div>
		<div class="menuListItem">
			<div class="menuListItemContent">
				<div class="menuListLeft">
					<i class="iconfont icon-daiban"></i>
					<span class="menuListName">代办事项</span>
				</div>
				<div class="menuListRight">
					<span class="menuListNewCount">9</span>
				</div>
			</div>
		</div>
		<div class="menuListItem">
			<div class="menuListItemContent">
				<div class="menuListLeft">
					<i class="iconfont icon-xiaoxi"></i>
					<span class="menuListName">消息中心</span>
				</div>
				<div class="menuListRight">
					<span class="menuListNewCount">9</span>
				</div>
			</div>
		</div>
		<div class="menuListItem">
			<div class="menuListItemContent">
				<div class="menuListLeft">
					<i class="iconfont icon-laba"></i>
					<span class="menuListName">消息中心</span>
				</div>
				<div class="menuListRight">
					<span class="menuListNewCount">9</span>
				</div>
			</div>
		</div>
		<div class="menuListItem">
			<div class="menuListItemContent">
				<div class="menuListLeft">
					<i class="iconfont icon-sanhengzongleimu"></i>
					<span class="menuListName">岗位职责</span>
				</div>
				<div class="menuListRight">
					<span class="menuListNewCount">9</span>
				</div>
			</div>
		</div>
	</div>
</template>	
<script>
export default {
  name: 'menuList',
  data () {
    return {
    }
  },
  methods: {
    closeMenu: function () {
      this.$emit('toCloseMenu')
    }
  }
}
</script>
<style>
.menuList{
		width: 100%;
		min-width: 320px;
		max-width: 640px;
		background: #2A2933;
		margin:0 auto;
		font-size: 1.5rem;
		color: #B5BECA;
		position: fixed;
	    top: 0;
	    z-index: 10000;
}
	.menuListItem{
		width: 100%;
		height: 5rem;
		line-height: 5rem;
		text-align: center;
		overflow: hidden;
	}
	.menuListItemContent{
		display: inline-block;
		width: 92%;
		height: 5rem;
		line-height: 5rem;
		border-bottom: 1px solid #545266;
		padding: 0 3.6rem;
		text-align: left;
		box-sizing: border-box;
	}
	.noborder{
		border-bottom: 0!important;
	}
	.menuListLeft{
		float: left;
	}
	.menuListName{
		margin-left: 0.9rem;
	}
	.menuListRight{
		float: right;
	}
	 .menuListNewCount{
		display: inline-block;
		background: #F5473B;
		width: 1.8rem;
		height: 1.8rem;
		border-radius: 50%;
		color: #ffffff;
		text-align: center;
		line-height: 1.8rem;
		font-size: 1rem;
	} 
.menuListItemClose{
		display: inline-block;
		width: 92%;
		height: 5rem;
		line-height: 5rem;
		text-align: right;
		box-sizing: border-box;
		font-size: 1.9rem;
	}
</style>

