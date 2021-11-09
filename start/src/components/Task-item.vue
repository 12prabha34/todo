<template>
<li >
            <button><i class="far fa-circle"></i>{{ task.title }}</button>
            <timer v-bind:timer="timer"></timer>
            <button @click="$emit('remove')"><i class="far fa-trash-alt"></i></button>
          </li>
</template>

<script>
import timer from "./timer.vue"

export default {
  name:'TaskItem',
  props:['task'],
  components: {
    timer
  }
}
</script>