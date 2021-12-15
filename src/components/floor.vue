<template>
  <div class="floor">
         <el-row type="flex" justify="space-around" align="center">
           <el-col :span="20">
             <ul>
               <li>项目开始：12/8</li>
               <li>技术支持：vue2.0,element,vue-route,node.js</li>
               <li>布局方式：flex</li>
               <li>完成时间</li>
             </ul>
           </el-col>
         </el-row>
       </div>
</template>

<script>
export default {

}
</script>

<style>
@media screen and (max-width:768px) {
    .floor{
        font-size: 25px;
      height: 200px;
    line-height: 40px;
    }
}
</style>