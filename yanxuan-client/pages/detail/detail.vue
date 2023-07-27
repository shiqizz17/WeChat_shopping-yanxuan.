<template>
  <view class="detail">
    <view class="header">{{ goodsObj.name }}</view>
    <!-- 商品详情 -->
    <scroll-view class="detailScroll" scroll-y="true">
      <image class="detailImg" :src="goodsObj.listPicUrl" mode=""></image>
      <view class="tag">暖冬特惠</view>
      <view class="price">￥ {{ goodsObj.retailPrice }}</view>
    </scroll-view>
    <!-- 底部 -->
    <view class="footer">
      <image src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/detail-kefu-d10f0489d2.png?imageView&type=webp" mode=""></image>
      <view class="btn">立即购买</view>
      <view class="btn cart" @click="addCart">加入购物车</view>
    </view>
  </view>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      goodsObj: {} //当前商品对象
    };
  },
  onLoad(options) {
    // console.log(JSON.parse(options.goodsItem))
    this.goodsObj = JSON.parse(options.goodsItem);
  },
  methods: {
    ...mapMutations('cart', ['addGoodsItemMutation']),
    // 加入购物车
    addCart() {
      this.addGoodsItemMutation(this.goodsObj)
    }
  }
};
</script>

<style lang="stylus">
.detail
  .header
    height 90rpx
    width 570rpx
    line-height 90rpx
    margin 0 auto
    text-align center
  .detailScroll
    height calc(100vh - 90rpx)
    .detailImg
      width 100%
      height 750rpx
    .tag
      width 90%
      height 100rpx
      background-color #bb2c08
      margin 20rpx auto
      text-align center
      color #fff
      font-size 32rpx
      border-radius 10rpx
      line-height 100rpx
    .price
      font-size 50rpx
      color #dd1a21
      line-height 70rpx
      margin-left 5%
  .footer
    height 100rpx
    line-height 100rpx
    display flex
    position fixed
    bottom 0
    left 0
    right: 0
    border-top 1rpx solid #ccc
    image
      width: 60rpx
      height: 60rpx
      margin: 20rpx 40rpx
    .btn
      flex 2
      border-left: 1px solid #ccc
      text-align: center
      &.cart
        background-color: #dd1a21
        color: #fff
</style>
