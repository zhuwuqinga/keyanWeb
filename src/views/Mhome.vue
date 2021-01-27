<template>
  <div class="mhome">
    <!-- 轮播图 s-->
    <swiper class="banner" :options="swiperOptions">
      <swiper-slide :key="index" v-for="(banner,index) in indexData.banner">
        <img :src="banner.banner" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 轮播图 e-->

    <!-- 医学实验室 s -->
    <div class="laboratory flex_all_center2">
      <p class="title">医学实验室</p>
      <div class="title_line flex_y_center">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line1"></div>
      </div>
      <div class="flex lab_content">
        <div class="lab_left flex-wrap">
          <div
            :class="catindex==index?'lab_left_item active':'lab_left_item'"
            :key="index"
            v-for="(category,index) in indexData.category"
            v-text="category.name"
            @click="changeCat(category.id,index)"
          ></div>
        </div>
        <!-- <div class="lab_right">
          <div class="lab_right_top">
            <img class="lab_img" :src="cateimg[yximgindex].img" alt />
            <p></p>
          </div>
          <div class="lab_swiper swiper-container" v-swiper:mySwiper="swiperOptions2">
            <div class="swiper-wrapper">
              <div class="swiper-slide" @click="imgClick(index)" :key="index" v-for="(category,index) in cateimg">
                <img  :key="index" :src="category.img" alt />
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div> -->
      </div>
    </div>
    <!-- 医学实验室 e -->

    <!-- 国家科研项目实验占比 s -->
    <div class="proportion flex_all_center2">
      <p class="title" style="color:#fff;">国家科研项目实验占比</p>
      <div class="title_line flex_y_center">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line1"></div>
      </div>
      <div class="flex_x_center proportion_content">
        <img class="ditu" src="../assets/images/ditu.png" alt="">
        <div class="proportion_content_right flex-x-center">
          <div class="flex_all_center pcr_top">
            <div class="flex_x_center">
              <p class="pcr_top_num" v-text="indexData.experiment.sgyy+'+'"></p>
              <p>三甲医院</p>
            </div>
            <div class="flex_x_center">
              <p class="pcr_top_num" v-text="indexData.experiment.gjyx+'+'"></p>
              <p>高级院校</p>
            </div>
            <div class="flex_x_center">
              <p class="pcr_top_num" v-text="indexData.experiment.jxsh+'+'"></p>
              <p>经销商户</p>
            </div>
            <div class="flex_x_center">
              <p class="pcr_top_num" v-text="indexData.experiment.yfxm+'+'"></p>
              <p>新研发项目</p>
            </div>
          </div>
          <div class="bilv">
            <div class="flex_y_center">
              <p>省级项目</p>
              <div :style="'width:'+10*indexData.experiment.sjxm+'px;background:#DFC3C3;'"></div>
              <span style="color:#DFC3C3;" v-text="indexData.experiment.sjxm+'%'"></span>
            </div>
            <div class="flex_y_center">
              <p>分子检测</p>
              <div :style="'width:'+10*indexData.experiment.fzjc+'px;background:#D8D49F;'"></div>
              <span style="color:#D8D49F;" v-text="indexData.experiment.fzjc+'%'"></span>
            </div>
            <div class="flex_y_center">
              <p>病理染色</p>
              <div :style="'width:'+10*indexData.experiment.blrs+'px;background:#79C3B1;'"></div>
              <span style="color:#79C3B1;" v-text="indexData.experiment.blrs+'%'"></span>
            </div>
            <div class="flex_y_center">
              <p>载体构建</p>
              <div :style="'width:'+10*indexData.experiment.ztgj+'px;background:#8DB3D1;'"></div>
              <span style="color:#8DB3D1;" v-text="indexData.experiment.ztgj+'%'"></span>
            </div>
            <div class="flex_y_center">
              <p>蛋白检测</p>
              <div :style="'width:'+10*indexData.experiment.dbjc+'px;background:#DFC3C3;'"></div>
              <span style="color:#DFC3C3;" v-text="indexData.experiment.dbjc+'%'"></span>
            </div>
            <div class="flex_y_center">
              <p>细胞实验</p>
              <div :style="'width:'+10*indexData.experiment.xbsy+'px;background:#D8D49F;'"></div>
              <span style="color:#D8D49F;" v-text="indexData.experiment.xbsy+'%'"></span>
            </div>
            <div class="flex_y_center">
              <p>流式检测</p>
              <div :style="'width:'+10*indexData.experiment.lsjc+'px;background:#79C3B1;'"></div>
              <span style="color:#79C3B1;" v-text="indexData.experiment.lsjc+'%'"></span>
            </div>
            <div class="flex_y_center">
              <p>外泌体</p>
              <div :style="'width:'+10*indexData.experiment.wmt+'px;background:#8DB3D1;'"></div>
              <span style="color:#8DB3D1;" v-text="indexData.experiment.wmt+'%'"></span>
            </div>
            <div class="flex_y_center">
              <p>动物造模</p>
              <div :style="'width:'+10*indexData.experiment.dwzm+'px;background:#DFC3C3;'"></div>
              <span style="color:#DFC3C3;" v-text="indexData.experiment.dwzm+'%'"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 国家科研项目实验占比 e -->

    <!-- 文章资讯 s-->
    <div class="article flex_all_center2">
      <p class="title">文章资讯</p>
      <div class="title_line flex_y_center">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line1"></div>
      </div>
      <div class="aiticle_content">
        <router-link to class="ac_left">
          <img :src="indexData.arcicate[artIndex].img" alt="">
          <p v-text="indexData.arcicate[artIndex].type_name"></p>
        </router-link>
        <div class="flex_y_center" style="padding:20px 0;">
            <div class="ac_center flex_x_center">
                <div :class="index==artIndex?'acc_item active flex_all_center2':'acc_item flex_all_center2'" v-for="(art,index) in indexData.arcicate" :key="index" @click="artClick(index)">
                    <p class="flex_y_center art_title">
                    <span v-text="art.type_name"></span>
                    <span style="margin-left:10px;" v-if="index==artIndex">></span>
                    </p>
                    <div @click="more(index)">more+</div>
                </div>
            </div>
            <div class="ac_right" v-if="indexData.arcilist[artlistIndex].length>0">
                <router-link :to="'/articledetail/'+item.id" class="acr_item flex_y_center" v-for="(item,index) in indexData.arcilist[artlistIndex]" :key="index">
                    <div class="flex_all_center2 art_time">
                    <p v-text="item.date"></p>
                    <div v-text="item.year_month"></div>
                    </div>
                    <div class="acr_right">
                    <p class="text_more" style="font-size:15px;" v-text="item.title"></p>
                    <div class="text_more2" v-text="item.abstract"></div>
                    </div>
                </router-link>
            </div>
            <div class="ac_right" v-else>
                暂无数据~
            </div>
        </div>
        
        
      </div>

    </div>
    <!-- 文章资讯 e-->
  </div>
