<template>
  <div @mouseleave="header2" :class="headerClass +' header'">
    <div class="flex_y_center header_top" >
      <img class="top_logo" src="../assets/images/logo1.png" alt="">
      <div class="top_nav flex">
        <router-link class="nav_item" :to="'/'">首页</router-link>
        <div class="nav_item" @click="navgate">医学实验</div>
        <div class="nav_item" @mouseover="header(2)">整体课题</div>
        <router-link class="nav_item" :to="'/about'">公司展示</router-link>
        <router-link class="nav_item" :to="'/jishuArticle/0'">技术资源</router-link>
      </div>
      <div class="top_han" @mouseover="hanmouse" @mouseleave="hanleave">
        <img src="../assets/images/top_han.png" alt="">
      </div>
      <img class="top_tel" src="../assets/images/top_htel.png" alt="">
    </div>
    <div class="header_bot">
      <div class="flex hb_yixue" v-if="cupIndex==1">
        <div class="hby_left">
          <div class="flex_y_center hby_item" :style="curindex==index?'background:rgba(62, 166, 210, .25);':''" v-for="(item,index) in indexData.category" :key="index" @mouseover="hbyMouse(item.id,index)" @click="hbyClick(item.id,index)">
            <p :style="curindex==index?'color:#0F68CE;':''" v-text="item.name"></p>
            <img v-if="curindex==index" src="../assets/images/right2.png" alt="">
            <img v-else src="../assets/images/right1.png" alt="">
          </div>
        </div>
        <div class="flex_y_center hby_rbox">  
          <div class="hby_center">
            <img :src="img" alt="">
            <p v-text="text"></p>
          </div>
          <div class="hby_right flex-wrap">
            <div @click="root(item.id,index)" class="gbyr_item" v-for="(item,index) in catList" :key="index" v-text="item.name"></div>
          </div>
        </div>
      </div>
      <div class="hb_keti flex_all_center" v-if="cupIndex==2">
        <router-link class="ke_item" :to="'/ketione'">细胞铁死亡</router-link>
        <router-link class="ke_item" :to="'/ketitwo'">非编码RNA</router-link>
        <router-link class="ke_item" :to="'/ketithree'">线粒体</router-link>
        <router-link class="ke_item" :to="'/ketifour'">细胞自噬</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header', 
  data(){
    return { 
      headerClass : '',
      cupIndex: 1 ,
      indexData: {},
      curindex:0,
      catList:[],
      img:'',
      text:'',
      yijiindex :0,
      yijiid :'',
      erjiindex:0,
      erjiid:''
    }
  },
  methods : {
    header(e){
      this.headerClass = 'header_animate'
      this.cupIndex = e
    },
    header2(){
      this.headerClass = 'header_animate2'
    },

    hanmouse(){
        this.$emit('func',1)
    },
    hanleave(){
        this.$emit('func',0)
    },

    navgate(){
      // console.log(this.yijiindex)
      // console.log(this.yijiid)
      // console.log(this.erjiid)
      this.$router.replace('/yixue/'+this.yijiid+'/'+this.yijiindex +'/'+this.erjiid);
      // this.$router.push({name:'Yixue',query:{yijiid:this.yijiid,yijiindex:this.yijiindex,erjiid:this.erjiid}})
    },

    hbyMouse(id,e){
      this.curindex = e
      this.catList = this.indexData.product[id]
      this.img = this.indexData.category[this.curindex].img
      this.text = this.indexData.category[this.curindex].text
      this.yijiindex = e
    },
    hbyClick(id,e){
      this.curindex = e
      this.catList = this.indexData.product[id]
      this.yijiindex = e
      this.yijiid = id
      this.img = this.indexData.category[this.curindex].img
      this.text = this.indexData.category[this.curindex].text
      this.$router.push({name:'Yixue',query:{yijiid:this.yijiid,yijiindex:this.yijiindex,erjiid:''}})
    },
    root(id,index){
      this.erjiindex = index
      this.erjiid = id
      this.$router.push({name:'Yixue',query:{yijiid:this.yijiid,yijiindex:this.yijiindex,erjiid:this.erjiid}})
    },
    loaddata() {
      this.$http.get("http://www2.uptbio.com/index/index/homep").then(
        function(res) {
          if (res.data.code == 0) {
            this.indexData = res.data.data;
            this.catList = res.data.data.product[res.data.data.category[0].id]
            this.img = this.indexData.category[0].img
            this.text = this.indexData.category[0].text
            this.yijiid= res.data.data.category[0].id
            this.erjiid=res.data.data.product[res.data.data.category[0].id][0].id
          }
        },
        function() {
          // console.log("请求失败处理");
        }
      );
    },
    
  },
  beforeMount() {
    this.loaddata();
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
