<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!-- <router-link to="/jump"></router-link> --> 
      <el-row :xs="24" :sm="24" :md="24" :lg="24" :xl="24"
      type="flex"
      align="middle"
      justify="center"
      class="header-information"
    >
      <el-col  :span="24"
        ><div class="grid-content" type="flex">Cisco作业</div></el-col
      >
    </el-row>
    </div>
    <router-view/>

    <!-- <router-view ></router-view> -->
   <!-- <headertop></headertop> -->
  </div>
</template>


<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
 
 #nav{
   width: 100%
 }

 
</style>
