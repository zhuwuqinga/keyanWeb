<template>
  <div class="yixue2">
    <Topbg :img="topBg" />
    <div class="yixue_container flex_x_center2">
      <div class="yixue_right">
        <div class="yixue_info flex">
          <div class="detail_right">
            <p class="name" v-text="category.name"></p>
            <p class="yx_desc" v-text="category.abstract"></p>
            <div class="flex-wrap" v-if="detail.tag.length>0">
              <p v-for="(item,index) in detail.tag" :key="index" v-text="item.name" @click="erjiClick(item.id)"></p>
            </div>
            <div class="flex_x_center2 fuwu">
              <div class="fuwu_item" >
                <p>实验地区：</p>
                <div>服务全国</div>
              </div>
              <div class="fuwu_item" style="color:#FF5757;margin-left:100px;">
                <p>实验价格：</p>
                <div @click="download('报价表',baojia)">下载报价表</div>
              </div>
            </div>
            <a href="http://p.qiao.baidu.com/cps/chat?siteId=12578384&userId=24894010" target="blank" class="zixun flex_all_center">
              <img src="../assets/images/43.png" alt="">
              <p>在线咨询</p>
            </a>
          </div> 
        </div>
        
        <div class="case flex_all_center2" v-if="detail.anlizan.length>0">
          <p class="title">案例展示</p>
          <div class="title_line flex_y_center">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line1"></div>
          </div>
          <div class="case_list flex">
            <swiper class="case_swiper" :options="swiperOptions">
              <swiper-slide class="case_slide" :key="index" v-for="(img,index) in detail.anlizan">
                <img :src="img" alt />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <div class="fenzi flex_all_center2" v-if="detail.fenzish.length>0">
          <p class="title">{{category.name}}实验室</p>
          <div class="title_line flex_y_center">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line1"></div>
          </div>
          <div class="fz_list flex-wrap">
              <swiper class="case_swiper" :options="swiperOptions">
                <swiper-slide class="case_slide" :key="index" v-for="(img,index) in detail.fenzish">
                    <img :src="img" alt />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            <!-- <img :style="index%3==0?'':'margin-left:13px;'" :src="img" alt="" v-for="(img,index) in detail.fenzish" :key="index"> -->
          </div>
        </div>
        <div class="product_detail" v-if="erjiid!=''">
          <div class="flex_all_center2" v-if="category.fun_one_stus==1">
            <p class="title">{{category.fun_one_name}}</p>
            <div class="title_line flex_y_center">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line1"></div>
            </div>
            <div class="product_content" v-html="category.fun_one_contn"></div>
          </div>
          <div class="flex_all_center2" v-if="category.fun_two_stus==1">
            <p class="title">{{category.fun_two_name}}</p>
            <div class="title_line flex_y_center">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line1"></div>
            </div>
            <div class="product_content" v-html="category.fun_two_contn"></div>
          </div>
          <div class="flex_all_center2" v-if="category.fun_three_stus==1">
            <p class="title">{{category.fun_three_name}}</p>
            <div class="title_line flex_y_center">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line1"></div>
            </div>
            <div class="product_content" v-html="category.fun_three_contn"></div>
          </div>
          <div class="flex_all_center2" v-if="category.fun_four_stus==1">
            <p class="title">{{category.fun_four_name}}</p>
            <div class="title_line flex_y_center">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line1"></div>
            </div>
            <div class="product_content" v-html="category.fun_four_contn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import Topbg from "@/components/Topbg.vue";
