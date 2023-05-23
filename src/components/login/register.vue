<template>
    <video autoplay loop muted="none">
        <source src="../login/video/background.mp4" type="video/mp4">
    </video>
    <div id="login">
      <div id="login-form" @keyup.enter="inputInfo">
        <h1>用户注册</h1>
        <label for="username"><i class="el-icon-user-solid" style="color: #c1c1c1"></i></label>
        <input type="text" placeholder="昵称" name="name" id="name" autocapitalize="off" v-model.trim=name aria-autocomplete="off">
        <label for="address"><i class="el-icon-user-solid" style="color: #c1c1c1"></i></label>
        <input type="text" placeholder="寝室号" name="address" id="address" autocapitalize="off" v-model.trim=address aria-autocomplete="off">
        <label for="username"><i class="el-icon-user-solid" style="color: #c1c1c1"></i></label>
        <input type="text" placeholder="用户名" name="username" id="username" autocapitalize="off" v-model.trim=username aria-autocomplete="off">
        <label for="password"><i class="el-icon-right" style="color: #c1c1c1"></i></label>
        <input type="password" placeholder="密码" name="password" id="password" autocapitalize="off" v-model.trim="password">
        <div>
          <el-button type="primary" v-on:click="inputInfo">注册</el-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ElButton,ElNotification  } from 'element-plus'
  import {register} from "@/api/user/register"
  export default {
    name: "Userregister",
    components: {
      ElButton
    },
    data: function () {
      return {
        name : '',
        username: '',
        password: '',
        address: '',
      }
    },
    methods: {
      inputInfo: function () {
        var params = {};
        params.name=this.name;
        params.username=this.username;
        params.password=this.password;
        params.address = this.address;
        register(params).then(res => {
          console.log(res.data);
          if (res.data.CODE === '01') {
              ElNotification({
                title: 'Success',
                message: '注册成功 为你跳转到登录页面登录',
                type: 'success',
              });
              this.$router.push({
                path: '/login'
              })
          } else {
            ElNotification.error({
              title: '账号已被注册',
              message: res.data.msg
            })
          }
        }).catch(res => {
          ElNotification({
            title: 'Error',
            message: '账号已被注册',
            type: 'error',
          });
        })
      },
      resetInfo: function () {
        this.username = ''
        this.password = ''
      },
      open2: function () {
        if (this.username != '' || this.password != '') {
          ElNotification({
            title: 'Success',
            message: '用户名和密码将被清空',
            type: 'success',
          });
          return;
        } else {
          ElNotification({
            title: 'Error',
            message: '请不要重复此操作',
            type: 'error',
          });
        }
  
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  #login {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  video {
    position:absolute;
    right: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    z-index:-11;

}
  #login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    min-width: 300px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .5);
  
    h1 {
      width: 60%;
      margin: 50px auto 20px;
      color: #c1c1c1;
      text-align: center;
    }
  
    input {
      width: 60%;
      margin: 15px auto;
      outline: none;
      border: none;
      padding: 10px;
      border-bottom: 1px solid #fff;
      background: transparent;
      color: white;
    }
  
    label {
      width: 60%;
      margin: 0 auto;
      position: relative;
      top: 30px;
      left: -15px;
    }
  
    div {
      width: 60%;
      margin: 10px auto;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  
    button {
      // rgba
      background-color: rgba(9, 108, 144, 0.5);
      margin: 10px 25px 40px 25px;
    }
  
    p {
      width: 60%;
      margin: 8px auto;
      position: relative;
      left: -15px;
      color: #ff0000;
      font-size: 8px;
    }
  }
  
  input {
    -webkit-text-fill-color: #ffffff !important;
    transition: background-color 5000s ease-in-out ,width 1s ease-out!important;
  }
  </style>
  