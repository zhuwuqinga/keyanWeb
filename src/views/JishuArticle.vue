<template>
  <div class="">
    <Topbg :img="topBg" />
    <div class="article_content flex_x_center2">
      <div class="article_left">
        <div class="al_item flex_all_center" @click="leftClick(0)">
          <img v-if="curindex==0" class="icon" src="../assets/images/37-1.png" alt />
          <img v-else class="icon" src="../assets/images/37-2.png" alt />
          <div :class="curindex==0?'active':''">技术文章</div>
          <img v-if="curindex==0" class="icon_right" src="../assets/images/right2.png" alt />
          <img v-else class="icon_right" src="../assets/images/right1.png" alt />
        </div>
        <div class="al_item flex_all_center" @click="leftClick(1)">
          <img v-if="curindex==1" class="icon" src="../assets/images/34-2.png" alt />
          <img v-else class="icon" src="../assets/images/34-1.png" alt />
          <div :class="curindex==1?'active':''">资料下载</div>
          <img v-if="curindex==1" class="icon_right" src="../assets/images/right2.png" alt />
          <img v-else class="icon_right" src="../assets/images/right1.png" alt />
        </div>
        <div class="al_item flex_all_center" @click="leftClick(2)">
          <img v-if="curindex==2" class="icon" src="../assets/images/38-1.png" alt />
          <img v-else class="icon" src="../assets/images/38-2.png" alt />
          <div :class="curindex==2?'active':''">技术培训</div>
          <img v-if="curindex==2" class="icon_right" src="../assets/images/right2.png" alt />
          <img v-else class="icon_right" src="../assets/images/right1.png" alt />
        </div>
        <div class="al_item flex_all_center" @click="leftClick(3)">
          <img v-if="curindex==3" class="icon" src="../assets/images/38-1.png" alt />
          <img v-else class="icon" src="../assets/images/38-2.png" alt />
          <div :class="curindex==3?'active':''">软件下载</div>
          <img v-if="curindex==3" class="icon_right" src="../assets/images/right2.png" alt />
          <img v-else class="icon_right" src="../assets/images/right1.png" alt />
        </div>
      </div>
      <div class="article_right">
        <div v-if="curindex==0">
          <div class="class_box flex-wrap">
            <p
              :style="index%7==0?'':'margin-left:18px;'"
              :class="index==curYjIndex?'class_item active':'class_item'"
              v-for="(item,index) in catList"
              :key="index"
              v-text="item.name"
              @click="classClick(item.id,index)"
            ></p>
          </div>
          <div class="ar_list flex-wrap">
            <router-link
              :to="'/articledetail/'+item.id"
              :style="index%4==0?'':'margin-left:39px;'"
              class="ar_item"
              v-for="(item,index) in articleList"
              :key="index"
            >
              <img :src="item.img" alt />
              <div class="art_bot">
                <p class="text_more" v-text="item.title"></p>
                <p style="color:#A2A2A2" v-text="item.add_date"></p>
              </div>
            </router-link>
          </div>
          <div v-if="articleList.length>0">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCount"
              :page-size="8"
              :current-page="currentPage"
              @current-change="pageChange"
              @prev-click="prev"
              @next-click="next"
            >
            </el-pagination>
          </div>
          <div class="notdata" v-else>暂无数据~</div>
        </div>
        <div v-if="curindex==1">
          <p class="loadtitle">资料下载</p>
          <div class="loadlist">
            <div class="loaditem flex_y_center" v-for="(item,index) in ziliaoList" :key="index">
              <div class="loaditem_left" v-text="item.name"></div>
              <p class="loaditem_right" @click="download(item.name,item.file)">下载</p>
            </div>
          </div>
        </div>
        <div v-if="curindex==2">
          <div class="class_box flex-wrap">
            <p
              :style="index%7==0?'':'margin-left:18px;'"
              :class="index==curYjIndex2?'class_item active':'class_item'"
              v-for="(item,index) in catList"
              :key="index"
              v-text="item.name"
              @click="classClick2(item.id,index)"
            ></p>
          </div>
          <div class="ar_list flex-wrap">
            <router-link
              :to="'/videoDetail/'+item.id"
              :style="index%4==0?'':'margin-left:39px;'"
              class="ar_item"
              v-for="(item,index) in peixunList"
              :key="index"
            >
              <img :src="item.img" alt />
              <div class="art_bot">
                <p class="text_more" v-text="item.title"></p>
                <p style="color:#A2A2A2" v-text="item.add_date"></p>
              </div>
            </router-link>
          </div>
          <div v-if="peixunList.length>0">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="totalCount2"
              :page-size="8"
              :current-page="currentPage"
              @current-change="pageChange2"
              @prev-click="prev2"
              @next-click="next2"
            >
            </el-pagination>
          </div>
          <div class="notdata" v-else>暂无数据~</div>
        </div>
        <div v-if="curindex==3">
          <p class="loadtitle">软件下载</p>
          <div class="loadlist">
            <div class="loaditem flex_y_center" v-for="(item,index) in ruanjianList" :key="index">
              <div class="loaditem_left" v-text="item.name"></div>
              <p class="loaditem_right" @click="download(item.name,item.file)">下载</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbg from "@/components/Topbg.vue";
