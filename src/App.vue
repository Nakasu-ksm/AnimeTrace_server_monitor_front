
<template>
  <div id="app" style="width: 100%;height: 100%;">
    <Header></Header>
    <el-row :gutter="24">
      <el-col :xs="1" :sm="3" :md="4" :lg="4" :xl="4"></el-col>
      <el-col :xs="22" :sm="18" :md="16" :lg="16" :xl="16"> <RouterView class="routers"/></el-col>
      <el-col :xs="1" :sm="3" :md="4" :lg="4" :xl="4"></el-col>
    </el-row>

  </div>
</template>

<style scoped>
#app{
  height: 100%;
  width: 100%;
}
body,html{
  height: 100%;
  width: 100%;
  margin: 0;
  padding:0;
}
.routers{
  //margin-top: 30px;
  margin: 30px auto;
}
</style>

<script>
import Header from "@/components/Header.vue";


export default {
  name: "App",
  components: {
    Header

  }
};
</script>

