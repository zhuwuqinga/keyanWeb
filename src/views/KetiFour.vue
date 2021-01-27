<template>
  <div class="">
    <Topbg :img="topBg" />

    <div class="keti">
      <p class="keti_title">细胞自噬</p>
      <div class="keti_desc">自噬是细胞内主要的降解过程，在营养或能量匮乏的条件下被激活。自噬的改变与临床相关的各种疾病如癌症、神经变性和心脏疾病有关。在过去的十年里，自噬作为一种新型治疗方法的发展目标引起了广泛的关注，相关的基础研究也一如既往的火热。2016年，日本科学家大隅良典凭细胞自噬机制的发现独享2016年诺贝尔生理学或医学奖。U平台掌握自噬常用检测手段，如：MDC、自噬双标腺病毒、WB/IF检测LC3B、细胞的HE、雷帕霉素/3-MA诱导及电镜等，确保您整体课题的技术可行性。</div>
      <img src="../assets/images/keti4.png" alt="">
      <!-- <router-link to class="btn">获取【标题】整体研究培训视频</router-link> -->
    </div>
  </div>
</template>

<script>
import Topbg from "@/components/Topbg.vue";
import "../assets/css/keti.scss"
export default {
  name: "KetiFour",
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
    }
  },
  beforeMount() {
    this.loadbanner();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
