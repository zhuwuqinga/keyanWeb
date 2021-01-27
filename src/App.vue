<template>
  <div id="app">
    <Header v-if="!flag"  @func="getStatus"/>
    <Header2 v-else />
    <router-view/>
    <Footer v-if="!flag" @func="getStatus"/>
    <Footer2 v-else/>
    <img :class="status==0?'chengnuohan':'chengnuohan cnh_animate'" :src="han" alt="">
    <!-- <img @click="navgate" class="baidu" src="./assets/images/05.png" alt=""> -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Header2 from '@/components/Header2.vue'
import Footer2 from '@/components/Footer2.vue'
export default {
  data() {
    return {
      han:'',
      status : 0,
      flag:false
    };
  },
  components: {
    Header,
    Footer,
    Header2,
    Footer2
  },
  methods: {

    baidu(){
      let htm = htm || []
      let hm = document.createElement('script')
      hm.src = "https://hm.baidu.com/hm.js?ba00bd6c84cde8f31b8de3d59bcafc07";
      let s = document.getElementsByTagName("script")[0]
      s.parentNode.insertBefore(hm,s)
    },
      loadhan(){
        this.$http.get("http://www2.uptbio.com/index/index/chenuo").then(
          function(res) {
            if (res.data.code == 0) {
              this.han = res.data.data.img
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
      },
      getStatus(data){
          this.status = data
          // console.log(this.msgFormSon)
      },
      getSEO() {
      this.$http.get("http://www2.uptbio.com/index/index/config").then(
        function(res) {
          // console.log(res)
          if (res.data.code == 0) {
            let head = document.getElementsByTagName('head');
            let meta = document.createElement('meta');
            meta.name = 'keywords'
            meta.content =res.data.data.seokeywo;
            head[0].appendChild(meta)

            let meta1 = document.createElement('meta');
            meta1.name = 'description'
            meta1.content =res.data.data.seoabstr;
            head[0].appendChild(meta1)
            
            document.getElementsByTagName("title")[0].innerText = res.data.data.seotitle;
          }
        },
        function() {
          // console.log("请求失败处理");
        }
      );
    },
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      this.flag = flag
      return flag;
    }
  },
  created(){
    this.getSEO()
  },
  mounted(){
    this.isMobile()
  },
  beforeMount() {
    this.loadhan()
    this.baidu()
  }
}
</script>
<style lang="scss">
.chengnuohan {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    width: 0px;
}
.cnh_animate{
  animation: cnhmove 1s 1;
  animation-fill-mode: forwards;
}
.cnh_animate2{
  animation: cnhmove2 1s 1;
  animation-fill-mode: forwards;
}
@keyframes cnhmove {
  0%{
    width:0px;
  }
  100%{
    width: 600px;
  }
}
@keyframes cnhmove2 {
  0%{
    width:600px;
  }
  100%{
    width: 0px;
  }
}
@media screen and(max-width:450px){
// #newBridge .nb-icon-right-bottom{
//       bottom: 100px !important;
//   }
}


</style>
