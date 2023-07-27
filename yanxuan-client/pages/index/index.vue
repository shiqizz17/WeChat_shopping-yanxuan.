<template>
  <view class="indexContainer">
    <!-- 头部 -->
    <view class="header">
      <image class="logo" src="../../static/images/logo.png" mode=""></image>
      <view class="search">
        <text class="iconfont icon-sousuo"></text>
        <input type="text" value="" placeholder="搜索..." />
      </view>
      <button type="default">ShQi.</button>
    </view>

    <!-- 滑块  -->
    <!-- 添加v-if判断是为了防止项目在H5页面中显示时出现保存情况
          浏览器自上而下执行代码，先执行template中的代码，后执行script中的代码，
          此处会出现indexData.kingKongModule.kingKongList找不到（Not Found）的问题
          添加if判断，如果indexData.kingKongModule.kingKongList没有值则不执行代码，有值时再执行代码
     -->
    <scroll-view class="navScroll" scroll-x="true" enable-flex v-if="indexData.kingKongModule">
      <view class="navItem" :class="{ active: navIndex === -1 }" @click="changeIndex(-1, -1)">推荐</view>
      <view class="navItem" :class="{ active: navIndex === index }" @click="changeIndex(index, item.L1Id)" v-for="(item, index) in indexData.kingKongModule.kingKongList" :key="item.L1Id">
        {{ item.text }}
      </view>
    </scroll-view>
    
    <!-- 内容区 -->
    <scroll-view scroll-y="true">
      <!-- 推荐模块,跟其他模块互斥，使用v-if判断 -->
      <Recommend v-if="navIndex === -1" />
      <CateList v-else :L1Id = 'L1Id'/>
    </scroll-view>
    
  </view>
</template>

<script>
import Recommend from '../../components/Recommend/Recommend.vue'
import CateList from '../../components/CateList/CateList.vue'
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import request from '../../utils/request.js';
export default {
  components: {
    Recommend,
    CateList
  },
  data() {
    return {
      // indexData: {}, //首页数据
      navIndex: -1 ,//点谁，谁高亮，唯一的导航的标记
      L1Id: -1
    };
  },
  onLoad() {},
  
  computed: {
    // mapState辅助函数： ...mapState('模块', [数据]) 用于从Vuex中获取多个状态
    // ...mapState('home', ['indexData'])
    ...mapState({
      indexData: (state) => state.home.indexData
    })
  },
  
  mounted() {
    // this.getIndexData();  //调用请求--项目一开始就发送请求
    
    // 获取仓库中的test测试数据
    console.log(this.$store.state.home.test)
    
    // 触发action的方法1：this.$store.dispatch('模块名/action名')
    // this.$store.dispatch('home/getIndexDataActions')
    // 触发action的方法2:见methods
    this.getIndexDataActions()

  },
  
  // created--生命周期  此处也可用mounted
  created() {
     
  },
  methods: {
    //触发action的方法2
    // mapActions辅助函数：当Vuex中的一个方法或多个方法被调用时，可以使用mapActions
    ...mapActions('home', ['getIndexDataActions']),
    
    // 获取首页的数据
    async getIndexData() {
      const res = await request('/getIndexData'); //小程序
      // const res = await request('/api/getIndexData')  //H5
      console.log(res);
      this.indexData = res.indexData;
    },
    // 点击切换下标
    changeIndex(index, L1Id) {
      this.navIndex = index;
      this.L1Id = L1Id
    }
  }
};
</script>

<style lang="stylus">
.indexContainer
  .header
    display flex
    padding 10rpx 5rpx
    .logo
      width 140rpx
      height 60rpx
      margin-right 10rpx
    .search
      position relative
      width 420rpx
      height 60rpx
      background-color #f5f5f5
      border-radius 4rpx
      .iconfont
        position absolute
        top 4rpx
        left 4rpx
        font-size 50rpx
      input
        width 360rpx
        height 60rpx
        margin-left 60rpx
    button
      width 144rpx
      height 60rpx
      line-height 60rpx
      font-size 30rpx
      padding 0 40rpx
  .navScroll
    // display flex
    // 不换行
    white-space nowrap
    .navItem
      display inline-block
      height 36rpx
      padding 10rpx
      font-size 26rpx
      font-weight 600
      // 父级引用：表示在navItem父元素中同时拥有active的元素（同时拥有navItem和active的元素）
      &.active
        border-bottom 6rpx solid #BB2C08
        color #BB2C08
.test
  color red
</style>
