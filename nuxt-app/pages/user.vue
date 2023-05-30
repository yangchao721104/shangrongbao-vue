<<template>
  <div>
    <h1>用户中心</h1>
    <nuxt-link to="/user">我的账户</nuxt-link>
    <nuxt-link to="/user/user1">我的投资</nuxt-link>
    <nuxt-link to="/user/user2">我的个人信息</nuxt-link>

    <!-- nuxt嵌套路由出口 -->
    <NuxtChild />
  </div>
</template>
