import request from "@/api";
export function settlementCart(query) {
    return request({
        url:'/settlementCart',
        method:'get',
        params: {
            commodityid:query.ids
        }
       
    })
}

export default settlementCart