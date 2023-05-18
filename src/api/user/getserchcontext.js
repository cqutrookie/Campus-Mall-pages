import request from "@/api";
export function getsearch(query) {
    return request({
        url:'/getsearch',
        method:'get',
        params : {
           commodityname:query.commodityname
        }
    })
}

export default getsearch