<template>
  <div class="about2">
    <Topbg :img="topBg" />
    <div class="article_content flex_x_center2">
      <div class="article_left2">
        <div class="al_item">
          <div class="flex_all_center" @click="leftClick(0)">
            <div :class="curindex==0?'active':''">实验室展示</div>
            <img v-if="curindex==0" class="icon_right" src="../assets/images/jiantou1.png" alt />
            <img v-else class="icon_right" src="../assets/images/jiantou2.png" alt />
          </div>
          <div v-if="curindex==0" class="al_erji" >
            <p :class="curerjiIndex1==1?'active':''" @click="erjiClick1(1)">实验室介绍</p>
            <p :class="curerjiIndex1==0?'active':''" @click="erjiClick1(0)">实验承诺函</p>
            <p :class="curerjiIndex1==2?'active':''" @click="erjiClick1(2)">实地考察</p>
          </div>
        </div>
        <div class="al_item">
          <div class="flex_all_center" @click="leftClick(1)">
            <div :class="curindex==1?'active':''">新闻动态</div>
            <img v-if="curindex==1" class="icon_right" src="../assets/images/jiantou1.png" alt />
            <img v-else class="icon_right" src="../assets/images/jiantou2.png" alt />
          </div>
          <div v-if="curindex==1" class="al_erji">
            <p :class="curerjiIndex2==0?'active':''" @click="erjiClick2(0)">行业新闻</p>
            <p :class="curerjiIndex2==1?'active':''" @click="erjiClick2(1)">公司动态</p>
          </div>
        </div>
        <div class="al_item">
          <div class="flex_all_center" @click="leftClick(2)">
            <div :class="curindex==2?'active':''">合作平台</div>
            <img v-if="curindex==2" class="icon_right" src="../assets/images/jiantou1.png" alt />
            <img v-else class="icon_right" src="../assets/images/jiantou2.png" alt />
          </div>
          <div v-if="curindex==2" class="al_erji" >
            <p :class="curerjiIndex3==0?'active':''" @click="erjiClick3(0)">合作学校</p>
            <p :class="curerjiIndex3==1?'active':''" @click="erjiClick3(1)">合作医院</p>
            <p :class="curerjiIndex3==2?'active':''" @click="erjiClick3(2)">合作经销商</p>
          </div>
        </div>
      </div>
      <div class="article_right">
        <div v-if="curindex==0">
          <div class="chengnuohans" v-if="curerjiIndex1==0">
            <p class="cn_title">实验承诺函</p>
            <div v-html="chenuo.txt"></div>
            <img :src="chenuo.img" alt="">
            <div class="loadcn" @click="downloadImg()">下载实验承诺函</div>
          </div>
          <div class="shiyanshi" v-if="curerjiIndex1==1">
            <div class="flex_all_center2">
              <p class="title">我们的团队</p>
              <div class="title_line flex_y_center">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line1"></div>
              </div>
              <div class="theteam flex">
                
                <div class="team_right">
                  <p class="team_content" v-text="laboratory.sysjs"></p>
                  <div class="flex">
                    <div>
                      <p v-text="laboratory.education1_name"></p>
                      <p >
                        <span style="font-size:20px;" v-text="laboratory.education1_num"></span>
                        <span>人</span>
                      </p>
                    </div>
                    <div>
                      <p v-text="laboratory.education2_name"></p>
                      <p >
                        <span style="font-size:20px;" v-text="laboratory.education2_num"></span>
                        <span>人</span>
                      </p>
                    </div>
                    <div>
                      <p v-text="laboratory.education3_name"></p>
                      <p >
                        <span style="font-size:20px;" v-text="laboratory.education3_num"></span>
                        <span>人</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div style="margin-top:20px;" class="flex_all_center2">
              <p class="title">实验室</p>
              <div class="title_line flex_y_center">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line1"></div>
              </div>
              <img class="laboratoryimg" :src="laboratory.laboratoryimg" alt="">
            </div>
            <div style="margin-top:20px;" class="flex_all_center2">
              <p class="title">实验设备</p>
              <div class="title_line flex_y_center">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line1"></div>
              </div>
              <div class="laber flex-wrap">
                <div class="swiper_item" :key="index" v-for="(img,index) in laboratory.equipment">
                    <img :src="img.img" alt />
                    <p v-text="img.title"></p>
                </div>
               </div>
            </div>
          </div>
          <div class="kaocha" v-if="curerjiIndex1==2">
            <div class="flex_all_center2 kc_top">
              <img src="../assets/images/024.jpg" alt="">
              <p>申请实地考察</p>
              <div>公司已建立一千五百平方米的高端生物医学实验室， 拥有整体万级局部百级GMP生产车间、仪器设备共计200余台。保藏有干细胞、原代细胞、肿瘤细胞、cDNA、载体、菌株等资源十余万种，组建了分子、细胞、蛋白检测、病理等多个技术平台， 使用一套严格的实验技术操作规范和质量控制体系（已通过ISO9001认证）。</div>
            </div>
            <div class="form flex_all_center2">
              <input type="text" v-model="form.name" placeholder="您的姓名">
              <input type="text" v-model="form.tel" placeholder="您的电话">
              <textarea name="" id="" cols="30" rows="10" v-model="form.desc" placeholder="其他备注"></textarea>
              <div :class="isclick?'submit':'submit notclick' " @click="submit">提交申请</div>
            </div>
            <div class="flex-wrap">
              <div class="flex_x_center">
                <img src="../assets/images/info1.png" alt="">
                <p>客服电话</p>
                <div v-text="config.phone"></div>
              </div>
              <div class="flex_x_center">
                <img src="../assets/images/info2.png" alt="">
                <p>公司地址</p>
                <div v-text="config.address"></div>
              </div>
              <div class="flex_x_center">
                <img src="../assets/images/info3.png" alt="">
                <p>电子邮件</p>
                <div v-text="config.email"></div>
              </div>
              <div class="flex_x_center">
                <img src="../assets/images/info1.png" alt="">
                <p>QQ咨询</p>
                <div v-text="config.qq"></div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="curindex==1">
          <div v-if="curerjiIndex2==0">
            <div class="ar_list flex-wrap" v-if="ruanjianList.length>0">
              <router-link
                :to="''"
                :style="index%4==0?'':'margin-left:39px;'"
                class="ar_item2"
                v-for="(item,index) in ruanjianList"
                :key="index"
              >
                <img :src="item.img" alt />
                <div class="art_bot2">
                  <p class="text_more" v-text="item.title"></p>
                  <p style="color:#A2A2A2" v-text="item.add_date"></p>
                </div>
              </router-link>
            </div>
            <div class="notdata" v-else>暂无数据</div>
          </div>
          <div v-if="curerjiIndex2==1">
            <div class="ar_list" v-if="ziliaoList.length>0">
              <router-link
                :to="'/articledetail2/'+item.id"
                class="ar_item2 flex"
                v-for="(item,index) in ziliaoList"
                :key="index"
              >
                <img :src="item.img" alt />
                <div class="art_bot2">
                  <p class="text_more" v-text="item.title"></p>
                  <p class="text_more2 ar_desc" v-text="item.abstract"></p>
                  <p style="color:#A2A2A2" v-text="item.add_date"></p>
                </div>
              </router-link>
            </div>
            <div class="notdata" v-else>暂无数据</div>
          </div>
        </div>
        <div v-if="curindex==2">
          <div v-if="curerjiIndex3==0">
            <p class="loadtitle">合作学校</p>
            <div class="loadlist" v-if="xuexiaoList.length>0">
              <div class="loaditem flex_y_center" v-for="(item,index) in xuexiaoList" :key="index">
                <div class="loaditem_left" v-text="item.name"></div>
                <div class="loaditem_center" v-text="item.address"></div>
                <p class="loaditem_right" v-text="item.phone"></p>
              </div>
            </div>
            <div class="notdata" v-else>暂无数据</div>
          </div>
          <div v-if="curerjiIndex3==1">
            <p class="loadtitle">合作医院</p>
            <div class="loadlist" v-if="yiyuanList.length>0">
              <div class="loaditem flex_y_center" v-for="(item,index) in yiyuanList" :key="index">
                <div class="loaditem_left" v-text="item.name"></div>
                <div class="loaditem_center" v-text="item.address"></div>
                <p class="loaditem_right" v-text="item.phone"></p>
              </div>
            </div>
            <div class="notdata" v-else>暂无数据</div>
          </div>
          <div v-if="curerjiIndex3==2">
            <p class="loadtitle">合作经销商</p>
            <div class="loadlist" v-if="hezuoList.length>0">
              <div class="loaditem flex_y_center" v-for="(item,index) in hezuoList" :key="index">
                <div class="loaditem_left" v-text="item.name"></div>
                <div class="loaditem_center" v-text="item.address"></div>
                <p class="loaditem_right" v-text="item.phone"></p>
              </div>
            </div>
            <div class="notdata" v-else>暂无数据</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Topbg from "@/components/Topbg.vue";
