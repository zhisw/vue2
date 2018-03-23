<template>
	<div class="taskAndNewList">
		<div class="taskAndNewListTitle" ref="wrapper">
		 	<div class="taskTitleChoose">
		 		<span>所有任务</span>
		 		<span>我的任务</span>
		 		<span>我指派的</span>
		 		<img src="../assets/img/filter.png" height="40" width="40" alt="" class="taskAndNewListFilterImg" @click="showSearch">
		 		<img src="../assets/img/Menu.png" height="38" width="48" alt="" class="taskAndNewListMenuImg" @click="showMenu">
		 	</div>	
		 </div> 
		<transition name="bounce">
			<SearchList v-if="showSe" v-on:toshowSearchContent="showSearchContent"></SearchList>
		</transition>
		<transition name="bounce">
			<menuList v-if="menuClicked" v-on:toCloseMenu="menuClose"  name="bounce"></menuList>
		</transition>
		<div class="taskAndNewListBody" :style="{'-webkit-overflow-scrolling': scrollMode}">	
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore" :autoFill="autoFill">
		<!-- <div class="taskAndNewListBody">	 -->
		<div>
			<TasklistItem v-bind:message="taskInfoitem" v-for="(taskInfoitem,index) in taskInfo"  :key="index"></TasklistItem>		
		<!-- </div>  -->
		</div>
	    </mt-loadmore>
	    </div>
	</div>
</template>	
<script>
//  1rem=100px;
import TasklistItem from './taskListItem'
import SearchList from './searchList'
import menuList from './menuList'
export default {
  name: 'task',
  data () {
    return {
      taskInfo: [],
      showSe: false,
      menuClicked: false,
      allLoaded: false,
      page: 1,
      size: 12,
      scrollMode: 'auto',
      autoFill: false,
      wrapperHeight: 0
    }
  },
  created: function () {
    this.loadData(1, 12)
  },
  mounted () {
  /*  this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.clientHeight */
  },
  components: {
    TasklistItem,
    SearchList,
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
    },
    loadTop: function () {
      setTimeout(() => {
        // alert(1)
        this.loadData(1, 12, 1)
        this.$refs.loadmore.onTopLoaded()
        this.allLoaded = false
      }, 1000)
    },
    loadBottom: function () {
      // this.loading = true
      // alert(1)
      this.page++
      this.allLoaded = false
      if (this.page === 20) {
        this.allLoaded = true
        return false
      }
      setTimeout(() => {
        console.log(this)
        this.loadData(this.page, this.size, 2)
        this.$refs.loadmore.onBottomLoaded()
      }, 1000)
    },
    loadData: function (page, size, sign) {
      this.$http.get('/crm/oa/OACtrl-questionlistlistInterface', {
        params: {
          'page': page,
          'size': size
        }
      })
    .then((res) => {
      console.log(res)
      if (page === 1) {
        this.taskInfo = []
      }
      this.taskInfo = this.taskInfo.concat(res.data.msg.oatasklist)
      console.log(this.taskInfo)
      if (sign === 1) {
      } else if (sign === 2) {
        this.$nextTick(function () {
          this.scrollMode = 'touch'
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
    }
  }
}
</script>
<style scoped>
.mint-loadmore-text{
	font-size: 12px!important;
}
	.taskAndNewList{
		width: 100%;
		height: 100%;
		overflow: hidden;
		min-width: 320px;
		max-width: 640px;
		background: #343340;
		margin:0 auto;
	}
	.taskAndNewListMenuImg{
	/* 	float: right;*/
		margin-right: 1rem;
	/* margin-top: 0.15rem;  */
		width: 2.4rem;
		height: 1.9rem;	
		margin-left: 1.5rem;
	}
	.taskAndNewListTitle{
		width: 100%;
		height: 5rem;
		min-width: 320px;
		max-width: 640px;
		background: #2A2933;
		border-top: 1px solid #060714;
		box-shadow:  0 2px 2px #060714;
		position: fixed;
		top:0;
		font-size: 1.5rem;
		color:#8A9099;
		z-index: 10000;
	}
	.taskAndNewListBody{
		width: 100%;
		background: #343340;
		 height: 100%;
		overflow: scroll; 
		padding: 6rem 1rem 0rem 1rem;
		box-sizing: border-box;
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
		line-height: 5rem;
		width: 8rem;
	}
	.taskTitleChoose span:nth-child(1){
		border-bottom: 2px solid #F5473B;
		color:#F5473B;
	}
	.taskAndNewListFilterImg{
		width: 2rem;
		height: 2rem;
	}
 /* 	.tasklistItem:nth-child(1){
 		margin-top: 6rem;
 	}  */
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
