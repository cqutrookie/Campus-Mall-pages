<template>
  <div class="home">
    <div class="background"></div>
    <el-header class="header">
      <div class="logo">
        <img src="../shop/img/logo.png" alt="logo" />
        <span class="title">Campus-Mall</span>
      </div>
      <el-menu class="menu" mode="horizontal">
        <el-menu-item index="1" @click="jumptoshopmain">首页</el-menu-item>
        <el-menu-item index="2" @click="jumptoAboy">关于我们</el-menu-item>
        <el-menu-item index="3" @click="jumptoOwn">欢迎你,{{name}}</el-menu-item>
      </el-menu>
      <el-button class="publish" type="primary" icon="el-icon-plus" size="medium" @click="goToPublish" style="background-color: #808080;">发布商品</el-button>
      <el-input
        class="search"
        placeholder="搜索商品"
        prefix-icon="el-icon-search"
        size="mini"
        v-model="searchText"
        @keydown.enter="search"
      />
      <el-button class="cart" icon="el-icon-shopping-cart-full" size="medium" @click="goToCart" />
    </el-header>
    <div class="cart-container" v-show="showCart">
      <div class="cart-header">
        <span class="title">我的购物车</span>
        <el-button type="text" @click="clearCart">清空购物车</el-button>
        
      </div>
      <div class="cart-content">
        <div class="cart-item"  v-for="(item, index) in cartItems" :key="index">
          <img :src="require('../shop/img/'+item.img)" alt="商品图片" class="item-image" />
          <div class="item-info">
            <div class="item-name">{{ item.commodityname }}</div>
            <div class="item-price">{{ item.commodityprice }}RMB</div>
          </div>
          <el-button type="text" icon="el-icon-close" @click="removeItem(index)" />
        </div>
        <div v-if="cartItems.length === 0" class="empty-cart">购物车是空的</div>
      </div>
      <div class="cart-footer">
        <div class="total-price">总价：{{ totalPrice }}RMB</div>
        <el-button type="primary" :disabled="cartItems.length === 0" @click="buyit">去结算</el-button>
      </div>
    </div>
    <h1 class="home-title">热门商品</h1>
    <el-row :gutter="20">
      <el-col v-for="(product, index) in products"  :key="index" :xs="24" :sm="12" :md="8" :lg="6" >
        <el-card class="product-card" >
          <img :src="require('../shop/img/'+product.img)"  class="product-image" />
          <div class="product-info">
            <div class="product-name-wrapper">
              <span class="product-name">{{ product.commodityname }}</span>
              <span class="product-date">{{ product.creattime }}</span>
            </div>
            <span class="product-price">{{ product.commodityprice }}RMB</span>
          </div>
          <div class="product-description">{{ product.commoditydes }}</div>
          <div class="product-actions">
            <el-button class="join"  type="primary" size="small" @click="addToCart(product)">加入购物车
            
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="pagination">
      <button :disabled="pageNum === 1" @click="previousPage">上一页</button>
      <button
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ active: pageNumber === currentPage }"
        @click="goToPage(pageNumber)"
      >
      
        {{ pageNumber }}
      </button>
      <button :disabled="pageNum === totalPages" @click="nextPage">下一页</button>
    </div>
    
  </div>
</template>

<script>
import {ElNotification,ElRow, ElCol, ElCard, ElButton, ElHeader, ElMenu, ElMenuItem, ElSubmenu, ElInput,ElMessage, ElMessageBox } from 'element-plus';

