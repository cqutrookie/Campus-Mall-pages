<template>
    <div class="background"></div>
    <div class="container">
        <div class="container-head">
            <div class="container-head-l">
                <div>用户名</div>
                <div>
                    <img src="" alt="">
                    <span>{{username}}</span>
                </div>
            </div>
            <div class="container-head-r">
              <div>
                    <span>{{money}}</span>
                    <h4>账户余额</h4>
              </div>
                <div>
                    <span><button @click="changepassword">点击修改</button></span>
                    <div v-if="showDialog">
                        <div class="overlay"></div>
                        <div class="dialog">
                         
                          <input type="password" v-model="newPassword" placeholder="请输入新密码">
                          <div class="buttons">
                            <button @click="cancel">取消</button>
                            <button @click="confirm">确定</button>
                          </div>
                        </div>
                      </div>
                    <h4>修改密码</h4>
                </div>
                <div>
                    <span>联系管理员</span>
                    <h4>遇到问题</h4>
                </div>
            </div>
        </div>
        <div class="container-foot">
            <div class="container-foot-t">
                <span>我的订单</span>
                <div>
                    <span>查看全部</span>
                    <el-icon :size="15">
                        <ArrowRight />
                    </el-icon>
                </div>
            </div>
            <div class="container-foot-b">
                <div class="container-goods" v-for="(order,index) in orders" :key="index">
                    <div class="container-foot-b-l">
                        <div class="fool">
                            <img :src="require('../shop/img/'+order.img)"  class="product-image" />
                            <div class="fool-r">
                                <div><span>{{order.commodityname}}</span></div>
                                <div><span>{{order.commoditydes}}</span></div>
                            </div>
                        </div>
                        <div class="foor">
                            <span>已下单</span>
                        </div>
                    </div>
                    <div class="container-foot-b-r">
                        <div class="container-bottom">
                            <div class="container-foot-rr">
                                <span>{{order.commodityprice}}</span>
                               
                                <span>在线支付</span>
                            </div>
                        </div>
                        <div class="container-bottom">
                            <div class="container-foot-rr">
                                <button type="text" class="btn" @click="confirmCommodity(index)" v-if="order.status == 1">确认收货</button>
                                <span v-if="order.status == 2">已收货</span>
                                <span v-if="order.status == 0">平台正在发货</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import {ElNotification,ElRow, ElCol, ElCard, ElButton, ElHeader, ElMenu, ElMenuItem, ElSubmenu, ElInput,ElMessage, ElMessageBox } from 'element-plus';
import{changepassword} from '@/api/user/changepassword';
import{getOrder} from '@/api/user/getOrder';
import{confirmCommodity} from '@/api/user/confirmCommodity'
import router from "@/router";
export default{
    data() {
    return {
        orders: [
        {
          merchantid:"",
          commodityid:"",
          commodityname: '商品名称1',
          commodityprice: 100,
          img: "i1.png",
          creattime: '2022-01-01',
          commoditydes: '商品描述1',
          status:0,
        }
      ],
        money:100,
        username:"none",
        newPassword:"",
        showDialog:false,
    };
  },
  methods: {
    confirmCommodity(index){
        ElMessageBox.confirm(
    '确定收到货品了吗',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
      var params = {};
        const item = this.orders[index];
        params.commodityid = item.commodityid;
        params.merchantid = item.merchantid;
        //向后端发起请求
        confirmCommodity(params).then(res => {
        
        if (res.data.CODE === '200') {
            ElMessage({
        
        type: 'success',
        message: '确认收货成功',
      })
        } 
        else if(res.data.CODE === '201'){
          ElNotification.error({
            title: '确认失败',
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
        message: '发起请求失败',
      })
    })
    },
    loadingdata(){
        getOrder().then(res => {
            
        this.orders = res.data.commodities;
        this.money = res.data.money;
    })
       
        
      
    },
    cancel(){
        this.showDialog = false;
    },
    confirm(){
        let params = {};
      params.newpassword = this.newPassword;
      changepassword(params).then(res => {
        
        if (res.data.CODE === '200') {
            this.showDialog = false;
            router.push("/login");
            ElMessage({
        type: 'success',
        message: '修改密码成功请重新登录',
       
        
      })
    
        } 
        else if(res.data.CODE === '201'){
          ElNotification.error({
            title: '修改失败',
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
    changepassword(){
        
        this.showDialog = true;
     
    }
},
   
  mounted() {
    this.loadingdata();
    this.username = sessionStorage.getItem("name");
  },
}
  

</script>

<style lang="scss" scoped>

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
button{
  border:1px solid #409eff;
  background: #808080;
  width:100px;
  height:30px;
  border-radius: 5px;
  color:#ffffff;
  transition-duration: 0.5s;
}
button:hover{
  background:#66b1ff;
  cursor:pointer;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:20px;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    min-width: 850px;
    height:100%;
    background: #808080;
    .container-head {
        display: flex;
        border-radius: 8px;
        justify-content: space-between;
        padding: 20px;
        width: 100%;
        min-width: 800px;
        max-width: 1000px;
        border: 1px solid black;
        background-color: #f2f2f2;

        .container-head-l {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .container-head-r {
            display: flex;
            width: 500px;
            justify-content: space-around;

            div {
                text-align: center;
            }
        }
    }

    .container-foot {
        display: flex;
        flex-direction: column;
        padding: 20px;
        min-height:560.4px;
        border-radius: 8px;
        border: 1px solid white;
        gap: 20px;
        width: 100%;
        max-width: 1000px;
        min-width: 850px;
        align-items: center;
        background-color: #f2f2f2;
        .container-foot-t {
            display: flex;
            border: 1px solid white;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .container-foot-b {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap:25px;
            align-items: center;
            height: 100%;
            width: 100%;
            min-width: 800px;
            max-width: 1000px;

            .container-goods {
                display: flex;
                height: 150px;
                width: 100%;
                justify-content: space-between;
                align-items: center;

                .container-foot-b-l {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 500px;
                    gap: 25px;
                    height: 100%;

                    .fool {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        height: 100%;

                        img {
                            height: 100%;
                        }

                        .fool-r {
                            display: flex;
                            gap:5px;
                            flex-direction: column;
                            justify-content: center;
                            text-align: center;
                        }
                    }

                    .foor {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap:5px;
                    }
                }

                .container-foot-b-r {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;

                    .container-bottom {
                        height: 100%;

                        border: 1px solid white;

                        .container-foot-rr {
                            display: flex;
                            gap:5px;
                            height: 100%;
                            width: 200px;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            #buyagain:hover,#search:hover{
                              cursor:pointer;
                            }
                            #buyagain,#search{
                              font-size: 14px;
                            }
                        }
                    }


                }
            }
        }
    }
}
</style>