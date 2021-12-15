<template>
<div class="root">
  <div class="first-page-box">
  <el-row type="flex" align="middle" justify="">
      <el-col :span="12" class="header-left-font" >网站建设模板</el-col>
       <el-col :span="12" class="header-right-font">
         <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical "  @open="handleOpen" @close="handleClose"  @select="handleSelect" :collapse="true" >
           <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">案例展示</el-menu-item>
            <el-submenu index="3">
    <template slot="title">关于我们</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
     </el-submenu>
      <el-menu-item index="4" >新闻中心</el-menu-item>
       <el-menu-item index="5" >联系我们</el-menu-item>
           </el-menu>
       </el-col>
  </el-row>
  </div>
  </div>
</template>

<script>
// import headertop from '@/components/headertop'
export default {
// components:{
//   headertop
// }
data(){
  return{
      activeIndex: '1',
        activeIndex2: '1'
  }
},
methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
}
}
</script>

<style>
@media screen and (min-width:768px) {
  .first-page-box{
    width: 1300px;
    margin: auto;
  }
}
@media screen and (max-width:768px) {
  .header-left-font{
    font-size: 20px;
  }
}
.header-left-font{
    font-size: 30px;
    text-align: left;
  }
  .header-right-font{
    display: flex;
    justify-content: end;
  }
</style>