</template>

<script>
// @ is an alias to /src
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "../assets/css/index2.scss";
export default {
  name: "Mhome",
  data() {
    return {
      indexData: {
        experiment : {
          sgyy : ''
        },
        arcicate:[{
          img:'',
          type_name:''
        }],
        arcilist:[],
        banner:[],
        category:[],
        cateimg:[],
        product:[]
      },
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 3000
        },
        loop: true,
        speed: 1000
      },
      swiperOptions2: {
        speed: 1000,
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      catindex: 0,
      artIndex: 0,
      artlistIndex: 1,
      cateimg:[{
        img:''
      }],
      articleurl:'/jishuArticle',
      yximgindex:0,
      flag:false
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  methods: {
    imgClick(e){
      this.yximgindex=e
    },
    loaddata() {
      this.$http.get("http://www2.uptbio.com/index/index/homep").then(
        function(res) {
          if (res.data.code == 0) {
            this.indexData = res.data.data;
            this.cateimg = res.data.data.cateimg[res.data.data.category[0].id]
          }
        },
        function() {
          // console.log("请求失败处理");
        }
      );
    },
    changeCat(id,e) {
      this.catindex = e;
      if(this.indexData.cateimg[id].length>0){
        this.cateimg = this.indexData.cateimg[id]
      }
    },

    more(e){
      console.log(e)
      if(e==0){
        this.$router.push({name:'JishuArticle'})
      }
      else if(e==1){
        this.$router.push({name:'About',query:{curindex:1,curerjiIndex2:0}})
      }else if(e==2){
        this.$router.push({name:'About',query:{curindex:1,curerjiIndex2:2}})
      }
    },
    artClick(e) {
      this.artIndex = e;
      if(e==0){
        this.artlistIndex=1
      }else if(e==1){
        this.artlistIndex=3
      }else if(e==2){
        this.artlistIndex=4
      }
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
      this.$router.replace('/mhome');
      
    } else {
      // alert("pc端");
      this.$router.replace('/');
    }
  },
  beforeMount() {
    this.loaddata();
    this.getSEO()
  }
};
</script>

<style lang="scss" scoped>
.swiper-container {
  --swiper-navigation-color: #a2a2a2; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 16px; /* 设置按钮大小 */
}
.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{
  opacity: 0.5 !important;
}
</style>
