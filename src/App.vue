<template>
  <div class="main">
    <RouterView />
  </div>
</template>

<script>
import Main from "./views/main.vue";
import Chat from "./views/notepad.vue";
export default {
  components: {
    Main,
    Chat,
  },
};
</script>

<style lang="scss">
.main {
  background-color: #fffdf4;
  height: 100vh;
}
</style>
