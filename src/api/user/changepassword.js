import request from "@/api";
export function changepassword(query) {
    return request({
        url:'/changePassword',
        method:'post',
        params : {
           newPassword:query.newpassword,
        }
    })
}

export default changepassword