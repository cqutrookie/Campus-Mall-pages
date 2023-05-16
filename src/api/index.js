import axios from 'axios';

//创建ajax实例
const request = axios.create({
    //axios中请求配置有baseUrl选项
    baseURL :'http://localhost:80/Campus-Mall/',
    //超时
    timeout : 10000
    
})

export default request