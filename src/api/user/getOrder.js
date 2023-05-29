//删除用户购物车里的所有内容
import request from "@/api";
export function getOrder() {
    return request({
        url:'/getOrder',
        method:'get',
        params : {
    
        }
    })
}

export default getOrder