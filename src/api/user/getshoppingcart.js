//根据用户id获取购物车里面的内容
import request from "@/api";
export function getshoppingcart(query) {
    return request({
        url:'/getshoppingcart',
        method:'get',
        params : {
           id:query.userid,
        }
    })
}

export default getshoppingcart