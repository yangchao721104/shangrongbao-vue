<template>
  <div class="app-container">user list</div>
</template>

<script>
import userInfoApi from '@/api/core/user-info'

export default {
  data() {
    return {
      list: null, // 数据列表
      total: 0, // 数据库中的总记录数
      page: 1, // 默认页码
      limit: 10, // 每页记录数
      searchObj: {}, // 查询条件
      loginRecordList: [], //会员登录日志
      dialogTableVisible: false, //对话框是否显示
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      userInfoApi
        .getPageList(this.page, this.limit, this.searchObj)
        .then((response) => {
          this.list = response.data.pageModel.records
          this.total = response.data.pageModel.total
        })
    },
  },
}
</script>
