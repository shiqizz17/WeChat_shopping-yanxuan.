const express = require('express')
const router = express.Router()

router.get('/test',(req, res) => {
  res.send('测试成功')
})

// 加载首页分类数据（滑块）
const indexData = require('../datas/index.json')
router.get('/getIndexData', (req, res) => {
  res.send({
    status: 200,
    indexData
  })
})

// 加载分类数据（滑块）
const indexCateList = require('../datas/indexCateList.json')
router.get('/getIndexCateList', (req, res) => {
  res.send({
    status: 200,
    indexCateList
  })
})

// tabBar分类数据
const categoryDatas = require('../datas/categoryDatas.json')
router.get('/getCategoryDatas', (req, res) => {
  res.send({
    status: 200,
    categoryDatas
  })
})

module.exports = router