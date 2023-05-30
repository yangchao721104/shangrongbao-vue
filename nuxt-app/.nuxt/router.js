import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b0b5688a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _612a339e = () => interopDefault(import('..\\pages\\lend\\index.vue' /* webpackChunkName: "pages/lend/index" */))
const _51fe3be6 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _c5b3766e = () => interopDefault(import('..\\pages\\user\\user1.vue' /* webpackChunkName: "pages/user/user1" */))
const _c597476c = () => interopDefault(import('..\\pages\\user\\user2.vue' /* webpackChunkName: "pages/user/user2" */))
const _1fa27e4e = () => interopDefault(import('..\\pages\\lend\\_id.vue' /* webpackChunkName: "pages/lend/_id" */))
const _7145b300 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _b0b5688a,
    name: "about"
  }, {
    path: "/lend",
    component: _612a339e,
    name: "lend"
  }, {
    path: "/user",
    component: _51fe3be6,
    name: "user",
    children: [{
      path: "user1",
      component: _c5b3766e,
      name: "user-user1"
    }, {
      path: "user2",
      component: _c597476c,
      name: "user-user2"
    }]
  }, {
    path: "/lend/:id",
    component: _1fa27e4e,
    name: "lend-id"
  }, {
    path: "/",
    component: _7145b300,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
