<template>
  <el-menu
      :default-active="activeIndex"
      class="index_header"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0">
<!--      <img-->
<!--          style="width: 100px"-->
<!--          src=""-->
<!--          alt="AnimeTraceLOGO"-->
<!--      />-->
      <p>AnimeTrace服务监控系统</p>
    </el-menu-item>
    
    <div class="flex-grow" />
    <el-menu-item index="2">更多功能开发ING</el-menu-item>
  </el-menu>
</template>

<style>

.flex-grow {
  flex-grow: 1;
}
</style>

