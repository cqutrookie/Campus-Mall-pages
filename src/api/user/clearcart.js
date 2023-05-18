//删除用户购物车里的所有内容
import request from "@/api";
export function clearCart(query) {
    return request({
        url:'/clearCart',
        method:'get',
        params : {
           id:query.userid,
        }
    })
}

export default clearCart