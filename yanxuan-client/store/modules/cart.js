import Vue from 'vue'

const state = {
  cartList: [
    {
        "isSelected": false,
        "count": 3,
        "promId": 0,
        "showPoints": false,
        "itemTagList": [
            {
                "itemId": 1535004,
                "tagId": 128111157,
                "freshmanExclusive": false,
                "name": "暖冬特惠",
                "subType": 204,
                "forbidJump": false,
                "type": 2
            }
        ],
        "rank": 1,
        "id": 1535004,
        "sellVolume": 4001,
        "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
        "soldOut": false,
        "sortFlag": 0,
        "commentCount": 0,
        "onSaleTime": 1538101761748,
        "picMode": 1,
        "commentWithPicCount": 0,
        "underShelf": false,
        "status": 2,
        "couponConflict": true,
        "forbiddenBuy": false,
        "promotionDesc": "暖冬特惠",
        "limitedFlag": 204,
        "pieceNum": 0,
        "itemSizeTableDetailFlag": false,
        "forbidExclusiveCal": false,
        "rewardShareFlag": false,
        "updateTime": 1575893634989,
        "showCommentEntrance": true,
        "pieceUnitDesc": "件",
        "specialPromTag": "",
        "counterPrice": 299,
        "categoryL2Id": 0,
        "retailPrice": 209,
        "primarySkuPreSellPrice": 0,
        "preLimitFlag": 0,
        "itemPromValid": true,
        "promTag": "暖冬特惠",
        "source": 0,
        "points": 0,
        "primarySkuPreSellStatus": 0,
        "extraServiceFlag": 0,
        "flashPageLink": "",
        "autoOnsaleTimeLeft": 0,
        "innerData": {},
        "saleCenterSkuId": 0,
        "pointsStatus": 0,
        "extraPrice": "",
        "colorNum": 0,
        "showTime": 0,
        "autoOnsaleTime": 0,
        "preemptionStatus": 1,
        "isPreemption": 0,
        "zcSearchFlag": false,
        "name": "男式色拉姆内衣套装2.0",
        "appExclusiveFlag": false,
        "itemType": 1,
        "listPicUrl": "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
        "pointsPrice": 0,
        "simpleDesc": "色拉姆发热面料，加厚升级",
        "seoTitle": "",
        "newItemFlag": false,
        "buttonType": 0,
        "primarySkuId": 1636062,
        "displaySkuId": 1636056,
        "productPlace": "",
        "itemSizeTableFlag": false
    },{
          "isSelected": true,
          "count": 2,
			    "promId": 0,
			    "showPoints": false,
			    "itemTagList": [
			        {
			            "itemId": 1536001,
			            "tagId": 128111157,
			            "freshmanExclusive": false,
			            "name": "暖冬特惠",
			            "subType": 204,
			            "forbidJump": false,
			            "type": 2
			        }
			    ],
			    "rank": 1,
			    "id": 1536001,
			    "sellVolume": 3634,
			    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
			    "soldOut": false,
			    "sortFlag": 0,
			    "commentCount": 0,
			    "onSaleTime": 1538101896296,
			    "picMode": 1,
			    "commentWithPicCount": 0,
			    "underShelf": false,
			    "status": 2,
			    "couponConflict": true,
			    "forbiddenBuy": false,
			    "promotionDesc": "暖冬特惠",
			    "limitedFlag": 204,
			    "pieceNum": 0,
			    "itemSizeTableDetailFlag": false,
			    "forbidExclusiveCal": false,
			    "rewardShareFlag": false,
			    "updateTime": 1575894115275,
			    "showCommentEntrance": true,
			    "pieceUnitDesc": "件",
			    "specialPromTag": "",
			    "counterPrice": 299,
			    "categoryL2Id": 0,
			    "retailPrice": 209,
			    "primarySkuPreSellPrice": 0,
			    "preLimitFlag": 0,
			    "itemPromValid": true,
			    "promTag": "暖冬特惠",
			    "source": 0,
			    "points": 0,
			    "primarySkuPreSellStatus": 0,
			    "extraServiceFlag": 0,
			    "flashPageLink": "",
			    "autoOnsaleTimeLeft": 0,
			    "innerData": {},
			    "saleCenterSkuId": 0,
			    "pointsStatus": 0,
			    "extraPrice": "",
			    "colorNum": 0,
			    "showTime": 0,
			    "autoOnsaleTime": 0,
			    "preemptionStatus": 1,
			    "isPreemption": 0,
			    "zcSearchFlag": false,
			    "name": "女式色拉姆内衣套装2.0",
			    "appExclusiveFlag": false,
			    "itemType": 1,
			    "listPicUrl": "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
			    "pointsPrice": 0,
			    "simpleDesc": "色拉姆发热面料，加厚升级",
			    "seoTitle": "",
			    "newItemFlag": false,
			    "buttonType": 0,
			    "primarySkuId": 1634105,
			    "displaySkuId": 1634104,
			    "productPlace": "",
			    "itemSizeTableFlag": false
			}
  ]
}

const mutations = {
  // 修改数据 添加  
  // 1.购物车已经存在该商品，让原来的商品数量count+1
  // 2.购物车中不存在该商品，直接添加到购物车
  addGoodsItemMutation(state, goodsItem) {
    const item = state.cartList.find(item => item.id === goodsItem.id)
    if(item) {
      // 存在:数量+1
      item.count += 1
    } else {
      // 不存在：直接添加，数量设为1，默认选中
      // goodsItem.count = 1   //组件实例化的时候没有数据，即后添加的数据都不是响应式，此处无法给goodsItem.count直接赋值
      // goodsItem.isSelected = true
      Vue.set(goodsItem, 'count', 1)
      Vue.set(goodsItem, 'isSelected', true)
      state.cartList.push(goodsItem)
    }
  },
  
  // 添加、删除商品
  changeCountMutation(state, {isAdd, index}) {
    // 加
    if(isAdd) {
      state.cartList[index].count += 1
    } else {
      //  减
      if(state.cartList[index].count > 1) {
        state.cartList[index].count -= 1
      } else {
        wx.showModal({
          title: '提示',
          content: '您确定要删除该商品吗？',
          success (res) {
            if (res.confirm) {
              // 删除
             state.cartList.splice(index, 1)
            } else if (res.cancel) {
              
            }
          }
        })
      }
    }
  },
  
  // 修改商品的选中状态
  changeSelectedMutation(state, {isSelected, index}) {
    state.cartList[index].isSelected = isSelected
  },
  // 修改所有商品的选中状态
  changeAllSelectedMutation(state, isAllSelected) {
    // 让所有商品的选中状态，跟全选按钮保持一致
    state.cartList.forEach(item => item.isSelected = isAllSelected) 
  }
}

const actions = {
  
}

// getters -- 计算属性
const getters = {
  // 是否全选中:全为真，则为真；只要有一个是false，就为false  =>every
  isAllSelected(state) {
    return state.cartList.every(item => item.isSelected)
  },
  // 总数量
  totalCount(state) {
    // reduce数组求和方法  末尾的0表示从多少开始加
    return state.cartList.reduce((pre, item) => {
      // 选中累加，没有选中的不累加
      return pre += item.isSelected ? item.count : 0
    }, 0)
  },
  // 总价格: 商品单价*商品数量
  totalPrice(state) {
    return state.cartList.reduce((pre, item) => {
      // 选中累加，没有选中的不累加
      return pre += item.isSelected ? item.counterPrice * item.count : 0
    }, 0)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}