<template>
  <div class="">
    <Topbg :img="topBg" />

    <div class="keti">
      <p class="keti_title">线粒体</p>
      <div class="keti_desc">线粒体除了作为细胞内能量生成的关键细胞器，还参与细胞凋亡、自由基生产、脂质代谢等代谢过程。一些研究报道指出，线粒体功能异常会导致许多常见疾病的病理，包括神经退化、代谢疾病,心脏衰竭，缺血再灌注损伤和原生动物的感染等。因此，线粒体是这些高度流行疾病的一个重要药物靶点。一些旨在治疗性恢复线粒体功能的策略正在出现，少数药物已进入临床试验。</div>
      <img src="../assets/images/keti3.png" alt="">
      <!-- <router-link to class="btn">获取【标题】整体研究培训视频</router-link> -->
    </div>
  </div>
</template>

<script>
import Topbg from "@/components/Topbg.vue";
import "../assets/css/keti.scss"
export default {
  name: "KetiThree",
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
