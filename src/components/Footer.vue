<template>
  <div class="footer ">
    <div class="f_top flex_y_center">
        <img class="f_log" src="../assets/images/logo2.png" alt="">
        <div class="f_top_right flex_y_center">
            <img src="../assets/images/footer_tel.png" alt="">
            <div>
                <p>电话：{{config.phone}}</p>
                <p>在线时间：8:00-24:00</p>
            </div>
        </div>
    </div>
    <div class="footer_fgx"></div>
    <div class="flex_y_center f_bot">
        <div>
            <div class="f_nav">
                <router-link class="f_nav_item" :to="'/'">首页</router-link>
                <router-link class="f_nav_item" :to="{name:'Yixue',query:{yijiid:18,yijiindex:0,erjiid:46}}">医学实验</router-link>
                <router-link id="" class="f_nav_item" :to="'/ketione'">整体课题</router-link>
                <router-link class="f_nav_item" :to="'/about'">公司展示</router-link>
                <router-link class="f_nav_item" :to="'/jishuArticle'">技术资源</router-link>
                <!-- <router-link class="f_nav_item" :to="'/'">
                    <img src="../assets/images/f1.png" alt="">
                    <p>保密说明</p>
                </router-link> -->
                <div class="f_nav_item"  @mouseover="hanmouse" @mouseout="hanleave" style="z-index: 9999;">
                    <img src="../assets/images/f2.png" alt="">
                    <p>资质证书</p>
                </div>
            </div>
            <div class="f_ziliao">
                <div class="flex_y_center">地址 {{config.address}} 邮箱 {{config.email}}</div>
                <div style="margin-top:5px;" class="flex_y_center">营业执照： {{config.zhizh}} |<img src="../assets/images/f3.png" alt="">湘公网安备 {{config.beian}}号 湘ICP备{{config.icp}}号</div>
                <div style="margin-top:5px;" class="flex_y_center">www.uptbio.com 2018 © All Rights Reserved.湖南普拉特泽生物科技有限公司</div>
            </div>
        </div>
        <div class="flex_x_center ewm">
            <img :src="config.qrcode" alt="">
            <p>微信关注公众号</p>
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
    hanmouse(){
        this.$emit('func',1)
    },
    hanleave(){
        this.$emit('func',0)
    },
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
