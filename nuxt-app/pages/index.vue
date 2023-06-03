<template>
  <div>
    <NuxtLink to="/about">
      关于我们
    </NuxtLink>
    <NuxtLink to="/lend">
      我要投资
    </NuxtLink>
    <NuxtLink to="/user">
      用户中心
    </NuxtLink>
    <a href="http://atguigu.com" target="_blank">尚硅谷</a>

    <h1>主页面</h1>
    <p>您的ip是{{ ip }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ip: null,
    }
  },
  created() {
    //get
    // this.$axios.get('http://icanhazip.com').then((response) => {
    //   console.log(response)
    //   this.ip = response.data
    // })

    this.$axios.$get('http://icanhazip.com').then((response) => {
      console.log(response)
      this.ip = response
    })
  },
}
</script>
