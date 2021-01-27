<template>
  <div class="">
    <Topbg :img="topBg" />

    <div class="keti">
      <p class="keti_title">细胞铁死亡</p>
      <div class="keti_desc">细胞“铁死亡”（ferroptosis）是一种铁<span style="color:#FF2020">依赖性脂类过氧化物累积</span>所引起的细胞死亡方式，它在细胞形态学、生化特征，以及基因水平上都与凋亡、坏死、自噬等传统的细胞死亡方式具有显著的差别。</div>
      <img src="../assets/images/keti1.png" alt="">
      <!-- <router-link to class="btn">获取【标题】整体研究培训视频</router-link> -->
    </div>
  </div>
</template>

<script>
import Topbg from "@/components/Topbg.vue";
import "../assets/css/keti.scss"
export default {
  name: "KetiOne",
  data() {
    return {
      topBg:''
    };
  },
  components: {
    Topbg
  },
  methods : {
      loadbanner() {
      this.$http
        .get("http://www2.uptbio.com/index/index/otherbann", {
          params: { id: 23 }
        })
        .then(
          function(res) {
            if (res.body.code == 0) {
              this.topBg = res.body.data;
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    getSEO() {
      this.$http.get("http://www2.uptbio.com/index/index/config").then(
        function(res) {
          console.log(res)
          if (res.data.code == 0) {
            var objs = document.getElementsByTagName("meta");
              for(var i=0;i<objs.length;i++){
                if(objs[i].name === 'keywords'){
                  objs[i].content = res.data.data.seo_keyw;
                }
                if(objs[i].name === 'description'){
                  objs[i].content = res.data.data.seo_abst;
                }
              }
              document.getElementsByTagName("title")[0].innerText = res.data.data.seotitle;
          }
        },
        function() {
          // console.log("请求失败处理");
        }
      );
    }
  },
  beforeMount() {
    this.loadbanner();
    this.getSEO()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
