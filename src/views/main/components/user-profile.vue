<template>
  <div class="backdrop" @click="closePhoto">
    <div class="image">
      <img :src="is_src" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
  },
  computed: {
    is_src() {
      return this.img;
    },
  },
  methods: {
    closePhoto() {
      this.$emit("mount", false);
    },
  },
  emits: ["mount"],
};
</script>

<style scoped lang="scss">
.backdrop {
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  img {
    border-radius: 50%;
  }
}
</style>
