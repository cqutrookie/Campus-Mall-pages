import request from "@/api";
export function getcommodities() {
    return request({
        url:'/getcommodities',
        method:'get',
        params : {
           
        }
    })
}

export default getcommodities