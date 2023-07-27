<template>
  <view class="cart">
    <view class="cartList">
      <view class="cartItem" v-for="(item, index) in cartList" :key="item.id">
        <!-- 左侧选择框 -->
        <text class="iconfont icon-xuanzhong" :class="{selected: item.isSelected}" 
        @click="changeSelected(!item.isSelected, index)"></text>
        <!-- 右侧商品信息 -->
        <view class="goodsItem">
          <image :src="item.primaryPicUrl" mode=""></image>
          <view class="goodsInfo">
            <view class="name">
              {{item.name}}
            </view>
            <view class="price">
              ￥ {{item.counterPrice}}
            </view>
          </view>
        </view>
        
        <!-- 数量控制 -->
        <view class="countCtrl">
          <text class="sub" @click="changeCount(false, index)">-</text>
          <text class="count">{{item.count}}</text>
          <text class="add" @click="changeCount(true, index)">+</text>
        </view>
      </view>
    </view>
    <!-- 底部 -->
    <view class="footer">
      <view class="left">
        <text class="iconfont icon-xuanzhong" :class="{selected: isAllSelected}" @click="changeAllSelected(!isAllSelected)"></text>
        <text class="select">已选 {{totalCount}}</text>
      </view>
      <text class="right">
        <text class="btn">合计：￥ {{totalPrice}}</text>
        <text class="btn order">下单</text>
      </text>
    </view>
  </view>
</template>

<script>
  import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState({
        cartList: state =>state.cart.cartList
      }),
      ...mapGetters('cart', ['isAllSelected', 'totalCount', 'totalPrice'])
    },
    methods: {
      ...mapMutations('cart', ['changeCountMutation', 'changeSelectedMutation', 'changeAllSelectedMutation']),
      
      // 加、减
      changeCount(isAdd, index) {
        this.changeCountMutation({isAdd, index})
      },
      // 修改选中状态
      changeSelected(isSelected, index) {
        this.changeSelectedMutation({isSelected, index})
      },
      // 全选、全不选
      changeAllSelected(isAllSelected) {
        this.changeAllSelectedMutation(isAllSelected)
      }
    }
  }
</script>

<style lang="stylus">
  .cart
    height: 100%  
    background-color: #f4f4f4
    .cartList
      .cartItem
        position: relative
        display: flex
        height: 172rpx
        width: 100%
        margin-top: 20rpx
        background-color: #fff
        padding: 20rpx
        .iconfont
          font-size: 40rpx
          line-height: 172rpx
          &.selected
            color: #dd1a21
        .goodsItem
          display: flex
          image
            width: 172rpx
            height: 172rpx
            background-color: #ccc
            margin: 0 40rpx
          .goodsInfo
            .name
              font-size: 26rpx
              margin: 10rpx
            .price
              color: red
        .countCtrl
          position: absolute
          right: 60rpx
          bottom: 30rpx
          text
            border: 1px solid #ddd
            padding: 8rpx 28rpx
            &:nth-child(2)
              border: 0
              border-top: 1px solid #ddd
              border-bottom: 1px solid #ddd 
    .footer
      position: fixed
      bottom: 0
      left: 0
      right: 0
      height: 100rpx
      display: flex
      border-top: 1px solid #ccc
      line-height: 100rpx
      .left
        flex: 1
        .iconfont
          margin: 0 20rpx
          &.selected
            color: #dd1a21
      .right
        flex: 2
</style>
