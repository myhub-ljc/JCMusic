//我们先来对网络请求进行一个简单的封装
const baseURL = "http://123.207.32.32:9001/top/mv";

class JCRequest{
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseURL + url,
        method: method,
        data: params,
        success: function(res) {
          resolve(res);
        },
        fail: function(err) {
          reject(err);
        }
      })
    })
  }

  //这里我们是为了避免每次都要传入方法
  get(url, params) {
    return this.request(url, 'GET', params);
  }

  post(url, params) {
    return this.request(url, 'POST', params);
  }
}

const jcRequest = new JCRequest();

export default jcRequest;