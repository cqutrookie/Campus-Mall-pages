import request from "@/api";
export function register(query) {
    return request({
        url:'/register',
        method:'post',
        params : {
            name : query.name,
            username : query.username,
            password :query.password
        }
    })
}

export default register