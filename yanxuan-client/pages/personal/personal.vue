<template>
  <view class="personal">
    <view class="header">
      <!-- 登录状态 -->
      <template v-if="userInfo.nickName">
        <image class="userAvatarImg" :src="userInfo.avatarUrl" mode=""></image>
        <text class="userName">{{userInfo.nickName}}</text>
        <button class="exit" @click="exit">退出登录</button>
      </template>
      
      <!-- 未登录状态 -->
      <template v-else>
        <image class="userImg" src="../../static/images/personal/personal.png" mode=""></image>
        <text class="login" @click="toLogin">未登录</text>
      </template>
      
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {},  //个人信息
      };
    },
    mounted() {
      // 从本地存储里读取数据
      wx.getStorage({
        key: 'userInfo',
        success:(res) => {
          console.log(res.data)
          this.userInfo = JSON.parse(res.data)
        }
      })
    },
    methods: {
      toLogin() {
        // 关闭所有页面，打开到应用内的某个页面
        wx.reLaunch({
          url: '/pages/login/login'
        })
      },
      
      exit() {
        // 清空浏览器缓存数据
        wx.setStorage({
          key: 'userInfo',
          data: ''
        })
        // 跳转到登录页
        wx.reLaunch({
          url: '/pages/index/index'
        })
      }
    }
  }
</script>

<style lang="stylus">
  .personal
    .header
      height: 300rpx
      line-height: 300rpx
      background-color: #EED7B5
      display: flex
      .userAvatarImg, .userImg
        height: 100rpx
        width: 100rpx
        vertical-align: middle
        margin: 100rpx 50rpx
      .exit
        height: 80rpx
        margin: 100rpx 20rpx 100rpx 200rpx
        line-height: 80rpx
        background-color: #f5f5f5
</style>
