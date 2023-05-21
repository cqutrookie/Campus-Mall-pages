import request from "@/api";
export function getcommodities(query) {
    return request({
        url:'/getPage',
        method:'post',
        params : {
           pageNum : query.pageNum
        }
    })
}

export default getcommodities