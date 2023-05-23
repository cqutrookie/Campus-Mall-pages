import request from "@/api";
export function salecommodity(query) {
    return request({
        url:'/saleCommodity',
        method:'get',
        params : {
            name:query.name,
            price:query.price,
            description:query.description,
         }
    })
}

export default salecommodity