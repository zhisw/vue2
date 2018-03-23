<template>
	<div class="taskAndNewList">
		<div class="taskAndNewListTitle">
			<div class="taskTitleChoose">
				<span>所有任务</span>
				<span>我的任务</span>
				<span>我指派的</span>
				<img src="../assets/img/filter.png" height="40" width="40" alt="" class="taskAndNewListFilterImg">
				<img src="../assets/img/Menu.png" height="38" width="48" alt="" class="taskAndNewListMenuImg">
			</div>	
		</div>
		<div class="taskAndNewListBody">
			<!-- 	<div class="tasklistItem">
				<div class="tasklistItem_left">
					任务
				</div>
				<div class="tasklistItem_right">
					<div class="tasklistItem_rightTop">
						<span class="taskNum">#104 <span class="taskName">链接跳转错误</span></span>
						<span class="taskType">新建</span>
					</div>
					<div class="tasklistItem_rightBottom">
						<span class="leader"><i class="iconfont icon-geren"></i>王慧娟</span>
						<span class="taskCreatTime"><i class="iconfont icon-shijian"></i> 2017-08-21 09:40</span>
						<span class="taskCreater"><i class="iconfont icon-airplane"></i> 支顺文</span>
					</div>
				</div>
			</div>-->
					
						
							<TasklistItem v-bind:message="taskInfoitem" v-for="(taskInfoitem,index) in taskInfo"  :key="index"></TasklistItem>		
						
		</div> 
	</div>
</template>	
<script>
//  1rem=100px;
import TasklistItem from "./taskListItem"
export default {
  name: 'task',
  data () {
    return {
      taskInfo: [{
        taskClassify:"任务"
      },{
      	taskClassify:"BUG"
      },{
      	taskClassify:"任务"
      }]
    }
  },
  components: {
    TasklistItem
  }
}
</script>
<style scoped>
	.taskAndNewList{
		width: 100%;
		height: 100%;
		min-width: 320px;
		max-width: 640px;
		background: #343340;
		margin:0 auto;
	}
	.taskAndNewListMenuImg{
	/* 	float: right;*/
		margin-right: 0.1rem;
	/* margin-top: 0.15rem;  */
		width: 0.24rem;
		height: 0.19rem;	
		margin-left: 0.15rem;
	}
	.taskAndNewListTitle{
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
	.taskAndNewListBody{
		width: 100%;
		background: #343340;
		height: 100%;
		overflow: auto;
		padding: 0 0.1rem 0.1rem 0.1rem;
		box-sizing: border-box;
		margin:0 auto;
	}
	.taskTitleChoose{
		height: 100%;
		display: flex;
		flex-direction:row;
		justify-content:space-between;
		align-items:center;
	}
	.taskTitleChoose span{
		text-align: center;
		height: 100%;
		line-height: .5rem;
		width: 0.8rem;
	}
	.taskTitleChoose span:nth-child(1){
		border-bottom: 2px solid #F5473B;
		color:#F5473B;
	}
	.taskAndNewListFilterImg{
		width: 0.2rem;
		height: 0.2rem;
	}
 	.tasklistItem:nth-child(1){
		margin-top: 0.6rem;
	} 

</style>