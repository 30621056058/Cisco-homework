<template>
  <div class="root">
    <headera></headera>
    <headertop></headertop>
    <div class="us-header">
      <div class="us-header-img">
        <img src="../assets/us.jpg" alt="" />
      </div>
    </div>
    <div class="connect-us">
      <div class="connect-us-title">
        <h4>联系我们</h4>
        <span>CONTACT US</span>
      </div>
      <el-row :gutter="10" class="connect-us-row">
        <el-col :md="6" :sm="12" :xs="12" class="connect-us-col">
          <div class="el-icon-phone-outline"></div>
          <div class="connect-us-ico-font">
            <div>联系电话</div>
            <span>000-000-0000</span>
          </div>
        </el-col>
        <el-col :md="6" :sm="12" :xs="12" class="connect-us-col">
          <div class="el-icon-phone-outline"></div>
          <div class="connect-us-ico-font">
            <div>联系电话</div>
            <span>000-000-0000</span>
          </div>
        </el-col>
        <el-col :md="6" :sm="12" :xs="12" class="connect-us-col">
          <div class="el-icon-phone-outline"></div>
          <div class="connect-us-ico-font">
            <div>联系电话</div>
            <span>000-000-0000</span>
          </div>
        </el-col>
        <el-col :md="6" :sm="12" :xs="12" class="connect-us-col">
          <div class="el-icon-phone-outline"></div>
          <div class="connect-us-ico-font">
            <div>联系电话</div>
            <span>000-000-0000</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="Leave-a-message">
      <div class="Leave-a-message">
        <el-row :gutter="30" >
          <el-col :md="8" :sm="12" :xs="12">
            <div class="from-name">
              <h5 class="from-name-h3">
                姓名
                <span>*</span>
              </h5>
              <div class="from-name-input">
                <input type="text" placeholder="请输入姓名" />
              </div>
            </div>
          </el-col>
          <el-col :md="8" :sm="12" :xs="12">
            <div class="from-name">
              <h5 class="from-name-h3">
                姓名
                <span>*</span>
              </h5>
              <div class="from-name-input">
                <input type="text" placeholder="请输入姓名" />
              </div>
            </div>
          </el-col>
          <el-col :md="8" :sm="12" :xs="12">
            <div class="from-name">
              <h5 class="from-name-h3">
                姓名
                <span>*</span>
              </h5>
              <div class="from-name-input">
                <input type="text" placeholder="请输入姓名" />
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="Leave-a-message-botton">
          <h5 class="message-h3">
            姓名
            <span>*</span>
          </h5>
          <div class="Leave-a-message-botton-input">
            <input type="text" name="" id="" placeholder="请输入内容" />
          </div>
          <div class="Leave-a-message-commit">
              <el-button type="primary" plain>提交</el-button>
              </div>
        </div>
      </div>
    </div>
    <floor></floor>
  </div>
</template>

<script>
import headera from "../components/headera";
import headertop from "../components/headertop";

import floor from "../components/floor.vue";

export default {
  components: {
    headera,
    headertop,
    floor,
  },
};
</script>

<style>
.Leave-a-message-commit{
    margin-top: 40px;
}
.message-h3 {
  text-align: left;
  margin-top: 40px;
}
.Leave-a-message-botton-input input {
  width: 100%;
  height: 50px;
  background: hsla(0, 0%, 80%, 0.15);
  border: 0;
}
.connect-us-row {
  margin-top: 100px;
  margin-bottom: 100px;
}
.connect-us-col {
  margin-bottom: 40px;
}
.el-icon-phone-outline {
  font-size: 60px;
}
.connect-us-ico-font {
  margin-top: 20px;
}
.us-header-img img {
  width: 100%;
}
.connect-us-ico-font div {
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 30px;
}
.connect-us-ico-font span {
  font-size: 15px;
}
@media screen and (min-width: 1200px) {
  .connect-us {
    width: 1500px;
    margin: auto;
  }
  .Leave-a-message {
    width: 1220px;
    margin: auto;
  }
}
.from-name {
  text-align: left;
}
.from-name-input input {
  width: 100%;
  height: 50px;
  background: hsla(0, 0%, 80%, 0.15);
  border: 0;
}
@media screen and (max-width:1024px) {
    .Leave-a-message{
        width: 860px;
        margin: auto;
    }
}
@media screen and (max-width:768px) {
    .Leave-a-message{
        width: 490px;
        margin: auto;
    }
}
@media screen and (max-width:416px) {
     .Leave-a-message{
        width: 290px;
        margin: auto;
    }
}
a{
	color: gray;
}
</style>