import request from "@/api";
export function admin(query) {
    return request({
        url:'/admin',
        method:'post',
        params : {
           inputstr:query.inputstr,
        }
    })
}

export default admin