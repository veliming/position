const request = function (url, method, data, succ, fail, header, dataType) {
  wx.request({
    url: url,
    data: data,
    dataType: dataType,
    header: header,
    method: method,
    success: res => {
      if (succ) succ(res);
    },
    fail: err => {
      if (fail) fail(err);
    }
  })
}
module.exports = {
  request
};