import { createStore } from 'vuex'
let timeout = null
export default createStore({
  state() {
    return {
      loading: true,
      show_sidebar: true,
      show_navbar: true,
    }
  },
  actions: {
    setloading(ctx, loading) {
      ctx.commit('setloading', loading)
    },
    setshow_navbar(ctx, show_navbar) {
      ctx.commit('setshow_navbar', show_navbar)
    },
    setshow_sidebar(ctx, show_sidebar) {
      ctx.commit('setshow_sidebar', show_sidebar)
    },
  },
  mutations: {
    setloading(state, loading) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        state.loading = loading;
      }, 200);
    },
    setshow_navbar(state, show_navbar) {
      state.show_navbar = show_navbar;
      // clearTimeout(timeout);
      // timeout = setTimeout(() => {
      // }, 200);
    },
    setshow_sidebar(state, show_sidebar) {
      state.show_sidebar = show_sidebar;
      // clearTimeout(timeout);
      // timeout = setTimeout(() => {
      // }, 200);
    },
  }
})