import {getcommodities} from '@/api/user/getcommodities'
import {getsearch} from '@/api/user/getserchcontext'
import {addshoppingcart} from '@/api/user/addshoppingcart'
import {getshoppingcart} from '@/api/user/getshoppingcart'
import {clearCart} from '@/api/user/clearcart'
import {deleteone} from '@/api/user/deleteone'
import{settlementCart} from '@/api/user/settlementCart'
import router from "@/router";
export default {
  name: 'Home',
  components: {
    ElRow,
    ElCol,
    ElCard,
    ElButton,
    ElHeader,
    ElMenu,
    ElMenuItem,
    ElSubmenu,
    ElInput,
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 8,
      totalPages:2,
      cartItems: [
        {
          merchantid:"",
          commodityid:"",
          commodityname: '商品名称',
          commodityprice: 100,
          img: "i1.png",
          creattime: '2022-01-01',
          commodityprice: '商品描述1',
          status:0,
        }
      ], // 购物车中的商品列表
      totalPrice: 0, // 购物车中商品的总价
      showCart: false, // 添加 cartVisible 属性
      products: [
        {
          merchantid:"",
          commodityid:"",
          commodityname: '商品名称1',
          commodityprice: 100,
          img: "i1.png",
          creattime: '2022-01-01',
          commodityprice: '商品描述1',
          status:0,
        }
      ],
      name:'',
      searchText: '',
    };
  },



  methods: {
    jumptoOwn(){
      router.push("/ownPage");
    },

    buyit(){
        //结算逻辑
        let params = {};
        params.ids = "";

        for(var i=0;i<this.cartItems.length;i++){
          params.ids += this.cartItems[i].commodityid+",";
        }
        if(this.totalPrice ==0){
        ElMessageBox.confirm(
        '购物车是空的,无法结算商品',
        'Warning',
        {
          confirmButtonText: '确定',
        }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'campus-mall',
      })
    })
      }
      else{
//调用接口全部删除购物车里的物品
          ElMessageBox.confirm(
    '你确定要结算购物车里的所有商品吗',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      
        //向后端发起请求
        settlementCart(params).then(res => {
        
        if (res.data.CODE === '200') {
          // 清空购物车
            ElMessage({
        type: 'success',
        message: '成功结算购物车',
      })
    
        } 
        else if(res.data.CODE === '201'){
          ElNotification.error({
            title: '账户余额不足',
            message: res.data.msg
          })
        }
        else if(res.data.CODE === '202'){
          ElNotification.error({
            title: '商品'+res.data.commodityname+"已经被其他用户购买了请在购物车删除",
            message: res.data.msg
          })
        }
        else if(res.data.CODE === '204'){
          ElNotification.error({
            title: '商品'+res.data.commodityname+"已经被管理员下架请在购物车删除",
            message: res.data.msg
          })
        }
      }).catch(res => {
        ElNotification({
          title: 'Error',
          message: '服务器出错',
          type: 'error',
        });
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消',
      })
    })
  }
    
    },

    jumptoshopmain(){
      router.push('/shopmain');
    },
    goToPublish(){
        router.push('/salecommodity');
    },

    goToPage(page){
      if(this.searchText !=''){
        this.search();
      }
      else{
        this.pageNum = page;
      this.loadingdata();
      }
      
    },
    loadingdata(){

      this.name = sessionStorage.getItem("name");
      var this_=this;
  
      var params = {};
      
        params.pageNum = this_.pageNum;
      getcommodities(params).then(res => {
   
          if (res.data.CODE === '200') {
              ElNotification({
                title: 'Success',
                message: '请求成功',
                type: 'success',
              });
              this_.products = res.data.page.list;
              this_.totalPages = res.data.page.pages;
              console.log(this.pageNum);
            
          } else {
            ElNotification.error({
              title: '请求失败',
              message: res.data.msg
            })
          }
        }).catch(res => {
          ElNotification({
            title: 'Error',
            message: '服务器出错',
            type: 'error',
          });
        })
    },
    nextPage() {
      if(this.searchText!=''){
        this.pageNum += 1;
        this.search();
      }
      else{
        this.pageNum += 1;
      
      this.loadingdata();
      }

    },
    jumptoAboy(){
      router.push('/AboutUs');
    },
    previousPage(){
      if(this.searchText!=''){
        this.pageNum -= 1;
        this.search();
      }
      else{
        this.pageNum -= 1;
      
      this.loadingdata();
      }
    },
    removeItem(index) {
      var this_ = this;
      // 从购物车中删除商品
      var params = {};
      const item = this_.cartItems[index];
      //获取要删除的商品id
      params.commodityid = item.commodityid;
        //得到userid
        params.userid = sessionStorage.getItem("userid");
        //向后端发起请求
        deleteone(params).then(res => {
        
        if (res.data.CODE === '200') {
          // 删除成功
          this.cartItems.splice(index, 1);
     if (this.cartItems.length === 0) { // check if cart is empty
    this.totalPrice = 0; // set totalPrice to 0 if cart is empty
  } else {
    this.totalPrice -= item.commodityprice;
  }
         
        } 
        else if(res.data.CODE === '201'){
          ElNotification.error({
            title: '删除失败',
            message: res.data.msg
          })
        }
      }).catch(res => {
        ElNotification({
          title: 'Error',
          message: '服务器出错',
          type: 'error',
        });
      })
    
      
  
      
    },
    clearCart() {
      var this_ = this;
      if(this.totalPrice ==0){
        ElMessageBox.confirm(
        '购物车是空的',
        'Warning',
        {
          confirmButtonText: '确定',
        }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'campus-mall',
      })
    })
      }
      else{
//调用接口全部删除购物车里的物品
          ElMessageBox.confirm(
    '你确定要删除购物车里的所有商品吗',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      var params = {};
        //得到userid
        params.userid = sessionStorage.getItem("userid");
        //向后端发起请求
        clearCart(params).then(res => {
        
        if (res.data.CODE === '200') {
          // 清空购物车
            this.cartItems = [];
            this.totalPrice = 0;
        } 
        else if(res.data.CODE === '201'){
          ElNotification.error({
            title: '删除失败',
            message: res.data.msg
          })
        }
      }).catch(res => {
        ElNotification({
          title: 'Error',
          message: '服务器出错',
          type: 'error',
        });
      })
      ElMessage({
        
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消',
      })
    })
      }
    },
    addToCart(product) {
        //加入购物车逻辑
        var params = {};
        params.commodityid = product.commodityid;
        params.merchantid = product.merchantid;
        var this_ = this;
        addshoppingcart(params).then(res => {
        
        if (res.data.CODE === '200') {
            ElNotification({
              title: 'Success',
              message: '添加购物车成功',
              type: 'success',
            });
            this_.cartItems.push(product);
            this_.totalPrice += product.commodityprice;
        }
        else if(res.data.CODE === '201'){
          ElNotification.error({
            title: '不能添加自己出售的商品',
            message: res.data.msg
          })
        }
        else if(res.data.CODE === '202'){
          ElNotification.error({
            title: '你已经添加该商品',
            message: res.data.msg
          })
        }
      }).catch(res => {
        ElNotification({
          title: 'Error',
          message: '服务器出错',
          type: 'error',
        });
      })
        
    },
    goToCart() {
          //点击显示之后向后端发起请求查看用户购物车的内容
        this.showCart = !this.showCart;
        var params = {};
        //得到userid
        params.userid = sessionStorage.getItem("userid");
        var this_ = this;
        //向后端发起请求
        getshoppingcart(params).then(res => {
        
        if (res.data.CODE === '200') {
          //返回购物车内所有数据
          this_.cartItems = res.data.commodities;
          this_.totalPrice = res.data.totalprice;
        } 
        else if(res.data.CODE === '201'){
          ElNotification.error({
            title: '获取购物车信息失败',
            message: res.data.msg
          })
        }
      }).catch(res => {
        ElNotification({
          title: 'Error',
          message: '服务器出错',
          type: 'error',
        });
      })
      
    
      
    

    },
    search() {
      var this_ = this;
      //传入搜索框里面的值给后端
      var params = {};
        params.commodityname=this.searchText;
        this.pageNum = 1;
        params.pageNum = this.pageNum;
      getsearch(params).then(res => {
        
        if (res.data.CODE === '200') {
            ElNotification({
              title: 'Success',
              message: '请求成功',
              type: 'success',
            });
            this_.products = res.data.commodities.list;
            this_.totalPages = res.data.commodities.pages;
        } else {
          ElNotification.error({
            title: '请求失败',
            message: res.data.msg
          })
        }
      }).catch(res => {
        ElNotification({
          title: 'Error',
          message: '服务器出错',
          type: 'error',
        });
      })
    },



  },
  mounted() {
    console.log(this.pageNum);
    this.loadingdata();
  },
  filters: {
    formatPrice(price) {
      return `¥${price.toFixed(2)}`;
    },
    formatDate(date) {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const day = d.getDate();
      return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    },
  },


};
</script>

