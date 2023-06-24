<template>
  <div class="container">
    <div class="user">
      <div class="user__foto">
        <h2>Notepad</h2>
        <div class="search">
          <input type="text" placeholder="Search" v-model="search" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div class="tasks">
        <div class="text-tasks">
          <h3>Today's tasks</h3>
        </div>
        <div v-for="(item, i) in serchTask" :key="item.id">
          <div class="tasks__task" @click="singleTodo">
            <div
              class="text"
              style="cursor: pointer"
              @click="$router.push('/notepad')">
              <p class="time">
                {{ item.time }}
              </p>
              <input
                class="checkbox"
                type="checkbox"
                :checked="item.checked"
                @change="check(item)"
                v-model="item.checked" />
              <p class="titile">{{ item.todo }}</p>
            </div>

            <div class="text">
              <div>
                <p
                  class="fa-solid fa-pen-to-square"
                  @click="updateTask(item, i)"></p>
              </div>

              <div style="cursor: pointer" @click="deleteTask(item)">
                <p class="fa-solid fa-trash"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
        </div>
        <div>
          <router-link to="/"
            ><i class="fa-solid fa-calendar-days"></i
          ></router-link>
        </div>
        <div class="add" @click="titleFunction()">
          <router-link to="/"><i class="fa-solid fa-plus"></i></router-link>
        </div>
        <div>
          <router-link to="/"><i class="fa-solid fa-bell"></i></router-link>
        </div>
        <div>
          <router-link to="/"><i class="fa-solid fa-gears"></i></router-link>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      title: "",
      todoList: [],
      hour: "",
      minut: "",
      search: "",
    };
  },
  methods: {
    titleFunction() {
      let todoItem = prompt("Введите Заголовок", "");
      const hr = new Date().getHours();
      const mn = new Date().getMinutes();
      this.hour = hr;
      this.minut = mn;
      if (todoItem != "") {
        this.todoList.push({
          time: `${new Date().getHours() + ":" + new Date().getMinutes()}`,
          todo: todoItem,
          checked: false,
        });
      }
      localStorage.setItem("todos", JSON.stringify(this.todoList));
    },
    deleteTask(task) {
      console.log(task);
      const category_index = this.todoList.indexOf(task);
      this.todoList.splice(category_index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todoList));
    },
    check(todo) {
      const category_index = this.todoList.indexOf(todo);
      this.todoList[category_index] = todo;
      console.log(this.todoList);
      localStorage.setItem("todos", JSON.stringify(this.todoList));
    },
    updateTask(task, i) {
      task.todo = prompt("Введите Заголовок", task.todo);
      this.todoList[i] = task;
      console.log(this.todoList);
      localStorage.setItem("todos", JSON.stringify(this.todoList));
    },
  },
  mounted() {
    if (!localStorage.getItem("todos"))
      localStorage.setItem("todos", JSON.stringify([]));

    this.todoList = JSON.parse(localStorage.getItem("todos"));
  },
  computed: {
    serchTask() {
      return this.todoList.filter((el) => el.todo.includes(this.search));
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  .user__foto {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    input {
      width: 400px;
      border-radius: 20px;
      margin-top: 15px;
      padding: 4px 15px;
      border: 2px solid #d6d6d6;
    }
    .search {
      position: relative;
      .fa-magnifying-glass {
        position: absolute;
        margin-left: -30px;
        margin-top: 24px;
        color: #dfbd43;
      }
    }
  }
  .tasks {
    margin-top: 20px;
    max-height: 73vh;
    overflow-y: scroll;
    .tasks__task {
      margin-top: 20px;
      border: 2.2px solid #d9d9d9;
      padding: 4px 20px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .text {
        color: #444444;
        .checkbox {
          width: 20px;
          height: 20px;
        }
        .titile,
        .time {
          margin: 0;
          padding-left: 30px;
          font-size: 14px;
          font-weight: 500;
        }
        div {
          p {
            cursor: pointer;
            color: #dfbd43;
            margin: 12px;
          }
        }
      }
    }
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    background-color: #edeaea;
    padding: 15px;
    border-radius: 20px;
    div {
      margin-left: 20px;
      width: 20px;
      display: flex;
      justify-content: center;

      .fa-solid {
        color: none;
      }
    }
    .add {
      background-color: #dfbd43;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      .fa-plus {
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>
