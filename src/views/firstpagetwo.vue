<template>
  <div class="root">
    <div class="first-page-box">
      <headera></headera>
      <headertop></headertop>
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in 4" :key="item">
          <img src="../assets/lunbo-header.jpg" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <div class="service">
        <div class="service-inside">
          <div class="service-inside-header">
            <h1>服务领域</h1>
            <div>
              我们以高品质设计创造商业价值,以创新理念提升品牌影响力 拷贝
            </div>
          </div>
          <el-row :gutter="10" class="service-row">
            <el-col :md="6" :sm="6" :xs="12">
              <div class="computer-img">
                <img src="../assets/computer.png" alt="" />
              </div>
              <div class="computer-font">
                <div class="computer-font-top">PC网站建设</div>
                <div class="computer-font-botton">
                  品牌官网、专注于创意用户体验
                </div>
              </div>
            </el-col>
            <el-col :md="6" :sm="6" :xs="12">
              <div class="computer-img">
                <img src="../assets/computer.png" alt="" />
              </div>
              <div class="computer-font">
                <div class="computer-font-top">PC网站建设</div>
                <div class="computer-font-botton">
                  品牌官网、专注于创意用户体验
                </div>
              </div>
            </el-col>
            <el-col :md="6" :sm="6" :xs="12">
              <div class="computer-img">
                <img src="../assets/computer.png" alt="" />
              </div>
              <div class="computer-font">
                <div class="computer-font-top">PC网站建设</div>
                <div class="computer-font-botton">
                  品牌官网、专注于创意用户体验
                </div>
              </div>
            </el-col>
            <el-col :md="6" :sm="6" :xs="12">
              <div class="computer-img">
                <img src="../assets/computer.png" alt="" />
              </div>
              <div class="computer-font">
                <div class="computer-font-top">PC网站建设</div>
                <div class="computer-font-botton">
                  品牌官网、专注于创意用户体验
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="case-shows">
        <div class="case-shows-inside">
          <div class="service-inside-header">
            <h1>服务领域</h1>
            <div>
              我们以高品质设计创造商业价值，以创新理念提升品牌影响力 拷贝
            </div>
          </div>
          <el-row :gutter="10" class="case-inside-row">
            <el-col :md="12" :sm="12" :xs="24">
              <div class="case-shows-img">
                <img src="../assets/phone.webp" alt="" />
              </div>
            </el-col>
            <el-col :md="12" :sm="12" :xs="24" class="case-shows-font">
              <div class="case-shows-right-header">
                XXX是专业生成小程序的平台
              </div>
              <div class="case-shows-right-two">
                XXX是专业生成小程序的平台，以商家的营销和管理为目的，基于小程序的优势，帮助商家拓
              </div>
              <div class="case-shows-right-three">
                展互联网客群、提高经营效率，助力商家成功。
              </div>
              <div class="case-shows-right-end">
                适合行业:平面设计 网页设计 IT 互联网行业 软件开发
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="new-center">
       <div class="service-inside-header">
            <h1>新闻中心 </h1>
            <div>
              我们以高品质设计创造商业价值，以创新理念提升品牌影响力
            </div>
          </div>
      <el-carousel :interval="5000000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="container">
            <el-row :gutter="10">
              <el-col :span="12">
                <div class="new-center-lunbo-left">
                  <div class="new-center-lunbo-left-img">
                    <img src="../assets/button-img.jpg" alt="" />
                  </div>
                  <div class="new-center-lunbo-header-font">
                    <div>
                      <div>让计算更为透明、更加可控</div>
                      <div>2018-09-14</div>
                    </div>
                    <div>
                      过去几年，我们看到网络安全环境在不断变化和演进。财产安全等网络威胁变得日益严峻，在这中间，政府既是科技的保护者，又...
                    </div>
                    <div class="new-center-lunbo-header-font-button">
                      <button>新闻资讯</button>
                      <div class="el-icon-right"></div>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                 <div class="new-center-lunbo-left">
                  <div class="new-center-lunbo-left-img">
                    <img src="../assets/button-img.jpg" alt="" />
                  </div>
                  <div class="new-center-lunbo-header-font">
                    <div>
                      <div>让计算更为透明、更加可控</div>
                      <div>2018-09-14</div>
                    </div>
                    <div>
                      过去几年，我们看到网络安全环境在不断变化和演进。财产安全等网络威胁变得日益严峻，在这中间，政府既是科技的保护者，又...
                    </div>
                    <div class="new-center-lunbo-header-font-button">
                      <button>新闻资讯</button>
                      <div class="el-icon-right"></div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <floor></floor>
  </div>
</template>

<script>
// import headertop from '@/components/headertop'
import headera from "../components/headera";
import headertop from "../components/headertop";
import floor from "../components/floor";

export default {
  components: {
    headera,
    headertop,
    floor
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-carousel__item:nth-child(2n) {
  background-color: white;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
.new-center-lunbo-header-font{
  display: grid;
  height: 180px;
  text-align: left;
  margin-top: 20px;
}
.el-icon-right{
  font-size: 30px;
}
.case-shows-font {
  line-height: 40px;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
}
@media screen and (max-width: 750px){
  .el-carousel {
    overflow: hidden;
    height: 155px;
  }
  
}
@media screen and (max-width:768px) {
  .case-shows-font{
    display: none;
  }
}
.new-center-lunbo-header-font-button{
  display: flex;
  justify-content: space-between;
  /* align-content: center;
   */
   align-items: center;
}

@media screen and (min-width: 768px) {
  .first-page-box {
    /* width: 1300px; */
    margin: auto;
  }
}
.case-shows-inside{
  margin-top: 100px;
}
@media screen and (max-width:768px) {
  .case-shows-inside{
    margin-top: 20px;
  }
}
@media screen and (max-width: 768px) {
  .header-left-font {
    font-size: 20px;
  }
}
@media screen and (max-width:768px) {
  .el-carousel__container {
    position: relative;
    height: 210px;
}
}
.case-shows-img img {
  width: 100%;
}
.service{
  margin-top: 100px;
}
@media screen and (max-width:768px) {
  .service{
    margin-top: 20px;
  }
}
.service-inside-header {
  line-height: 30px;
}
.service-row {
  margin-top: 100px;
}
/* @media screen and (max-width:768px) {
  .service-inside-header{
  margin-top: 20px;
} */
@media screen and (max-width:768px) {
  .service-inside-header{
    margin-top: 20px;
  }
}
@media screen and (max-width:768px) {
  .service-row{
    margin-top: 20px;
  }
}
.header-left-font {
  font-size: 30px;
  text-align: left;
}

.computer-font {
  line-height: 40px;
  margin-top: 10px;
}
.header-right-font {
  display: flex;
  justify-content: flex-end;
}
@media screen and (min-width: 768px) {
  .header-box {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .el-carousel__container {
    height: 500px;
  }
}
a{
	color: gray;
}
</style>