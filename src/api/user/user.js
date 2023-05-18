import request from "@/api";

export function login(query) {
    return request({
        url:'/checkUser',
        method:'get',
        params : {
            username : query.username,
            password :query.password
        }
    })
}

export function register(query) {
    return request({
        url:'/register',
        method:'get',
        params : {
            name : query.name,
            username : query.username,
            password :query.password
        }
    })
}

export default login
