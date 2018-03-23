<template>
	<div class="searchList">
		<div class="shade">
		</div>
		<div class="searchListItem">
			<div class="searchInputBox">
				<input type="text" class="searchInput" placeholder="" @input="closeLikePlaceholder" v-model="searchKeyWords">
				<div class="likePlaceholder" v-if="show">
					<img src="../assets/img/search.png" alt="" class="searchImg">
					<span class="searchKeyWords">搜索关键词</span>
					<span class="allTaskNum">
						共计113个任务
					</span>
				</div>
				
			</div>
		</div>
		<div class="searchListItem">
			<div class="searchListItemContent">
				<div class="searchListLeft">
					<span class="searchListName">日期</span>
				</div>
				<div class="searchListRight">
					<span class="startTime">年/月/日</span>
					至
					<span class="lastTime">年/月/日</span>
				</div>
			</div>
		</div>
		<div class="searchListItem">
			<div class="searchListItemContent">
				<div class="searchListLeft">
					<span class="searchListName">状态</span>
				</div>
				<div class="searchListRight">
					<span class="chooseBtn">请选择 <i class="iconfont icon-fangxiangyou"></i></span>
				</div>
			</div>
		</div>
		<div class="searchListItem">
			<div class="searchListItemContent">
				<div class="searchListLeft">
					<span class="searchListName">类型</span>
				</div>
				<div class="searchListRight">
					<span class="chooseBtn">请选择 <i class="iconfont icon-fangxiangyou"></i></span>
				</div>
			</div>
		</div>
		<div class="searchListItem">
			<div class="searchListItemContent">
				<div class="searchListLeft">
					<span class="searchListName">优先级</span>
				</div>
				<div class="searchListRight">
					<span class="chooseBtn">请选择 <i class="iconfont icon-fangxiangyou"></i></span>
				</div>
			</div>
		</div>
		<div class="searchListItem">
			<div class="searchListItemContent sureBtnBox">
				<div class="sureBtn" @click="tosearch">
					确定
				</div>
			</div>
		</div>
		
	</div>
</template>	
<script>
export default {
  name: 'searchList',
  data () {
    return {
      show: true,
      searchKeyWords: ''
    }
  },
  methods: {
    tosearch: function () {
      this.$emit('toshowSearchContent')
    },
    closeLikePlaceholder: function () {
      this.show = false
      if (!this.searchKeyWords) {
        this.show = true
      }
    }
  }
}
</script>
<style>

.searchList{
		width: 100%;
		min-width: 320px;
		max-width: 640px;
		background: #2A2933;
		margin:0 auto;
		font-size: 0.15rem;
		color: #B5BECA;
		position: fixed;
	    top: 0;
	    z-index: 10000;
}

	.searchListItem{
		width: 100%;
		height: 0.5rem;
		line-height: 0.5rem;
		text-align: center;
		overflow: hidden;
	}
	.searchListItemContent{
		display: inline-block;
		width: 85%;
		height: 0.5rem;
		line-height: 0.5rem;
		border-bottom: 1px solid #545266;
		text-align: left;
		box-sizing: border-box;
	}
	.noborder{
		border-bottom: 0!important;
	}
	.searchListLeft{
		float: left;
	}
	.searchListRight{
		float: right;
	}
	 .searchListNewCount{
		display: inline-block;
		background: #F5473B;
		width: 0.18rem;
		height: 0.18rem;
		border-radius: 50%;
		color: #ffffff;
		text-align: center;
		line-height: 0.18rem;
		font-size: 0.1rem;
	} 


	.searchInput{
		width: 92%;
		height: 0.31rem;
		border: none;
		outline: none;
		background: transparent;
		color:#ACB4C0;
		position: absolute;
		z-index: 1;
		top:0;
		left: 0.2rem;
	}
	.searchInputBox{
		display: inline-block;
		width: 90%;
		height: 0.35rem;
		background: #1A1920;
		line-height:  0.35rem;
		border-radius: 0.35rem;
		position: relative;
		top:0.1rem;
	}
	.likePlaceholder{
		width: 92%;
		height: 0.35rem;
		line-height: 0.35rem;
		position:absolute;
		top:0;
		left: 0.2rem;
		text-align: left;
	}
	.searchImg{
		width: 0.15rem;
		height: 0.15rem;
		display: inline-block;
		vertical-align: middle; 
		margin-top: -.02rem;
	}
	.searchKeyWords{
		font-size: 0.15rem;
		margin-left: 0.09rem;
	}
	.allTaskNum{
		float: right;
		margin-right: 0.26rem;
		font-size: 0.11rem;
	}
	.sureBtn{
		display: inline-block;
		width: 2.5rem;
		height: 0.35rem;
		line-height: 0.35rem;
		text-align: center;
		color: #ffffff;
		font-size: 0.15rem;
		background: #F5473B;
	}
	.sureBtnBox{
		text-align: center;
	}
	.lastTime{
		font-size: 0.15rem;
		color: #ffffff;
		margin-left: 0.35rem;
	}
	.startTime{
		font-size: 0.15rem;
		color: #ffffff;
		margin-right: 0.35rem;
	}
	.chooseBtn{
		font-size: 0.15rem;
		color: #ffffff;
	}
</style>

