<template>
<div>
    <div class="header2">
        <div class="flex_y_center header_top" >
            <img class="top_logo tf_log" src="../assets/images/logo1.png" alt="">
            <a class="tf_tel" href="tel:4006916686"><img class=" " src="../assets/images/top_htel.png" alt=""></a>
            <img @click="menuClick" class="menu" src="../assets/images/menu.png" alt="">
        </div>
    </div>
    <div class="more2" v-if="ismenu">
    <div class="nav_item2" @click="closemenu">
            <div class="flex_y_center">
                <router-link  :to="'/mhome'">首页</router-link>
            </div>
        </div>
        <div class="nav_item2">
            <div class="flex_y_center">
                <p>医学实验</p>
                <img v-if="navindex==1" class="top_right" src="../assets/images/jiantou1.png" alt="" @click="erjiClose1()">
                <img v-else class="top_right" src="../assets/images/jiantou2.png" alt="" @click="erjiOpen1()">
            </div>
            <div class="ni_erji" v-if="navindex==1">
              <div class="nie_item" v-for="(item,index) in indexData.category" :key="index">
                <div class="flex_y_center">
                  <p v-text="item.name" @click="hbyClick(item.id,index)"></p>
                  <img v-if="item.isshow" class="top_right" src="../assets/images/jiantou1.png" alt=""  @click="hbyclose(item.id,index)">
                  <img v-else class="top_right" src="../assets/images/jiantou2.png" alt="" @click="hbyMouse(item.id,index)">
                </div>
                <div class="ni_sanji" v-if="item.isshow">
                  <div class="flex_y_center nis_item" v-for="(item,index2) in catList" :key="index2">
                    <p v-text="item.name" @click="root(item.id,index2)"></p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="nav_item2">
            <div class="flex_y_center">
                <p>整体课题</p>
                <img v-if="navindex2==1" class="top_right" src="../assets/images/jiantou1.png" alt="" @click="erjiClose2()">
                <img v-else class="top_right" src="../assets/images/jiantou2.png" alt="" @click="erjiOpen2()">
            </div>
            <div class="ni_erji" v-if="navindex2==1">
              <div class="nie_item">
                <div @click="closemenu"><router-link class="nke_item" :to="'/ketione'">细胞铁死亡</router-link></div>
                <div @click="closemenu"><router-link class="nke_item" :to="'/ketitwo'">非编码RNA</router-link></div>
                <div @click="closemenu"><router-link class="nke_item" :to="'/ketithree'">线粒体</router-link></div>
                <div @click="closemenu"><router-link class="nke_item" :to="'/ketifour'">细胞自噬</router-link></div>
              </div>
            </div>
        </div>
        <div class="nav_item2" @click="closemenu">
            <div class="flex_y_center">
                <router-link  :to="'/about2'">公司展示</router-link>
            </div>
        </div>
        <div class="nav_item2" @click="closemenu">
            <div class="flex_y_center">
                <router-link @click="closemenu" :to="'/jishuArticle2'">技术资源</router-link>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
  name: 'Header2', 
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
      erjiid:'',
      navindex:0,
      navindex2:0,
      ismenu : false
    }
  },
  methods : {
    menuClick(){
      this.ismenu = !this.ismenu
    },
    header(e){
      this.headerClass = 'header_animate'
      this.cupIndex = e
    },
    header2(){
      this.headerClass = 'header_animate2'
    },

    erjiOpen1(){
      this.navindex=1
    },

    erjiClose1(){
      this.navindex=0
    },

    erjiOpen2(){
      this.navindex2=1
    },

    erjiClose2(){
      this.navindex2=0
    },

    hanmouse(){
        this.$emit('func',1)
    },
    hanleave(){
        this.$emit('func',0)
    },
    hbyclose(id,e){
      this.indexData.category[e].isshow = false
      this.curindex = e
      this.catList = this.indexData.product[id]
      this.img = this.indexData.category[this.curindex].img
      this.text = this.indexData.category[this.curindex].text
      this.yijiindex = e
    },

    hbyMouse(id,e){
      this.indexData.category[e].isshow = true
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
      this.$router.push({name:'Yixue2',query:{yijiid:this.yijiid,yijiindex:this.yijiindex,erjiid:''}})
      this.ismenu = false
    },
    root(id,index){
      this.erjiindex = index
      this.erjiid = id
      this.$router.push({name:'Yixue2',query:{yijiid:this.yijiid,yijiindex:this.yijiindex,erjiid:this.erjiid}})
      this.ismenu = false
    },
    closemenu(){
      this.ismenu = false
    },
    loaddata() {
      this.$http.get("http://www2.uptbio.com/index/index/homep").then(
        function(res) {
          if (res.data.code == 0) {
            let indexData = res.data.data
            let category = indexData.category
            for(let i in category){
              category[i].isshow = false
            }
            indexData.category = category
            this.indexData = indexData;
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
