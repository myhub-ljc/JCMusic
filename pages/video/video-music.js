import { getTopMv } from '../../service/api-video';

Page({
  data: {
    topMv: []
  },
  //在页面开始加载时，便发送网络请求
  onLoad: async function() {
    //直接调用我封装好的网络请求函数
    //这里我们再优化一下，使用同步的方式去编写异步代码
    const res = await getTopMv(0);
    // console.log(res);
    this.setData({topMv: res.data});
  }
})