import "../assets/css/yixue2.scss";
export default {
  name: "Yixue2",
  data() {
    return {
      tabindex :0,
      topBg: "",
      catList: [],
      yijiindex: 0,
      erjiid: "",
      swiperOptions2: {
        speed: 1000,
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptions:{
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 3000
        },
        loop: true,
        speed: 1000
        
      },
      detail: {
        tag : [],
        anlizan:[],
        fenzish :[]
      },
      category : {},
      experim : [],
      prodimg : [],
      proindex : 0,
      yijiid : '',
      hantext:'',
      hanimg : '',
      zixun:[],
      article:[],
      ziliaoList : [],
      btntype : 1,
      animgindex:0,
      baojia:''
    };
  },
  components: {
    Topbg
  },
  watch: {
    '$route' (to, from) { //监听路由是否变化
    // console.log(to)
      if(to.query.yijiid != from.query.yijiid || to.query.yijiindex != from.query.yijiindex || to.query.erjiid != from.query.erjiid){
        this.yijiid = to.query.yijiid;
        this.yijiindex = to.query.yijiindex;
        this.erjiid = to.query.erjiid;
        // this.loaddetail(to.query.yijiid);
        if(to.query.erjiid){
          let list = this.catList
          list[to.query.yijiindex].isshow = true
          this.catList = list
          this.loadproduct(to.query.erjiid)
          // this.postZixun(to.query.erjiid,'啊啊啊')
        }else{
          this.loaddetail(to.query.yijiid);
          // this.postZixun(to.query.yijiid,'啊啊啊')
        }
      }
    },
  },
  methods: {
    imgClick(e){
      this.proindex = e
    },
    imgClick2(e){
      this.animgindex = e
    },
    flagadd(){
      this.btntype = !1
    },
    flagminu(){
      this.btntype = 1
    },
    navgate(){
      window.location.href="http://p.qiao.baidu.com/cps/chat?siteId=12578384&userId=24894010"
    },
    tabClick(e){
      this.tabindex = e
    },
    yijiClick(e){
      this.yijiindex = e;
      this.loaddetail(this.catList[e].id);
      this.yijiid = this.catList[e].id,
      this.proindex = 0
      this.loadarticle()
      this.btntype = 1
      // this.postZixun(e,'啊啊啊')
    },
    yijiClickOpen(e) {
      let list = this.catList
      list[e].isshow = true
      this.catList = list
      // if(this.catList[e].product){
      //   this.erjiid = this.catList[e].product[0].id;
      // }
      // this.loaddetail(this.catList[e].id);
      // this.yijiid = this.catList[e].id
    },
    yijiClickClose(e){
      let list = this.catList
      list[e].isshow = false
      this.catList = list
      this.erjiid = ''
      
    },
    erjiClick(e ) {
      this.erjiid = e;
      
      this.proindex = 0
      this.loadproduct(e)
      let list = this.catList
      list[this.yijiindex].isshow = true
      this.catList = list
      // this.postZixun(e,'啊啊啊')
      this.btntype = 1
    },

    loadproduct(id){
      this.$http.get("http://www2.uptbio.com/index/index/product",{ params: { id: id }}).then(
        function(res) {
          if (res.data.code == 0) {
            this.prodimg = res.data.data.prodimg
            this.experim = res.data.data.experim
            this.category = res.data.data.product
            this.detail.tag = []
            this.detail.anlizan = []
            this.detail.fenzish = []
              this.postZixun(this.erjiid,this.category.name,1)
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
          params: { id: 21 }
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
    loaddata() {
      let query = this.$route.query
      // console.log(query)
      this.$http.get("http://www2.uptbio.com/index/index/category",{ params: { type: 1 }}).then(
        function(res) {
          if (res.body.code == 0) {
            let list = res.body.data
            for(let i in list){
              list[i].isshow = false
            }
            if(query.erjiid){
              list[query.yijiindex].isshow = true
            }
            
            // console.log(list)
            this.catList = list;
            //  console.log(this.catList)
            
          }
        },
        function() {
          // console.log("请求失败处理");
        }
      );
    },
    loaddetail(id) {
      this.$http
        .get("http://www2.uptbio.com/index/index/catedeatil", {
          params: { id: id }
        })
        .then(
          function(res) {
            if (res.body.code == 0) {
              this.prodimg = res.body.data.prodimg;
              this.category = res.body.data.category;
              this.detail.tag = res.body.data.tag;
              this.experim = res.body.data.experim;
              this.detail.anlizan = res.body.data.anlizan;
              this.detail.fenzish = res.body.data.fenzish;
              // console.log(this.detail);
              this.postZixun(this.yijiid,this.category.name,0)
              // let head = document.getElementsByTagName('head');
              // let meta = document.createElement('meta');
              // meta.name = 'keywords'
              // meta.content =res.data.data.seokeywo;
              // head[0].appendChild(meta)

              // let meta1 = document.createElement('meta');
              // meta1.name = 'description'
              // meta1.content =res.data.data.seoabstr;
              // head[0].appendChild(meta1)
              var objs = document.getElementsByTagName("meta");
              for(var i=0;i<objs.length;i++){
                if(objs[i].name === 'keywords'){
                  objs[i].content = res.body.data.category.seo_keyw;
                }
                if(objs[i].name === 'description'){
                  objs[i].content = res.body.data.category.seo_abst;
                }
              }
              document.getElementsByTagName("title")[0].innerText = res.body.data.category.seo_title;
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadhan(){
      this.$http
        .get("http://www2.uptbio.com/index/index/chenuo")
        .then(
          function(res) {
            // console.log(res)
            if (res.data.code == 0) {
              this.hantext = res.data.data.content
              this.hanimg = res.data.data.img
              this.baojia = res.data.data.file
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadzixun(flag){
      this.$http
        .get("http://www2.uptbio.com/index/index/consultation", {
          params: { id: flag==0?this.yijiid:this.erjiid,flag : flag }
        })
        .then(
          function(res) {
            if (res.data.code == 0) {
              this.zixun = res.data.data
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadarticle(){
      this.$http
        .get("http://www2.uptbio.com/index/index/technology", {
          params: { id: this.yijiid,p:1 }
        })
        .then(
          function(res) {
            // console.log(res)
            if (res.data.code == 0) {
              this.article = res.data.data
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadXzList(page) {
      this.$http
        .get("http://www2.uptbio.com/index/index/datadowm", {
          params: { type: 2, p: page }
        })
        .then(
          function(res) {
            // console.log(res);
            if (res.data.code == 0) {
                this.ziliaoList = res.data.data;
            } 
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    download(name, href) {
        var a = document.createElement("a"), //创建a标签
            e = document.createEvent("MouseEvents"); //创建鼠标事件对象
        e.initEvent("click", false, false); //初始化事件对象
        a.href = href; //设置下载地址
        a.download = name; //设置下载文件名
        a.dispatchEvent(e); //给指定的元素，执行事件click事件
    },
    postZixun(id,name,flag){
      this.$http
        .get("http://www2.uptbio.com/index/index/addconsultation", {
          params: { id: id, name: name ,flag:flag}
        })
        .then(
          function(res) {
            console.log(res);
            if (res.body.code == 0) {
                this.loadzixun(flag)
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
      // this.$router.replace('/yixue2/?yijiid='+this.yijiid+'&yijiindex='+this.yijiindex +'&erjiid='+this.erjiid);
      this.$router.push({name:'Yixue2',query:{yijiid:this.yijiid,yijiindex:this.yijiindex,erjiid:this.erjiid}})
    } else {
      // alert("pc端");
      // this.$router.replace('/yixue/?yijiid='+this.yijiid+'&yijiindex='+this.yijiindex +'&erjiid='+this.erjiid);
      this.$router.push({name:'Yixue',query:{yijiid:this.yijiid,yijiindex:this.yijiindex,erjiid:this.erjiid}})
      // ?yijiid=18&yijiindex=0&erjiid=46
    }
  },
  beforeMount() {
    let query = this.$route.query
    this.erjiid = query.erjiid;
    this.yijiid = query.yijiid;
    this.yijiindex = query.yijiindex;
    if(query.erjiid){
      this.loadproduct(query.erjiid);
      
    }else{
      this.loaddetail(query.yijiid);
      
    }
    
    this.loadbanner();
    this.loaddata();
    this.loadhan()
    this.loadarticle()
    this.loadXzList(1)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
  --swiper-navigation-color: #a2a2a2; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 16px; /* 设置按钮大小 */
}

.swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{
  opacity: 0.5 !important;
}
</style>
