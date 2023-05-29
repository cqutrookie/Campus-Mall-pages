import request from "@/api";
export function confirmCommodity(query) {
    return request({
        url:'/confirmCommodity',
        method:'post',
        params : {
           commodityid:query.commodityid,
           merchantid:query.merchantid,
        }
    })
}

export default confirmCommodity