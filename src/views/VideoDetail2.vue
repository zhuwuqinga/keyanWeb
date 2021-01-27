<template>
  <div class="video2">
    <Topbg :img="topBg" />
    <div class="v_detail">
      <div class="d_nav">技术资源 > 技术培训 > {{detail.title}}</div>
      <div class="d_content2">
        <video :src="detail.video" controls="true"></video>
        <div class="v_title" v-text="detail.title"></div>
        <div class="flex_y_center tips">
          <img src="../assets/images/029.png" alt="">
          <p style="margin-left:9px;" v-text="detail.addtime"></p>
          <p style="margin-left:70px;">来源/作者：{{detail.author}}</p>
        </div>
        <div class="flex_y_center more">
          <p>相关视频</p>
          <div>更多 >></div>
        </div>
        <div class="ar_list flex-wrap">
          <router-link
            :to="'/videoDetail2/'+item.id"
            class="ar_item"
            v-for="(item,index) in detail.more"
            :key="index"
          >
            <img :src="item.img" alt />
            <div class="art_bot">
              <p class="text_more" v-text="item.title"></p>
              <p style="color:#A2A2A2" v-text="item.add_date"></p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Topbg from "@/components/Topbg.vue";
import "../assets/css/video2.scss";
export default {
  name: "VideoDetail2",
  data() {
    return {
      detail: {},
      topBg:'',
      id : '',
    };
  },
  components: {
    Topbg
  },
  watch: {
    '$route' (to, from) { //监听路由是否变化
    console.log(to)
      if(to.params.id != from.params.id){
        this.id = to.params.id;
        this.loaddetail(to.params.id);//重新加载数据
      }
    }
  },
  methods: {
    loaddetail() {
      this.$http
        .get("http://www2.uptbio.com/index/index/videpdetail", {
          params: { id: this.id }
        })
        .then(
          function(res) {
            console.log(res)
            if (res.data.code == 0) {
              this.detail = res.data.data;
              // document.getElementsByTagName("title")[0].innerText = res.data.data.title;
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
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
    },
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      this.flag = flag
      return flag;
    }
  },
  mounted(){
   if (this.isMobile()) {
      // alert("手机端");
      this.$router.replace('/videoDetail2/'+this.id);
      
    } else {
      // alert("pc端");
      this.$router.replace('/videoDetail/'+this.id);
    }
  },
  beforeMount() {
    this.id = this.$route.params.id;
    this.loaddetail()
    this.loadbanner();
    this.getSEO()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
