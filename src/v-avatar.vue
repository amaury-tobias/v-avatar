<script>
export default {
  name: "VAvatar", // vue component name
  data() {
    return {
      counter: 5,
      initCounter: 5
    };
  }
};
</script>

<template>
    <div class="v-avatar">
        <p>The counter is set to <b>{{counter}}</b>.</p>
        <button @click="counter += 1">Click +1</button>
        <button @click="counter -= 1">Click -1</button>
        <button @click="counter = initCounter">Reset</button>
    </div>
</template>

<style scoped>
.v-avatar {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.v-avatar p {
  margin: 0 0 1em;
}
</style>
