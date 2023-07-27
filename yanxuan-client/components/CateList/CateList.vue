<template>
  <view class="cateList">
    <!-- 轮播图 -->
    <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true" v-if="cateObj.category">
      <swiper-item v-for="(item, index) in cateObj.category.bannerUrlList" :key="index">
        <view class="swiper-item">
          <image :src="item" mode=""></image>
        </view>
      </swiper-item>
    </swiper>
    
    <!-- 轮播图下方文字 -->
    <view class="title">
      {{cateObj.category.frontName}}
    </view>
    <view class="desc">
      {{cateObj.category.frontDesc}}
    </view>
    
    <!-- 商品列表 -->
    <view class="goodsList">
      <view class="goodsItem" v-for="item in cateObj.itemList" :key="item.id" @click="toDetail(item)">
        <image class="goodsImg" :src="item.primaryPicUrl" mode=""></image>
        <view class="goodsDesc">
          {{item.name}}
        </view>
        <view class="goodsPrice">
          {{item.retailPrice}}
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import request from '../../utils/request.js'
  export default {
    name:"CateList",
    props: ['L1Id'],
    data() {
      return {
        cateList: [],
      };
    },
    mounted() {
      this.getCateList()
    },
    methods: {
      async getCateList() {
        const res = await request('/getIndexCateList')
        console.log(res)
        this.cateList = res.indexCateList
      },
      // 跳转至详情页面
      toDetail(goodsItem) {
        wx.navigateTo({
          url: '/pages/detail/detail?goodsItem='+JSON.stringify(goodsItem)
        })
      }
    },
    computed: {
      cateObj() {
        return this.cateList.find(item => item.category.parentId === this.L1Id)
      }
    }
  }
</script>

<style lang="stylus">
  .cateList
    .swiper
      height: 360rpx
      image
        width: 100%
        height: 360rpx
    .title
      font-size: 40rpx
      line-height: 80rpx
      color: #333
      text-align: center
    .desc
      font-size: 30rpx
      line-height: 40rpx
      color: #666
      text-align: center
    .goodsList
      display: flex
      flex-wrap: wrap
      justify-content: space-around
      // 添加伪类选择器（不在页面中显示）
      &::after
        content: ""
        width: 344rpx
      .goodsItem
        width: 344rpx
        height: 480rpx
        background-color: #f5f5f5
        margin-top: 20rpx
        .goodsImg
          width: 344rpx
          height: 344rpx
        .goodsDesc
          font-weight: 600
        .goodsPrice
          color: #a61b29
          font-size: 42rpx
          font-weight: 600
</style>