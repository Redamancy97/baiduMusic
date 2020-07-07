// 这个文件里就放和音乐相关的api
import request from '../utils/http'
// 定义了一个方法，这个就是获取榜单列表的方法
// 这个方法的输入和输出
// 输出的应该是对应的榜单列表，是异步操作，可以输出一个Promise对象
export function getBillList(type, size = 6, offset = 0) {
    const url = `/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${type}&size=${size}&offset=${offset}`
    return request.get(url).then(res => {
        return {
            ...res,
            // list: res.song_list
        }
    })
}