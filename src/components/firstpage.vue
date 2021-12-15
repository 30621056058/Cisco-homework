<template>
  <div class="root">
    <headertop></headertop>
    <div class="first-box">
      <el-carousel indicator-position="outside" height="500px">
        <el-carousel-item v-for="item in 4" :key="item">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01aef75ec2952ba8012148142a61d2.png%402o.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641887531&t=f98db9e4fd2eb75775104e6611889d30"
            alt=""
          />
        </el-carousel-item>
      </el-carousel>
      <div class="box">
        <el-row  align="center"  class="edit" :gutter="0">
          <el-col lass="describe"  :xs="20" :sm="10" :md="6" :push="1" c class="describe"
            ><i class="el-icon-edit">
              <div class="html-describe">html</div>
            </i>
            <br />
            <div class="html-describe-inside">
             HTML的全称为超文本标记语言，是一种标记语言
             HTML文本是由HTML命令组成的描述性文本，HTML命令可以说明文字，图形、动画、声音、表格、链接等。
             超文本是一种组织信息的方式，它通过超级链接方法将文本中的文字、图表与其他信息媒体相关联
            </div>
          </el-col>
          <el-col  :xs="20" :md="6" :sm="10" :push="3" class="describe"
            ><i class="el-icon-edit">
              <div class="html-describe">css3</div>
            </i>
            <br />
            <div class="html-describe-inside">
            CSS3是CSS（层叠样式表）技术的升级版本,早在2001年W3C就完成了CSS3的草案规范。CSS3规范的一个新特点是被分为若干个相互独立的模块。一方面分成若干较小的模块较利于规范及时更新和发布，及时调整模块的内容，这些模块独立实现和发布.
            </div></el-col
          >
          <el-col  :xs="20" :md="6" class="describe"
            ><i class="el-icon-edit">
              <div class="html-describe">javascript</div>
            </i>
            <br />
            <div class="html-describe-inside">
             JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，
            </div></el-col
          >
          <el-col  :xs="20" :md="6"  class="describe"
            ><i class="el-icon-edit">
              <div class="html-describe">vue</div>
            </i>
            <br />
            <div class="html-describe-inside">
            Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。 [5]  与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。
            </div></el-col
          >
        </el-row>
       
      </div>
       <div class="Discover">
          <el-row type="flex" align="middle" justify="center" :gutter="10" class="Discover-row">
            <el-col :md="9"  :sm="24"
              ><img src="../assets/discover.png" alt=""
            /></el-col>
            <el-col :md="9"  :sm="24">
              <div class="Discover-font">Discover</div>
              <div class="Discover-font-botton">Human rights momentum. World problem solving turmoil, change movements environmental pursue these aspirations initiative donation. Policy dialogue, underprivileged accessibility, asylum visionary, prevention beneficiaries carbon emissions reductions empower</div>
             <el-row type="flex" justify="center">
               <el-col :span="12" style="text-align: center;"><el-button class="Discover-font-btn" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button></el-col>
                 <el-col :span="12"><el-button class="Discover-font-btn" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button></el-col>
             </el-row>
              </el-col>
          </el-row>
        </div>
        <floor></floor>
    </div>
  </div>
</template>


<script>
import headertop from "../components/headertop";
import floor from "../components/floor"
export default {
  components: {
    headertop,
    floor
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.Discover-font{
  font-weight: 600;
  font-size: 60px;
  margin-bottom: 20px;
  
}
.Discover{
  margin-top: 50px;
}
el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.html-describe {
  margin-bottom: 20px;
  margin-top: 20px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
.edit{
  margin: 0;
}
@media screen and (max-width: 1024px) {
  .edit {
    /* background: #3333; */
    /* display: table; */
    margin: 0;
    flex-direction: column;
    align-items: center;
  }
}

.el-icon-edit {
  font-size: 30px;
}
@media screen and(max-width:750px) {
  .el-icon-edit {
    font-size: 40px;
  }
}
/* @media screen and (max-width:750px) {
      .edit{
          width: 500px;
         
      }
  } */
/* .box{
      width: 1567px;
  } */
@media screen and (max-width: 750px) {
  .el-carousel__item img {
    height: auto;
  }
}
@media screen and (max-width: 750px) {
  .el-carousel {
    height: 165px;
  }
}

@media screen and (max-width: 750px) {
  .first-box {
    width: auto;
  }
}
@media screen and (max-width: 750px) {
  .html-describe {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 600;
  }
}

.html-describe-inside{
  font-size: 12px;
    line-height: 21px;
    letter-spacing: 1px;
    text-align: left;
}
@media screen and (max-width:768px) {
  .html-describe-inside{
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 2px;
  }
}
@media screen and (max-width:1024px) {
  .describe {
    margin-bottom: 70px;
    text-align: center;
  }
}
@media screen and(min-width:768px) {
  .describe{
  text-align: left;
}
}
.Discover-font-btn{
  font-size: 20px;
  margin-top:30px;
}
.Discover{
 background: #fafafa;
 text-align: left;
}
.Discover-font-botton{
  letter-spacing: 1px;
  line-height: 30px;
  text-align: left;
}
@media screen and (max-width:768px) {
  .Discover-font-botton{
    text-align: center;
    letter-spacing: 1px;
    line-height: 30px;
  }
}
.Discover-row img{
  width: 100%;
}
@media screen and (max-width:768px) {
  .Discover-row{
    flex-direction: column;
    text-align: center;
  }
}
</style>