<style scoped>
.home {
  /* add position:relative to enable absolute positioning of the background */
  position: relative;
}

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
.join{
  background-color: #808080;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #333;
  border: 1px solid #222;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  transition: all 0.2s ease;
}

.pagination button:hover:not(:disabled) {
  background-color: #555;
  border-color: #444;
}

.pagination button:disabled {
  background-color: #555;
  border-color: #444;
  color: #999;
  cursor: default;
}

.pagination button.active {
  background-color: #007bff;
  border-color: #007bff;
}

.pagination button:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pagination button:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.pagination button:not(:first-child):not(:last-child) {
  margin-left: -1px;
}

.home .menu .el-menu-item:nth-child(1) {
  color: black;
}
.home .menu .el-menu-item:nth-child(2) {
  color: black;
}
.home .menu .el-menu-item:nth-child(3) {
  color: black;
}
.cart-container {
  border-radius: 10px; /* 添加圆角边框 */
  position: fixed;
  top: 50px;
  right: 0;
  width: 300px;
  height: 100%;
  background-color:#555;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.cart-content {
  max-height: 300px;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 10px;
}

.item-info {
  flex: 1;
}

.item-price {
  font-size: 14px;
  color: #f00;
}

.empty-cart {
  text-align: center;
  font-size: 16px;
  color: #999;
  margin-top: 20px;
}

.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.total-price {
  font-size: 16px;
  color: #f60;
}

.el-button[disabled] {
  opacity: 0.6;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #808080;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
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
.submenu {
  background-color: #f2f2f2;
  margin-top: 5px;
  border-radius: 6px;
  font-size: 14px;
  width: 200px;
}
.submenu-popper {
  z-index: 2000;
}
.search {
  width: 200px;
  margin-left: 20px;
}
.cart {
  margin-left: 20px;
}
.home-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
}
.product-card {
  height: 450px;
  overflow: hidden;
  position: relative;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
 
  background-color:hsl(60, 6%, 72%);
}
.product-card .el-card:hover {
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  transform: scale(1.52);
}
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.product-card .product-image:hover {
  transform: scale(1.1);
}
.product-info {
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100px;
}
.product-name-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.product-name {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}
.product-date {
  font-size: 12px;
  color: #999;
}
.product-price {
  font-size: 16px;
  font-weight: bold;
  color: #f60;
}
.product-description {
  padding: 12px;
  font-size: 14px;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-actions {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

</style>