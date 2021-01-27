<template>
  <div class="nav">
    <div class="more">
        <router-link :to="'/mhome'">首页</router-link>
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
