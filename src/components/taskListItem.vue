<template>
<div class="tasklistItem">
					<div class="tasklistItem_left">
						<!-- 任务 -->
						{{message.showname}}
					</div>
					<div class="tasklistItem_right">
						<div class="tasklistItem_rightTop">
							<span class="taskNum">#{{message.id}}<span class="taskName">{{message.title}}</span></span>
							<span class="taskType">新建</span>
						</div>
						<div class="tasklistItem_rightBottom">
							<span class="leader"><i class="iconfont icon-geren"></i>{{message.createnick}}</span>
							<span class="taskCreatTime"><i class="iconfont icon-shijian"></i> {{message.enddate}}</span>
							<span class="taskCreater"><i class="iconfont icon-airplane"></i> {{message.userNickName}}</span>
						</div>
					</div>
</div>
</template>
<script>
//  1rem=100px;
export default {
  name: 'taskListItem',
  data () {
    return {
      msg: ''
    }
  },
  props: ['message'],
  created () {
    console.log(this.message)
  },
  methods: {

  }
}
</script>
<style scoped>
	.tasklistItem{
		width: 100%;
		height: 6rem;
		background: #ffffff;
		margin:1rem 0;
		border-radius: 0.2rem;
		line-height: 5rem;
		font-size: 1.2rem;
		padding: 0.5rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		box-sizing: border-box;
		color:#2A2933;
		position: relative;

	}
	
	.tasklistItem_left{
		width: 5rem;
		height: 5rem;
		line-height: 5rem;
		/* text-align: center; */
		font-size: 1.8rem;
		color:#ffffff;
		background: #F37067;
	}
	.tasklistItem_right{
		margin-left: 1rem;
		height: 5rem;
		width:84%;
	}
	.tasklistItem_rightTop{
		color:#2A2933;
		height: 2.5rem;
		line-height: 2.5rem;
		overflow: hidden;
		font-size: 1.2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.tasklistItem_rightBottom{
		width: 95%;
		color: #B5BECA;
		height: 2.5rem;
		line-height: 2.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 1.1rem;
	}
	.taskType{

		color:#4B9E70;
		font-size:1.3rem;
	}
	.tasklistItem_rightBottom i{
		font-size: 1.1rem;
	}
	.taskName{
		margin-left: 1rem;
	}
</style>
