<template>
  <div class="root">
    <headera></headera>
    <div class="box">
     <headertop></headertop>
      <div class="person-information-card">
        <el-row class="person-information-card-row">
          <el-col
            class="person-information-img hidden-sm-only hidden-xs-only"
            :md="11"
          >
            <img src="../assets/big-left-img.png" alt="" />
          </el-col>
          <el-col class="person-information-input" :sm="24" :md="13">
            <el-row type="flex" justify="space-around">
              <el-col :span="20">
                <el-form
                  :label-position="labelPosition"
                  label-width="80px"
                  :model="formLabelAlign"
                >
                  <el-form-item label="用户名">
                    <el-input
                      v-model="formLabelAlign.name"
                      ref="editTask"
                    
                      @blur.prevent="login"
                      @focus="own"
                    ></el-input>
                    <div>{{ error }}</div>
                  </el-form-item>
                  <el-form-item label="密码">
                    <el-input
                      v-model="formLabelAlign.region"
                      @blur.prevent="password"
                      @focus="ownpw"
                      @input="pass"
                    ></el-input>
                    <div>{{ errorpass }}</div>
                  </el-form-item>
                </el-form>
                <p class="agree">
                  登录即表示我同意 <a href="#">Zoom隐私声明</a> 和
                  <a href="#"> 服务条款</a> 。
                </p>

                <el-button
                  class="loginbtn"
                  size="medium"
                  round
                  type="primary"
                  @click="loginbtn"
                >
                  登录
                </el-button>
                <div class="otherlogin">
                  <div class="otherline"></div>
                  <p>登录方式</p>
                  <div class="otherline"></div>
                </div>
                <el-row type="flex" justify="space-around">
                  <i class="el-icon-chat-line-round"></i>
                  <i class="el-icon-chat-line-round"></i>
                  <i class="el-icon-chat-line-round"></i>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
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
    <!-- <jump></jump> -->
  </div>
</template>

<script>
import axios from "axios";
import "element-ui/lib/theme-chalk/display.css";
import headera from "../components/headera";
// import jump from '../components/jump.vue'
import headertop from '@/components/headertop'
export default {
  components: {
    //  name:"",
    headera,
    // jump:""
    headertop,
  },
  directives: {
    focus: {
      // 指令的定义
      mounted(el) {
        el.focus();
      },
    },
  },
  data() {
    return {
      labelPosition: "top",
      error: "",
      jump: "/jump",
      errorpass: "",
      formLabelAlign: {
        name: "",
        region: "",
      },
    };
  },
  methods: {
    login: function () {
      if (this.formLabelAlign.name === "") {
        this.error = "没有输入任何值";
      } else {
        this.error = "";
      }
    },
    own: function () {
      this.error = "";
    },
    a: function () {
      console.log(this.formLabelAlign.name);
    },
    // password: function () {
    //   if (this.formLabelAlign.region.length < 6) {
    //     this.errorpass = "密码长度需大于7";
    //   } else {
    //     this.errorpass = "";
    //   }
    // },
    ownpw: function () {
      this.errorpass = "";
    },
    loginbtn: function () {
      axios({
        method: "GET",
        url: "/newnum.json",
      }).then((res) => {
        console.log(res.data.formLabelAligna.namea);
        if (
          res.data.formLabelAligna.namea == this.formLabelAlign.name &&
          res.data.formLabelAligna.region == this.formLabelAlign.region
        ) {
          // alert("登录成功")
          this.$router.push("/firstpagetwo");
        } else { 
          console.log("失败");
          alert("密码或者用户名错误");
        }
      });
    },
    pass(value) {
     console.log(value)
      if(value.length <6){
         this.errorpass = "密码长度需大于7";
      }
    }
  },
};
</script>

<style>
.header-information {
  height: 30px;
  background: #909399;
}
.header-tag {
  margin-left: 10px;
}
.box {
  /* width: 1200px; */
  margin: auto;
  margin-top: 50px;
}

.person-information-img img {
  width: 100%;
  height: 500px;
  background-color: gainsboro;
}
.person-information-input {
  height: 500px;
  background-color: white;
  border: 1px solid gainsboro;
}
.person-information-input .el-form {
  margin-top: 20px;
}
a {
  color: #007bff;
}
.el-form-item__label {
  width: 100%;
}
.agree {
  text-align: left;
  font-size: 13px;
}
.loginbtn {
  width: 100%;
}
.otherline {
  width: 160px;
  height: 2px;
  background-color: gainsboro;
  margin-left: 30px;
  margin-right: 30px;
}
@media screen and (max-width: 756px) {
  .otherline {
    width: 80px;
    margin-left: 15px;
    margin-right: 15px;
  }
}
.otherlogin {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.el-icon-chat-line-round {
  font-size: 30px;
}
.person-information-card {
  margin-top: 50px;
}
@media screen and (min-width: 750px) {
  .person-information-card {
    /* width: 1300px; */
    margin: 40px auto;
  }
}
@media screen and (max-width: 750px) {
  .person-information-card {
    width: px;
    margin: auto;
  }
}
.person-information-card-row {
  box-shadow: 4px 8px 31px gainsboro;
}
.floor {
  width: 100%;
  height: 140px;
  background-color: #666;
  margin-top: 50px;
}
li {
  list-style: none;
}
.floor li {
  color: beige;
}
.floor .el-row {
  height: 100%;
  align-items: center;
  line-height: 30px;
}
@media screen and (min-width: 1200px) {
  .box {
    width: 1200px;
  }
}
@media screen and (max-width: 768px) {
  .box {
    /* width: 100px; */
    /* background: black; */
    /* margin-top: 20px; */
    margin-top: 0px;
  }
}
.header-height {
  height: 50px;
  border-bottom: 1px solid gray;
}
@media screen and (max-width: 768px) {
  .header-height {
    display: none;
  }
}
.floor ul {
  padding: 0;
}
</style>