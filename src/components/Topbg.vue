<template>
  <div class="topbg">
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'Topbg', 
  props : {
    img: {
        type: String
    }   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
