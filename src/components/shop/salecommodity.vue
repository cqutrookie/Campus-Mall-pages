<template>
  <div class="background"></div>
  <div class="upload-form">
    <el-header class="header">
      <div class="logo">
        <img src="../shop/img/logo.png" alt="logo" />
        <span class="title">Campus-Mall</span>
      </div>
      <el-menu class="menu" mode="horizontal">
        <el-menu-item index="1" @click="jumptoshopmain">首页</el-menu-item>
        <el-menu-item index="2" @click="jumptoAboy">关于我们</el-menu-item>

      </el-menu>
    </el-header>
    <input type="file" @change="handleFileSelect" required>
    <input type="text" v-model="form.name" placeholder="商品名称" required>
    <textarea v-model="form.description" placeholder="商品描述" required></textarea>
    <input type="text" v-model="form.price" placeholder="商品价格">
    <button @click="uploadImage">上传</button>
    <img v-if="imageUrl" v-bind:src="imageUrl">
  </div>
</template>

<script>
import {ElNotification} from 'element-plus';
  import {salecommodity} from '@/api/user/salecommodity'
  import router from "@/router";
export default {


  data() {
    return {
      selectedFile: null,
      imageUrl: null,
      form: {
        name: '',
        description: '',
        price: ''
      }
    };
  },
  methods: {
    jumptoshopmain(){
      router.push('/shopmain');
    },
    jumptoAboy(){
      router.push('/AboutUs');
    },
    handleFileSelect(event) {
      this.selectedFile = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.selectedFile);
    },
    async uploadImage() {
      //判定输入是否符合规则
      if(this.form.name == '')
      {
        alert("请输入商品名");
        return;
      }
      if((this.form.price == '' ))
      {
        alert("请输入价格以数字形式");
        return;
      }
      if(this.form.description == '')
      {
        alert("请输入商品描述");
        return;
      }
      if (!this.selectedFile) {
        // 如果没有选择文件，则不进行上传
        alert("请上传图片");
        return;
      }

      // 创建FormData对象，并将用户选择的文件添加到其中
      let formData = new FormData();
      formData.append('file', this.selectedFile);
      let params={};
      params.name = this.form.name;
      params.price = this.form.price;
      params.description = this.form.description;
      formData.append('name', this.form.name);
      formData.append('description', this.form.description);
      formData.append('price', this.form.price);
      // 发送POST请求，并获取响应数据
      let response = await fetch('http://localhost:80/Campus-Mall/saleCommodity', {
        method: 'POST',
        body: formData
        
      });
      alert("发布成功");

      // 保存上传成功后返回的图片URL
    
    }
  }
};
</script>

<style scoped>

.background {
  /* set the background color and opacity */
  background-color: #2c2828;
  opacity: 0.6;

  /* set the position, size, and z-index */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;


}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #808080;
  border-bottom: 1px solid #eee;
  position: fixed;
  margin-bottom: 50px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.menu .el-menu-item:nth-child(1) {
  color: black;
}
.menu .el-menu-item:nth-child(2) {
  color: black;
}
.menu .el-menu-item:nth-child(3) {
  color: black;
}
.logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}
.logo img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.title {
  white-space: nowrap;
}
.menu {
  border: none;
  background-color: #808080;
  font-size: 16px;

}
.menu-item {
  margin-left: 20px;
  margin-right: 20px;
  color: black;
}
.upload-form {
  max-width: 500px;
  margin: 0 auto;
  margin-top: 80px;
}

.upload-form input[type="file"],
.upload-form input[type="text"],
.upload-form textarea {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.upload-form textarea {
  height: 100px;
}

.upload-form button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.upload-form button:hover {
  background-color: #0069d9;
}

.upload-form img {
  max-width: 100%;
  margin-top: 10px;
  display: block;
}
</style>