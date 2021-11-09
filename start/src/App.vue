<template>
  <div id="app">
    <Task v-bind:tasks="tasks"></Task>
    <timer v-bind:timer="timer"></timer>
  </div>
</template>

<script>
import Task from "./components/Task";
import timer from "./components/timer";
import { todo } from "./firebase";

export default {
  name: "App",
  components: {
  Task,
  timer,
  },
  data() {
    return {
      todo: [],
      tasks: [
        {
          id: 1,
          title: "List 1  ",
          completed: true,
        },
        {
          id: 2,
          title: "list2",
          completed: true,
        },
        {
          id: 3,
          title: "list3",
          completed: true,
        },
        {
          id: 4,
          title: "list4",
          completed: true,
        },
        {
          id: 5,
          title: "list5",
          completed: false,
        },
      ],
    };
  },
  

  mounted() {
    var updateID = "yNC522EGuHbxJxwZmHz4"
    todo.get().then((quearySnapShot) => {
      quearySnapShot.forEach((doc) => {
        console.log("Todo Data:", doc.data())
        this.todo.push({
          number: doc.data().number,
          name: doc.data().name
        })
      })
    })
    console.log("Todo Array:", this.todo)
     todo.add({
     number: 56254,
     name: 'tamil'
     }).then(() => {
     console.log("Todo Added")
     })
    todo.doc(updateID).delete()
  }
};
</script>