import "../assets/css/article.scss";
export default {
  name: "JishuArticle",
  data() {
    return {
      curindex: 0,
      catList: [],
      curYjIndex: 0,
      curid: "",
      curYjIndex2: 0,
      curid2: "",
      articleList: [],
      ruanjianList :[],
      ziliaoList :[],
      peixunList:[],
      topBg : '',
      totalCount:0,
      currentPage:1,
      totalCount2:0
    };
  },
  components: {
    Topbg
  },
  methods: {
    pageChange(e){
      console.log(e)
      this.loadArticle(this.curid,e)
    },
    prev(e){
      console.log(e)
      this.loadArticle(this.curid,e)
    },
    next(e){
      console.log(e)
      this.loadArticle(this.curid,e)
    },

    pageChange2(e){
      console.log(e)
      this.loadPeixun(this.curid,e)
    },
    prev2(e){
      console.log(e)
      this.loadPeixun(this.curid,e)
    },
    next2(e){
      console.log(e)
      this.loadPeixun(this.curid,e)
    },
    download(name, href) {
        var a = document.createElement("a"), //创建a标签
            e = document.createEvent("MouseEvents"); //创建鼠标事件对象
        e.initEvent("click", false, false); //初始化事件对象
        a.href = href; //设置下载地址
        a.download = name; //设置下载文件名
        a.dispatchEvent(e); //给指定的元素，执行事件click事件
    },
    loadbanner() {
      this.$http
        .get("http://www2.uptbio.com/index/index/otherbann", {
          params: { id: 24 }
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
    leftClick(e) {
      this.curindex = e;
    },
    classClick(id, index) {
      this.curid = id;
      this.curYjIndex = index;
      this.loadArticle(id, 1);
    },
    classClick2(id, index){
      this.curid2 = id;
      this.curYjIndex2 = index;
      this.loadPeixun(id, 1);
    },
    loaddata() {
      this.$http.get("http://www2.uptbio.com/index/index/category").then(
        function(res) {
          if (res.body.code == 0) {
            this.catList = res.body.data;
            this.curid = res.body.data[0].id;
            this.loadArticle(res.body.data[0].id, 1);
            this.loadPeixun(res.body.data[0].id, 1);
          }
        },
        function() {
          // console.log("请求失败处理");
        }
      );
    },
    loadArticle(id, page) {
      this.$http
        .get("http://www2.uptbio.com/index/index/technology", {
          params: { id: id, p: page }
        })
        .then(
          function(res) {
            // console.log(res);
            if (res.data.code == 0) {
              this.articleList = res.data.data;
              this.totalCount = res.data.count
            } else{
              this.articleList = [];
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadPeixun(id, page) {
      this.$http
        .get("http://www2.uptbio.com/index/index/train", {
          params: { id: id, p: page }
        })
        .then(
          function(res) {
            // console.log(res);
            if (res.data.code == 0) {
              this.peixunList = res.data.data;
              this.totalCount2 = res.data.count
            } 
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadXzList(type, page) {
      this.$http
        .get("http://www2.uptbio.com/index/index/datadowm", {
          params: { type: type, p: page }
        })
        .then(
          function(res) {
            // console.log(res);
            if (res.data.code == 0) {
              if (type == 1) {
                this.ruanjianList = res.data.data;
              } else {
                this.ziliaoList = res.data.data;
              }
            } else {
              if (page == 1) {
                if (type == 1) {
                  this.ruanjianList = [];
                } else {
                  this.ziliaoList = [];
                }
              }
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
      this.$router.replace('/jishuArticle2');
      
    } else {
      // alert("pc端");
      this.$router.replace('/jishuArticle/'+this.$route.params.index);
    }
  },
  beforeMount() {
    this.curindex = this.$route.params.index;
    this.loaddata();
    this.loadXzList(1);
    this.loadXzList(2);
    this.loadbanner()
    this.getSEO()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-pagination{
  display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>
