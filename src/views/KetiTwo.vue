<template>
  <div class="">
    <Topbg :img="topBg" />

    <div class="keti">
      <p class="keti_title">非编码RNA</p>
      <div class="keti_desc">非编码RNA(Non-coding RNA)是指不编码蛋白质的RNA。其中包括rRNA，tRNA，snRNA，snoRNA 和microRNA 等多种已知功能的 RNA，还包括未知功能的RNA。这些RNA的共同特点是都能从基因组上转录而来，但是不翻译成蛋白，因此早期被称为“垃圾RNA”。 随着对RNA研究的不断深入，人们发现，非编码RNA的突变或表达异常与许多疾病的发生密切相关，非编码RNA也越来越引起人们的关注。下面为大家简要介绍非编码RNA中的三个重量级成员——miRNA、lncRNA和circRNA。</div>
      <img src="../assets/images/keti2.png" alt="">
      <!-- <router-link to class="btn">获取【标题】整体研究培训视频</router-link> -->
    </div>
  </div>
</template>

<script>
import Topbg from "@/components/Topbg.vue";
import "../assets/css/keti.scss"
export default {
  name: "KetiTwo",
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
