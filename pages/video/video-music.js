import { getTopMv } from '../../service/api-video';

Page({
  data: {
    topMv: []
  },
  //在页面开始加载时，便发送网络请求
  onLoad: function() {
    //直接调用我封装好的网络请求函数
    getTopMv(0).then((res) => {
      // console.log(res)
      this.setData({
        topMv: res.data.data
      })
    }).catch((err) => {
      console.log(err);
    })
  }
})