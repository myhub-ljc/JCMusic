//但是其实在index文件中我们封装的并不彻底，因为有些参数也是写死的，所以我们再对它封装一下
import jcRequest from './index';

export function getTopMv(offset, limit = 10) {
  return jcRequest.get('/top/mv', {
    offset,
    limit
  })
}