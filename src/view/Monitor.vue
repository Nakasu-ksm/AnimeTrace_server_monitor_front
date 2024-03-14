
<template>
  <el-alert
      style="margin-top: 20px"
      title="运营状况"
      :type="this.status===0?'success':'error'"
      :description="this.status===0?'目前所有服务运行正常':'目前部分服务中断'"
      show-icon
  />
  <div class="status_panel">
   <div v-for="(item, index) in this.server_list" class="service">
     <div class="server_info">
       <div class="server_info_header">
         <span class="server_title">{{item.name}}</span>
         <el-tag :type="item.status===0?'success':'error'" style="left: 0;" class="status_tag">
           {{ item.status===0?(item.default_ok!==undefined?item.default_ok:'运行正常'):(item.default_error!==undefined?item.default_error:'运行异常') }}
         </el-tag>
<!--         <p class="description_info">运营说明<br>服务器不稳定</p>-->

       </div>
       <!--      <p class="description_info">运营说明<br>服务器目前状态为故障</p>-->

     </div>
     <el-divider v-if="this.server_list.length-1>index" />
   </div>


  </div>
  <div class="footer">
    <p style="text-align: center">2024@AnimeTrace v1.0</p>
  </div>
</template>

<style scoped>
.footer{
  margin-top: 10px;
  color: #969ea8;
}
.description_info{
  margin-top: 8px;
  color: gray;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0 10px 30px rgba(0,0,0,.1);
}
.status_tag{
  float: right;
}
.status_tag>span{
  font-weight: bold!important;
}
.server_title{
  top: 0;
  font-weight: bold;
  position: relative;
}
.server_info_header{
  width: 100%;
}
.status_panel{
  width: 100%;
  margin-top: 20px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,.1);
}
.server_info{
  padding: 10px;
}
.el-divider--horizontal{
  margin: 3px 0!important;
}
</style>

<script>
export default {
  name: 'Monitor',
  data() {
    // Set initial data, this.createMap() configures event listeners that update data based on user interaction
    return {
      "server_list":[],
      'status':0
    }
  },
  mounted() {
    document.title = "AnimeTrace服务状态展示系统"
    this.axios.get("https://api.status.animedb.cn/serviceStatus").then((res)=>{
      if (res.data.status !== 200){
        return alert("服务器状态载入错误")
      }
      this.server_list = res.data.data
      for(let i=0;i<this.server_list.length;i++){
        if(this.server_list[i]['status']===1){
          this.status = 1
          break
        }

      }
    })
  },
  methods: {
  }
}
</script>