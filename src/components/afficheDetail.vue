<template>
	<div class="affiche">
		<div class="afficheTitle">
			<img src="../assets/img/Menu.png" height="38" width="48" alt="" class="menuImg" @click="showMenu">
		</div>
		<div class="afficheBody">
			<div class="afficheBody_title">
				关于公司宿舍住房通知
			</div>
			<div class="afficheBody_content">
				<div class="afficheContent_info">
					<span class="IssueRange">发布范围：全公司(郭乐超)</span>
					<span class="IssueTime">2017-09-22</span>
				</div>
				<div class="afficheContent_detail">
								各位同事：
				 大家好!
					目前公司已在萧山区回澜南苑安排好房子作为员工宿舍，有
				住宿需求的员工，可以先到行政部——王琪处报名等级。报名
				截止日期：4月26日（周三）16：00前。（男女生宿舍暂时各
				一套，每套住6人）
					
				 注：一旦入住公司宿舍，将不再同事享受公司的住房补贴

				 人资行政部
				 2017-04-22			
				</div>
			</div> 
		</div>
		<transition name="bounce">
			<menuList v-if="menuClicked" v-on:toCloseMenu="menuClose"  name="bounce"></menuList>
	</transition>
	</div>
	
</template>	
<script>
//  1rem=100px;
import menuList from './menuList'
export default {
  name: 'affiche',
  data () {
    return {
      msg: '',
      showSe: false,
      menuClicked: false
    }
  },
  components: {
    menuList
  },
  methods: {
    showSearch: function () {
      this.showSe = true
    },
    showSearchContent: function () {
      this.showSe = false
    },
    showMenu: function () {
      this.menuClicked = true
      console.log(this.menuClicked)
    },
    menuClose: function () {
      this.menuClicked = false
    }
  }
}
</script>
<style scoped>
	.affiche{
		width: 100%;
		height: 100%;
		min-width: 320px;
		max-width: 640px;
		background: #343340;
	}
	.afficheTitle{
		width: 100%;
		height: 5rem;
		min-width: 320px;
		max-width: 640px;
		background: #2A2933;
		border-top: 1px solid #060714;
		box-shadow:  0 2px 2px #060714;
		position: fixed;
		top:0;
	}
	.afficheBody{
		width: 100%;
		background: #343340;
		height: 100%;
		overflow: auto;
		padding: 0 1rem 1rem 1rem;
		box-sizing: border-box;
		margin:0 auto;
	}
	.afficheBody_title{
		margin-top:6rem;
		width:auto;
		height: 4.3rem;
		font-size: 1.5rem;
		color: #ffffff;
		background:#545266;
		border-radius: 0.5rem 0.5rem 0  0;
		line-height: 4.3rem;
		padding-left: 1rem;
	}
	.afficheBody_content{
		width: 100%;
		background: #ffffff;
		font-size: 1.2rem;
		padding: 0 1rem 1rem 1rem;
		box-sizing: border-box;
		min-height:82%;
		border-radius: 0 0 0.5rem 0.5rem;
	}
	.afficheContent_info{
		overflow: hidden;
		height: 3.2rem;
		line-height: 3.2rem;
		color: #8A9099; 
	}
	.IssueRange{
		float: left;
	}
	.IssueTime{
		float: right;
	}
	.afficheContent_detail{
		color: #2A2933;
		line-height: 1.7rem;
	}
	.menuImg{
		float: right;
		margin-right: 1rem;
		margin-top: 1.5rem;
		width: 2.4rem;
		height: 1.9rem;
	}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    top: -40rem;
  }
  100% {
    top: 0;
  }
}
</style>
