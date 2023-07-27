<template>
  <view class="recommend">
    <!-- 轮播图 -->
    <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
      <swiper-item>
        <view class="swiper-item"><img src="https://yanxuan.nosdn.127.net/static-union/1683685447dc59e2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item"><img src="https://yanxuan.nosdn.127.net/3e6c9d64cd374db055e5b6e6f45f833b.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item"><img src="https://yanxuan.nosdn.127.net/0285970c617760eb3296f97aa0419bd5.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item"><img src="https://yanxuan.nosdn.127.net/static-union/1682321277ec237e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt=""></view>
      </swiper-item>
    </swiper>
    
    <!-- 三个小图标 -->
    <view class="policyList">
      <view class="policyItem" v-for="item in indexData.policyDescList" :key="item.desc">
        <image :src="item.icon" mode=""></image>
        <text class="desc">{{item.desc}}</text>
      </view>
    </view>
    
    <!-- 10个导航图标 -->
    <view class="kingKongList" v-if="indexData.kingKongModule">
      <view class="kingKongItem" v-for="item in indexData.kingKongModule.kingKongList" :key="item.L1Id">
        <image class="kingKongImg" :src="item.picUrl" mode=""></image>
        <view class="kingKongDesc">
          {{item.text}}
        </view>
      </view>
    </view>
    
    <!-- 分类区 -->
    <view class="categoryList">
      <view class="categoryItem" v-for="item in indexData.categoryModule" :key="item.titlePicUrl">
        <!-- image大图 -->
        <image class="categoryImg" :src="item.titlePicUrl" mode=""></image>
        <!-- 滑块 -->
        <scroll-view class="categoryScroll" scroll-x="true" enable-flex>
          <view class="goodsItem" v-for="goodsItem in item.itemList" :key="goodsItem.id">
            <image class="goodsImg" :src="goodsItem.showPicUrl" mode=""></image>
            <view class="goodsText">
              {{goodsItem.simpleDesc}}
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    
    // 拿取Vuex中的indexData数据
    computed: {
      ...mapState({
        indexData: state => state.home.indexData
      })
    },
    methods: {
      
    }
  }
</script>

<style lang="stylus">
  .recommend
    margin-top: 5rpx
    .swiper
      height: 350rpx
      image
        width: 100%
        height: 350rpx
    .policyList
      display: flex
      margin: 10rpx
      .policyItem
        flex: 1
        text-align: center
        image
          height: 40rpx
          width: 40rpx
          vertical-align: middle
        .desc
          font-size: 26rpx
    .kingKongList
      display: flex
      flex-wrap: wrap //换行
      .kingKongItem
        width: 20%
        text-align: center
        margin: 10rpx 0
        .kingKongImg
          height: 100rpx
          width: 100rpx
        .kingKongDesc
          font-size: 24rpx
    .categoryList
      .categoryItem
        margin: 10rpx 0
        .categoryImg
          width: 100%
          height: 370rpx
        .categoryScroll
        // 注意：一定要给滑块设置高度，否则撑满全屏
          height: 300rpx
          display: flex
          // 设置不换行
          white-space: nowrap
          .goodsItem
            height: 300rpx
            margin: 0 5rpx
            .goodsImg
              height: 200rpx
              width: 200rpx
              background-color: #f5f5f5
            .goodsText
              font-size: 26rpx
              // 设置换行，超出两行省略...
              white-space: pre-wrap  //换行
              overflow: hidden  //超出部分隐藏
              text-overflow: ellipsis  //文字超出部分隐藏添加省略号
              display: -webkit-box  //将对象作为伸缩盒子模型显示
              -webkit-box-orient: vertical  //设置元素排列方式
              -webkit-line-clamp: 2  //设置显示行数
          
</style>