import "../assets/css/about2.scss";
import "swiper/css/swiper.css";
export default {
  name: "About2",
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
      curerjiIndex1:1,
      curerjiIndex2:0,
      curerjiIndex3:0,
      chenuo : {
        txt : '',
        img:''
      },
      laboratory:{
        teamimg : []
      },
      isshowplay : true,
      swiperOptions2: {
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      form : {
        name : '',
        tel : '',
        desc : ''
      },
      config : {
        address : '',
        phone : '',
        email:'',
        qq:''
      },
      xuexiaoList :[],
      yiyuanList : [],
      hezuoList : [],
      isclick : true
    };
  },
  components: {
    Topbg
  },
  methods: {
    submit(){
      if(this.form.name==''){
        alert('请输入您的姓名！')
      }else if(!(/^1[3456789]\d{9}$/.test(this.form.tel))){
        alert('请输入正确的电话号码！')
      }else{
        this.isclick = false
        this.$http
        .post("http://www2.uptbio.com/index/index/addmessage",{
          name:this.form.name,phone:this.form.tel,message:this.form.desc
        })
        .then(
          function(res) {
            console.log(res)
            if (res.body.code == 0) {
              this.isclick = true;
              alert('提交成功！')
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
      }
    },

    downloadImg(){
      var url = this.chenuo.img;                            // 获取图片地址
      console.log(url)
      var a = document.createElement('a');          // 创建一个a节点插入的document
      var event = new MouseEvent('click')           // 模拟鼠标click点击事件
      a.download = '实验承诺函'                  // 设置a节点的download属性值
      a.href = url;                                 // 将图片的src赋值给a节点的href
      a.dispatchEvent(event)    
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
    play(){
      const sp = document.getElementById('video')
      if(this.isshowplay){
        sp.play()
        this.isshowplay = false
      }else{
        sp.pause()
        this.isshowplay = true
      }
    },
    erjiClick1(e){
      this.curerjiIndex1 = e
    },
    erjiClick2(e){
      this.curerjiIndex2 = e
    },
    erjiClick3(e){
      this.curerjiIndex3 = e
    },
    leftClick(e) {
      this.curindex = e;
      if(e ==1){
        this.curerjiIndex2 = 0;
      }
    },
    classClick(id, index) {
      this.curid = id;
      this.curYjIndex = index;
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
            this.loadPeixun(res.body.data[0].id, 1);
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
            } else {
              if (page == 1) {
                this.peixunList = [];
              }
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadXzList(type, page) {
      this.$http
        .get("http://www2.uptbio.com/index/index/arcicle", {
          params: { type: type, p: page }
        })
        .then(
          function(res) {
            // console.log(res);
            if (res.data.code == 0) {
              if (type == 3) {
                this.ruanjianList = res.data.data;
              } else {
                this.ziliaoList = res.data.data;
              }
            } else {
              if (page == 1) {
                if (type == 3) {
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
    loadhezuo(type, page) {
      this.$http
        .get("http://www2.uptbio.com/index/index/hezuof", {
          params: { type: type, p: page }
        })
        .then(
          function(res) {
            // console.log(res);
            if (res.data.code == 0) {
              if (type == 1) {
                this.xuexiaoList = res.data.data;
              } else if(type == 2){
                this.yiyuanList = res.data.data;
              } else if(type == 3){
                this.hezuoList = res.data.data;
              }
            } else {
              if (page == 1) {
                if (type == 1) {
                  this.xuexiaoList = [];
                } else if(type == 2){
                  this.yiyuanList = [];
                } else if(type == 3){
                  this.hezuoList = [];
                }
              }
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadchenuo(){
      this.$http
        .get("http://www2.uptbio.com/index/index/chenuo")
        .then(
          function(res) {
            // console.log(res);
            if(res.body.code==0){
              this.chenuo.txt = res.body.data.content
              this.chenuo.img = res.body.data.img
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadlaboratory(){
      this.$http
        .get("http://www2.uptbio.com/index/index/laboratory")
        .then(
          function(res) {
            // console.log(res);
            if(res.body.code==0){
              this.laboratory = res.body.data
            }
          },
          function() {
            // console.log("请求失败处理");
          }
        );
    },
    loadconfig(){
      this.$http
        .get("http://www2.uptbio.com/index/index/config")
        .then(
          function(res) {
            // console.log(res);
            if(res.body.code==0){
              this.config = res.body.data
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
      this.$router.replace('/about2');
      
    } else {
      // alert("pc端");
      this.$router.replace('/about');
    }
  },
  beforeMount() {
    let query = this.$route.query
    this.curindex = query.curindex || 0
    this.curerjiIndex2 = query.curerjiIndex2 || 1
    
    this.loaddata();
    this.loadXzList(3);
    this.loadXzList(4);
    this.loadbanner()
    this.loadchenuo()
    this.loadlaboratory()
    this.loadconfig()
    this.loadhezuo(1)
    this.loadhezuo(2)
    this.loadhezuo(3)
    this.getSEO()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-container {
//   --swiper-navigation-color: #3EA6D2; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 16px; /* 设置按钮大小 */
}


</style>
