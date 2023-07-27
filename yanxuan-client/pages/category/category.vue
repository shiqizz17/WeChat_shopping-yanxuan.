<template>
  <view class="category">
    <!-- 搜索 -->
    <view class="header"><view class="search">商品搜索</view></view>

    <!-- 内容 -->
    <view class="content">
      <view class="left">
        <scroll-view class="navScroll" scroll-y="true">
          <view class="navItem" :class="{active: index === navIndex}" v-for="(item, index) in categoryDatas" 
          :key="item.id" @click="changeNavIndex(index)">{{ item.name }}</view>
        </scroll-view>
      </view>
      <view class="right">
        <scroll-view class="categoryScroll" scroll-y="true">
          <!-- 大图 -->
          <image class="cateImg" :src="cateObj.imgUrl" mode=""></image>
          <!-- 列表 -->
          <view class="goodsList">
            <view class="goodsItem" v-for="item in cateObj.subCateList" :key="item.id">
              <image class="goodsImg" :src="item.wapBannerUrl" mode=""></image>
              <view class="goodsName">{{item.name}}</view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import request from '../../utils/request.js';
export default {
  data() {
    return {
      categoryDatas: [],
      navIndex: 0
    };
  },
  mounted() {
    this.getCategory();
  },
  computed: {
    cateObj() {
      console.log(this.categoryDatas[this.navIndex])
      return this.categoryDatas[this.navIndex]
    }
  },
  methods: {
    async getCategory() {
      const res = await request('/getCategoryDatas');
      console.log(res);
      this.categoryDatas = res.categoryDatas;
    },
    changeNavIndex(index) {
      this.navIndex = index
    }
  }
};
</script>

<style lang="stylus">
.category
  .header
    padding 20rpx 0
    .search
      width 90%
      margin 0 auto
      text-align center
      line-height 60rpx
      font-size 30rpx
      font-weight 600
      background-color #ddd
      border-radius 4rpx
  .content
    display flex
    // calc:在流体布局中，计算元素长度值
    // 自动调整表单域的大小以适应其容器的大小
    // 在不同屏幕中按一定比例缩放
    // 100vh表示将屏幕高度分为100等份   注：将屏幕宽度分为100等份为100vw
    // 100vh：高度 - 20rpx*2：padding - 60rpx：search.height -2rpx:border
    height calc(100vh - 102rpx)
    border-top 2rpx solid #333
    .left
      width 20%
      height 100%
      border-right 2rpx solid #333
      .navScroll
        height calc(100vh - 102rpx)
        .navItem
          position relative
          height 60rpx
          line-height 60rpx
          font-size 26rpx
          font-weight 600
          text-align center
          // 父级引用
          &.active::before
            content ''
            width 2rpx
            height 40rpx
            background-color red
            position absolute
            left 10rpx
            top 10rpx
    .right
      width 80%
      height calc(100vh - 102rpx)
      .categoryScroll
        height: 100%
        .cateImg
          width: 520rpx
          height: 200rpx
          display: block
          margin: 20rpx auto
        .goodsList
          display: flex
          flex-wrap: wrap
          .goodsItem
            width: 33.33%
            height: 100%
            text-align: center
            .goodsImg
              width: 90%
              height: 140rpx
            .goodsName
              font-size: 26rpx
              
</style>
