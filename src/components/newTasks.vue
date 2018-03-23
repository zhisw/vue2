<template>
	<div class="newTasks">
		<div class="newTaskBoxTitle">
			<div class="newTaskBox">
				<img src="../assets/img/Menu.png" height="38" width="48" alt="" class="newTasksMenuImg" @click="showMenu">
			</div>	
		</div>
		<transition name="bounce">
			<menuList v-if="menuClicked" v-on:toCloseMenu="menuClose"  name="bounce"></menuList>
		</transition>	
		<div class="newTasksBody">
				<div class="newTaskInfo">
					<div class="newTaskTitle">
						<input type="text" placeholder="点击输入标题" class="inputTaskTitle" maxlength="50">
					</div>
					 <ul class="newTaskDetail">
						<li>
							<span>部门</span>
							<span class="chooseBtn">技术部<i class="iconfont icon-fangxiangyou"></i></span>
						</li>
						<li>
							<span>指派给</span>
							<span class="chooseBtn">支顺文<i class="iconfont icon-fangxiangyou"></i></span>
						</li>
						<li>
							<span>优先级</span>
							<span class="chooseBtn">中<i class="iconfont icon-fangxiangyou"></i></span>
						</li>
						<li>
							<span>问题类型</span>
							<span class="chooseBtn">任务<i class="iconfont icon-fangxiangyou"></i></span>
						</li>
						<li>
							<span>开始时间</span>
							<span class="chooseBtn">2017-09-05<i class="iconfont icon-fangxiangyou"></i></span>
						</li>
						<li>
							<span>结束时间</span>
							<span class="chooseBtn">2017-09-05<i class="iconfont icon-fangxiangyou"></i></span>
						</li>
					</ul> 
					 <div class="inputDescribe">
						<textarea id="inputDescribeArea" cols="30" rows="10" placeholder="点击输入任务描述"></textarea>
					</div> 
				</div>	
				<div class="btnsBox"> 
					<div class="creatBtn">
							新建
					</div> 
				</div>	
			</div>
		</div>
	
</template>	
<script>
import menuList from './menuList'
export default {
  name: 'newTasks',
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
	.newTasks{
		width: 100%;
		height: 100%;
		min-width: 320px;
		max-width: 640px;
		background: #343340;
		margin:0 auto;
	}
	.newTasksMenuImg{
		margin-right: 0.1rem;
		width: 0.24rem;
		height: 0.19rem;	
		margin-left: 0.15rem;
	}
	.newTaskBoxTitle{
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
	.newTaskState{
		margin-left: 0.1rem;
		color: #02C63C;
		font-size: 0.15rem;
	}
	.newTasksBody{
		width: 100%;
		background: #343340;
		height: 100%;
		overflow: auto;
		padding: 0 0.1rem 0.1rem 0.1rem;
		box-sizing: border-box;
		margin:0 auto;
	}
	.newTaskBox{
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
.newTaskInfo{
	width: 100%;
	border-radius: 0.05rem;
	background: #ffffff;
	margin-top: 0.6rem; 
	position: relative; 
	box-sizing: border-box;
}


li{
	list-style: none;
}
ul{
	margin:0;
	padding:0;
}

.newTaskList{
	width: 100%;
	padding: 0.25rem 0.14rem;
	box-sizing: border-box;
}
.newTaskList_item,.evaluation_item{
	color: #B5BECA;
	font-size: 0.13rem;
	line-height: 0.25rem;
	margin-top: 0.07rem;
}
.newTaskList_title,.evaluation_title{
	font-size: 0.15rem;
	color: #B5BECA;
}
.evaluation_title{
	margin-top: 0.35rem;
}
.newTaskTitle{
	width: 100%;
	height: 0.43rem;
	line-height: 0.43rem;
	background: #58D18E;
	border-radius: 0.05rem 0.05rem 0 0;
	position: relative;
}
.inputTaskTitle{
	width: 100%;
	height: 100%;
	outline: none;
	border:0;
	position: absolute;
	left: 0;
	top:0;
	background: transparent;
	text-indent: 0.1rem;
	color: #ffffff;
	font-size: 0.15rem;
	box-sizing: border-box;
}
.newTaskDetail{
	font-size: 0.11rem;
	color:#545266;
	padding: 0 0.1rem;
}
.inputTaskTitle:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #fff; font-size: 0.15rem;
}

.inputTaskTitle::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #fff;font-size: 0.15rem;
}

.inputTaskTitle:-ms-input-placeholder{
    color: #fff;font-size: 0.15rem;
}

.inputTaskTitle::-webkit-input-placeholder{
    color: #fff;font-size: 0.15rem;
}
.newTaskDetail li{
	height: 0.4rem;
	line-height: 0.4rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid #E6E6E6;
}
.chooseBtn{
	color: #B5BECA;
}
.inputDescribe{
	width: 100%;
	height: 1.5rem;
	padding: 0.1rem;
	box-sizing: border-box;
}
#inputDescribeArea{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	outline: none;
	border:0;
	resize:none;
	background: #F5F5F5;
	padding:0.1rem;
	border-radius: .05rem;
	font-size: 0.11rem;
	color: #545266;
}
#inputDescribeArea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #B5BECA; font-size: 0.11rem;
}

#inputDescribeArea::-moz-placeholder { /* Mozilla Firefox 19+ */
     color: #B5BECA; font-size: 0.11rem;
}

#inputDescribeArea:-ms-input-placeholder{
     color: #B5BECA; font-size: 0.11rem;
}

#inputDescribeArea::-webkit-input-placeholder{
    color: #B5BECA; font-size: 0.11rem;
}
.btnsBox{
	width: 100%;
	text-align: center;
}
.creatBtn{
	display: inline-block;
	width: 2.88rem;
	height: 0.45rem;
	background: #4B9E70;
	font-size: 0.19rem;
	color: #ffffff;
	border-radius: 0.02rem;
	line-height: 0.45rem;
	text-align: center;
}
.btnsBox{
	font-size: 0.19rem;
	margin-top: 0.17rem;
	margin-bottom: 0.2rem;
}
</style>

