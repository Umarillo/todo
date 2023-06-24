<template>
  <div class="users">
    <div class="search input-group">
      <input
        v-model="search"
        type="text"
        class="form-control search__input shadow-none"
        placeholder="Qidiruv"
      />
    </div>
    <div class="user" v-for="user in filter_users" :key="user">
      <div class="user__icon">
        <img src="../../../assets/images/user.png" :alt="user.username" />
      </div>
      <div class="user__datas">
        <h5 class="user__name">{{ user.username }}</h5>
        <p class="user__message">
          {{ user.last_message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          user_id: 1,
          username: "Fuckd",
          last_message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio.",
          last_message_time: "30:12",
          user_icon: "",
        },
        {
          user_id: 2,
          username: "Abdo",
          last_message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio.",
          last_message_time: "30:12",
          user_icon: "",
        },
      ],
      search: "",
    };
  },
  computed: {
    filter_users() {
      return this.users.filter((item) => {
        return item.username
          .toLocaleLowerCase()
          .startsWith(this.search.toLocaleLowerCase());
      });
    },
  },
  methods: {
    filter() {
      this.users = this.users.filter((e) => {
        e.username.includes(this.search);
      });
    },
    getChats() {},
  },
};
</script>

<style scoped lang="scss">
.user {
  display: flex;
  align-items: center;
  margin: 5px;
  border-radius: 5px;
  background-color: whitesmoke;
  cursor: pointer;
  .user__icon {
    width: 30%;
    img {
      width: 100%;
    }
  }
  .user__name {
    margin: 0;
  }
  .user__message {
    margin: 0;
  }
}
</style>