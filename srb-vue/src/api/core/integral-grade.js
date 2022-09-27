//引入asios的初始化模块
import request from '@/utils/request'

//导出默认模块
export default {
  //定义模块成员
  //成员方法：获取积分等级列表
  list() {
    //调用axios的初始化模块，发送远程ajax请求
    return request({
      url: '/admin/core/integralGrade/list',
      method: 'get',
    })
  },
}
