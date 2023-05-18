import request from "@/api";
export function addshoppingcart(query) {
    return request({
        url:'/addshoppingcart',
        method:'get',
        params : {
           commodityid:query.commodityid,
           merchantid:query.merchantid
        }
    })
}

export default addshoppingcart