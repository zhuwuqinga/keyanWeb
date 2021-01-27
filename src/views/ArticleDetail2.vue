<template>
  <div class="article_detail2">
    <Topbg :img="topBg" />
    <div class="detail">
      <div v-if="type==1" class="d_nav">技术资源 > 技术文章 > {{detail.title}}</div>
      <div v-else-if="type==2" class="d_nav">技术资源 > 技术培训 > {{detail.title}}</div>
      <div v-else-if="type==3" class="d_nav">公司展示 > 行业动态 > {{detail.title}}</div>
      <div v-else-if="type==4" class="d_nav">公司展示 > 公司新闻 > {{detail.title}}</div>
      <div class="d_content">
        <p class="d_title">{{detail.title}}</p>
        <div class="date flex_all_center">
          <img src="../assets/images/029.png" alt="">
          <span>{{detail.add_date}}</span>
          <p>来源/作者：{{detail.author}}</p>
        </div>
        <div class="content" v-html="detail.content"></div>
        <div class="share flex_y_center">
          <div class="share_left flex_y_center">
            <!-- <p>分享到</p>
            <router-link to>
              <img src="../assets/images/detail1.png" alt="">
            </router-link>
            <router-link to>
              <img src="../assets/images/detail2.png" alt="">
            </router-link>
            <router-link to>
              <img src="../assets/images/detail3.png" alt="">
            </router-link>
            <router-link to>
              <img src="../assets/images/detail4.png" alt="">
            </router-link> -->
          </div>
          <div class="share_right ">
            <router-link class="flex_y_center" v-if="last.length!=0" :to="'/articledetail2/'+last.id">
              <p>上一篇：</p>
              <div>{{last.title}}</div>
            </router-link>
            <div v-else class="flex_y_center" >
              <p>上一篇：</p>
              <div>暂无数据</div>
            </div>
            <router-link style="margin-left:0px;" class="flex_y_center" v-if="next.length!=0"  :to="'/articledetail2/'+next.id">
              <p>下一篇：</p>
              <div>{{next.title}}</div>
            </router-link>
            <div v-else style="margin-left:0px;" class="flex_y_center" >
              <p>下一篇：</p>
              <div>暂无数据</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Topbg from "@/components/Topbg.vue";
import "../assets/css/articledetail2.scss";
export default {
  name: "ArticleDetail2",
  data() {
    return {
      detail: {},
      next : {},
      last:{},
      topBg:'',
      id : '',
      type : ''
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
        .get("http://www2.uptbio.com/index/index/arcidetai", {
          params: { id: this.id }
        })
        .then(
          function(res) {
            // console.log(res)
            if (res.data.code == 0) {
              this.detail = res.data.data.detail;
              this.next = res.data.data.next;
              this.last = res.data.data.last;
              this.type = res.data.data.type;
              var objs = document.getElementsByTagName("meta");
              for(var i=0;i<objs.length;i++){
                if(objs[i].name === 'keywords'){
                  objs[i].content = res.data.data.detail.seo_keyw;
                }
                if(objs[i].name === 'description'){
                  objs[i].content = res.data.data.detail.seo_abst;
                }
              }
              document.getElementsByTagName("title")[0].innerText = res.data.data.detail.seo_title;
              // document.getElementsByTagName("title")[0].innerText = res.data.data.detail.title;
              // console.log(this.detail);
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
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      this.flag = flag
      return flag;
    }
  },
  mounted(){
   if (this.isMobile()) {
      // alert("手机端");
      this.$router.replace('/articledetail2/'+this.id);
      
    } else {
      // alert("pc端");
      this.$router.replace('/articledetail/'+this.id);
    }
  },
  beforeMount() {
    this.id = this.$route.params.id;
    this.loaddetail()
    this.loadbanner();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
