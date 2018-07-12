<template>
  <el-container>
  <el-aside width="200px">
    <navMenu/>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>

<script>
import navMenu from '../components/menu'
export default {
  data() {
    return {
    }; 
  },
  methods: {
  },
  components:{
    navMenu
  }
};
</script>

<style lang="less" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  // .el-main {
  //   background-color: #E9EEF3;
  //   color: #333;
  //   text-align: center;
  //   line-height: 160px;
  // }
</style>

