<template>
  <div class="root">
    <headertop></headertop>
    <headera></headera>
    <div class="header-img">
      <img src="../assets/casea-header.jpg" alt="" />
    </div>
    <div class="container">
      <div class="casea">
        <div class="case-shows">
          <div class="case-shows-inside">
            <div class="service-inside-header">
              <h1>服务领域</h1>
              <div>
                我们以高品质设计创造商业价值，以创新理念提升品牌影响力 
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
        <div class="case-shows">
          <div class="case-shows-inside">
            <div class="service-inside-header">
              <h1>服务领域</h1>
              <div>
                我们以高品质设计创造商业价值，以创新理念提升品牌影响力 
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
        <div class="case-shows">
          <div class="case-shows-inside">
            <div class="service-inside-header">
              <h1>服务领域</h1>
              <div>
                我们以高品质设计创造商业价值，以创新理念提升品牌影响力 
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
    </div>
    <floor></floor>
  </div>
</template>

<script>
import headertop from "@/components/headertop";
import floor from "@/components/floor";
import headera from "../components/headera";
// import Headertop from '../components/headertop.vue'
export default {
  components: {
    headertop,
    floor,
    headera,
  },
};
</script>

<style>
.header-img {
  /* height: 500px; */
}
@media screen and (max-width: 1280px) {
  .header-img {
    height: auto;
  }
}
.header-img img {
  width: 100%;
}
@media screen and (max-width: 768px) {
  .header-img {
    height: auto;
  }
}
.service-inside-header{
    margin-bottom: 50px;
}

a{
	color: gray;
}

</style>