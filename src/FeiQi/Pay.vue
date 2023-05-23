<template>
  <div class="container">
    <div class="head">

    </div>
    <div class="center">
      <Pages></Pages>
    </div>
    <div class="foot">

    </div>
  </div>



</template>

<script setup>
import Pages from './page1.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/img/login.jpg");
  .head{
    flex:1;
  }
  .center{
    flex:4;
  }
  .foot{
    flex:1;
  }
}
</style>
