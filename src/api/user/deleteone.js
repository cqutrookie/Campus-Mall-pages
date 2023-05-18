//删除指定的购物车商品
import request from "@/api";
export function deleteone(query) {
    return request({
        url:'/deleteone',
        method:'get',
        params : {
           commodityid:query.commodityid,
        }
    })
}

export default deleteone