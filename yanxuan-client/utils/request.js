// 接收域名
import base from './base.js'

// 封装请求
export default (url, data = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: base.host+url, //小程序请求
      // url,  //H5请求地址 
      data,
      method,
      // 请求成功
      success: (res) => {
        resolve(res.data) //将数据返回页面层
      },
      // 请求失败
      fail: (err) => {
        reject(err)
      }
    });
  })
}