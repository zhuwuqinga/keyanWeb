<template>
  <div class="footer ">
    <div class="flex_y_center f_bot">
        <div class="f_ziliao">
            <div class="">地址 {{config.address}}</div>
            <div style="margin-top:5px;" class="flex_y_center">www.uptbio.com 2018 © All Rights Reserved.湖南普拉特泽生物科技有限公司</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer', 
  data(){
      return {
        config:{}
      }
  },
  methods:{
    loadconfig(){
      this.$http
        .get("http://www2.uptbio.com/index/index/config")
        .then(
          function(res) {
            // console.log(res);
            if(res.body.code==0){
              this.config = res.body.data
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    }, 
  },
  beforeMount(){
      this.loadconfig()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
