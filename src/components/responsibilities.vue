<template>
	<div class="responsibilities">
		<div class="responsibilitieBoxTitle">
			<div class="responsibilitieBox">
				<img src="../assets/img/Menu.png" height="38" width="48" alt="" class="responsibilitiesMenuImg" @click="showMenu">
			</div>	
		</div>
		<transition name="bounce">
			<menuList v-if="menuClicked" v-on:toCloseMenu="menuClose"  name="bounce"></menuList>
		</transition>	
		<div class="responsibilitiesBody">
				<div class="responsibilitieInfo">
					<div class="userInfo">
						<span class="nickName">秦商(子丕)</span>
						<span class="responsibilitieName">UI设计师</span>
						<div class="borderBox"></div>
					</div>
					<ul class="userResInfo">
						<li>
							<span>岗位编号：</span>GWZZ690752
						</li>
						<li>
							<span>所属中心：</span>技术研发中心
						</li>
						<li>
							<span>直接上级：</span>技术总监
						</li>
						<li>
							<span>岗位类别：</span>技术支持
						</li>
						<li>
							<span>岗位编制：</span>GWZZ690752
						</li>
						<li>
							<span>行政等级：</span>专员
						</li>
						<li>
							<span>薪酬等级：</span>P3-P8
						</li>
					</ul>
					<div class="rightFlag">
						<div class="flagContentBox">
							已确认
						</div>
					</div>
				</div>	
				<div class="responsibilitieList">
					<div class="responsibilitieList_title">岗位职责：</div>
					<ul class="responsibilitieList_item">
						<li>1.负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
						<li>2.负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
						<li>3.负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
						<li>4.负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
						<li>5.负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
					</ul>
					<div class="evaluation_title">考核指标：</div>
					<ul class="evaluation_item">
						<li>负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
						<li>负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
						<li>负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
						<li>负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
						<li>负责公司项目负责公司项目负责公司项目负责公司项目负责公司项目</li>
					</ul>
				</div>		
		</div> 
	</div>
</template>	
<script>
import menuList from './menuList'
export default {
  name: 'responsibilities',
  data () {
    return {
      taskInfo: [{
        taskClassify: '任务'
      }, {
        taskClassify: 'BUG'
      }, {
        taskClassify: '任务'
      }],
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
	.responsibilities{
		width: 100%;
		height: 100%;
		min-width: 320px;
		max-width: 640px;
		background: #343340;
		margin:0 auto;
	}
	.responsibilitiesMenuImg{
		margin-right: 0.1rem;
		width: 0.24rem;
		height: 0.19rem;	
		margin-left: 0.15rem;
	}
	.responsibilitieBoxTitle{
		width: 100%;
		height: .5rem;
		min-width: 320px;
		max-width: 640px;
		background: #2A2933;
		border-top: 1px solid #060714;
		box-shadow:  0 2px 2px #060714;
		position: fixed;
		top:0;
		font-size: 0.15rem;
		color:#8A9099;
		z-index: 10000;
	}
	.responsibilitieState{
		margin-left: 0.1rem;
		color: #02C63C;
		font-size: 0.15rem;
	}
	.responsibilitiesBody{
		width: 100%;
		background: #343340;
		height: 100%;
		overflow: auto;
		padding: 0 0.1rem 0.1rem 0.1rem;
		box-sizing: border-box;
		margin:0 auto;
	}
	.responsibilitieBox{
		height: 100%;
		display: flex;
		flex-direction:row;
		justify-content:flex-end;
		align-items:center;
	}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    top: -4rem;
  }
  100% {
    top: 0;
  }
}
.responsibilitieInfo{
	width: 100%;
	border-radius: 0.05rem;
	background: #ffffff;
	padding: 0.07rem 0.15rem;
	box-sizing: border-box;
	 margin-top: 0.6rem; 
	position: relative; 
}
.userResInfo{
	color: #B5BECA ;
	font-size: 0.13rem;
	padding-left: 0;
	margin: 0;
	line-height: 0.28rem;
	margin-top: 0.08rem;
	margin-bottom: 0.08rem;
}
.nickName{
	font-size: 0.15rem;
	color: #545266;
}
.responsibilitieName{
	font-size: 0.15rem;
	margin-left: 0.15rem;
}
.userInfo{
	font-size: 0.15rem;
	line-height: 0.45rem;
	width: 67.5%;
	
	/* -webkit-transform:scale(0.5); */
	position: relative;
}
.borderBox{
	position: absolute;
	bottom:0;
	left: -50%;
	width: 200%;
	background: #E6E6E6;
	height: 1px;
	-webkit-transform:scale(0.5);
}
li{
	list-style: none;
}
ul{
	margin:0;
	padding:0;
}
.flagContentBox{
	width: 0.6rem;
	height: 0.6rem;
	background: #F5473B;
	border-radius: 50%;
	font-size: 0.18rem;
	line-height: 0.6rem;
	text-align: center;
	color: #fff;
	margin-top:0.05rem;
	margin-left:0.05rem;
}
.rightFlag{
	background: #fddad8; 
	width: 0.7rem;
	height: 0.7rem;
	border-radius: 50%;
	text-align: center;
	overflow: hidden;
	position: absolute;
	top:0.17rem;
	right: 0.15rem;
}
.responsibilitieList{
	width: 100%;
	padding: 0.25rem 0.14rem;
	box-sizing: border-box;
}
.responsibilitieList_item,.evaluation_item{
	color: #B5BECA;
	font-size: 0.13rem;
	line-height: 0.25rem;
	margin-top: 0.07rem;
}
.responsibilitieList_title,.evaluation_title{
	font-size: 0.15rem;
	color: #B5BECA;
}
.evaluation_title{
	margin-top: 0.35rem;
}
</style>
