<template>
    <div class="shoppinglist">
        <div class="shoppinglist-head">
            <div class="shopping-head-left">购物车（全部{{number}}）</div>
        </div>
        <div class="shoppinglist-body">
            <div>
                <div class="wp">
                    <div class="th th-item">商品信息</div>
                    <div class="th th-info">&nbsp;</div>
                    <div class="th th-price">单价</div>
                    <div class="th th-amount">数量</div>
                    <div class="th th-sum">金额</div>
                    <div class="th th-op">操作</div>
                </div>
            </div>
            <div>
                <div v-for="item in goods" :key="item.id">
                    <div class="shoppinglist-resource">
                        <span>店铺：</span>
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="shoppinglist-goodsinfo">
                        <div class="wp goods">
                            <div class="th th-item">
                                <img :src="item.goods_image" :alt="item.goods_alt"/>
                                <div>{{ item.goods_info }}</div>
                            </div>
                            <div class="th th-info">&nbsp;</div>
                            <div class="th th-price">
                                <span>￥{{ item.goods_price }}</span>
                            </div>
                            <div class="th th-amount">
                                <div class="addsub" @click="()=>{
                                    item.goods_amount>0 ? item.goods_amount-=1:item.goods_amount=0
                                    getTotalChooseNumbers()
                                    }" v-if="item.goods_amount>0">-</div>
                                <span>{{ item.goods_amount }}</span>
                                <div class="addsub" @click="()=>{
                                    item.goods_amount+=1
                                    getTotalChooseNumbers()
                                }">+</div>
                            </div>
                            <div class="th th-sum">
                                <span>{{ item.goods_price*item.goods_amount }}</span>
                            </div>
                            <div class="th th-op">
                                <div @click="">{{ item.goods_op }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shoppinglist-foot">
            <div class="shopping-foot-right">
                <div>已选商品{{ total }}件</div>
                <div>合计（不含运费）￥{{ total_price }}</div>
                <button :disabled="total_price<=0">结算</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import {onMounted, reactive, ref} from 'vue'
const number = ref(0)
const total_price = ref(0.00)
const total = ref(0)
const goods = reactive([])
onMounted(()=>{
    goods.push({
        id:1,
        name:'店铺1',
        goods_alt:'商品1',
        goods_image:'https://picsum.photos/seed/picsum/100/100',
        goods_info:'123',
        goods_price:20,
        goods_amount:0,
        goods_sum:0,
        goods_op:'移出购物车'
    },
    {
        id:2,
        name:'店铺1',
        goods_alt:'商品2',
        goods_image:'https://picsum.photos/seed/picsum/100/100',
        goods_info:'123',
        goods_price:22,
        goods_amount:1,
        goods_sum:0,
        goods_op:'移出购物车'
    })
    number.value = goods.length
    getTotalChooseNumbers()
})
const getTotalChooseNumbers = (amount)=>{
    let t1 = 0
    let t2 = 0
    goods.map(item=>{
        t1+=item.goods_amount
        t2+=item.goods_amount*item.goods_price
    })
    total.value = t1
    total_price.value=t2
}


</script>
<style lang="scss" scoped>
.shoppinglist{
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-around;
  width:1000px;
  height:100%;
  padding: 50px;
  border:1px solid gray;
  border-radius: 50px;
}
.shoppinglist-head{
    display: flex;
    justify-content: space-between;
}
.shoppinglist-foot{
    display: flex;
    justify-content: flex-end;
}

.shopping-foot-right{
    display: flex;
    gap:10px;
}
.wp{
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    .th{
        text-align: center;
    }
    .th-item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex:4;
    }
    .th-info{
        flex:2;
    }
    .th-price{
        flex:1;
    }
    .th-amount{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex:1;
        gap:10px;
    }
    .th-sum{
        flex:1;
    }
    .th-op{
        flex:1;
    }
    .th-op:hover{
        cursor: pointer;
    }
}
.shoppinglist-goodsinfo{
    width:100%;
}
.goods{
    height:100px;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    border-radius: 20px;
}
.addsub{
    text-align: center;
    line-height: 10px;
    justify-content: center;
    width:10px;
    height:10px;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 1px;
    user-select: none;
}
.addsub:hover{
    cursor: pointer;
}

</style>