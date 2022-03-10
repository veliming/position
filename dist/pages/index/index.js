;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[3],{

/***/ 3:
/***/ (function(module, exports) {

//index.js
var app = getApp();
Page({
  data: {
    longitude: 114.392952,
    latitude: 30.482663,
    boxDisplay: true,
    repairFeedbackDisplay: false,
    disabled: true,
    markers: [],
    timer: "",
    feedbackErea: "",
    submitFeedback: [],
    //路线
    polyline: [{
      points: [{
        longitude: 114.3953508139,
        latitude: 30.4935356094
      }, {
        longitude: 114.3964666128,
        latitude: 30.4932952419
      }, {
        longitude: 114.3960320950,
        latitude: 30.4916218979
      }, {
        longitude: 114.3934786320,
        latitude: 30.4919316074
      }, {
        longitude: 114.3934732676,
        latitude: 30.4914462413
      }, {
        longitude: 114.3920302391,
        latitude: 30.4914323737
      }, {
        longitude: 114.3920999765,
        latitude: 30.4900779583
      }, {
        longitude: 114.3915581703,
        latitude: 30.4886033344
      }, {
        longitude: 114.3913757801,
        latitude: 30.4864306503
      }, {
        longitude: 114.3916976452,
        latitude: 30.4846970910
      }, {
        longitude: 114.3925344944,
        latitude: 30.4841238539
      }, {
        longitude: 114.3918746710,
        latitude: 30.4823717616
      }, {
        longitude: 114.3909251690,
        latitude: 30.4823948765
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    // 故障反馈类型
    feedbacks: [{
      name: 'location',
      value: '校车的定位错误；定位与实际位置偏离'
    }, // { name: 'state', value: '校车颜色标示的状态与校车的实际状态不符' },
    {
      name: 'number',
      value: '校车车号不对应'
    }]
  },
  onLoad: function onLoad(options) {
    console.log("onLoad");
    var that = this;
    this.mapCtx = wx.createMapContext('myMap'); //获取当前位置

    wx.getLocation({
      type: 'gcj02',
      //返回可以用于wx.openLocation的经纬度
      success: function success(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        that.setData({
          latitude: latitude,
          longitude: longitude
        });
      }
    });
  },
  
  regionchange:function(e) {
    //获取移动后的位置信息，包含滑动开始和滑动结束两个位置信息
    var etype = e.type;
    // 只捕捉移动后的点的信息
    if (etype=='end') {
      var that=this
      this.mapCtx.getCenterLocation({
        success: function (res) {
          that.setData({
            //用一个变量来临时存储这个经纬度信息，在需要使用这个信息的控件函数里使用就可以了
            //至于为什么可以在这里定义data变量，暂时不清楚
           templog: res.longitude,
           templat: res.latitude
          })
        }
      })
    }
  },
  onReady: function onReady(e) {
    // 请求车辆定位信息
    console.log("onReady");
    var that = this;
    wx.login({
      success: function success(res) {
        if (res.code) {
          var authorizeUrl = app.BASE_URL + '/user/session';
          var authorizeData = {
            code: res.code
          };
          app.request(authorizeUrl, 'POST', authorizeData, function (res) {
            console.log('/user/session');
            console.log(res);
            wx.setStorageSync('token', res.header.Authorization);
            var busPositionUrl = app.BASE_URL + '/bus/all';
            var token = wx.getStorageSync('token');
            that.setData({
              timer: setInterval(function () {
                app.request(busPositionUrl, 'GET', '', function (res) {
                  console.log(res);
                var maxbuses =res.data.bused.length
                  for (var i = 0; i < maxbuses; i++) {
                    let marker = "markers[" + i + "]";

                    that.setData({[marker]:{ 
                      id:  parseInt(res.data.bused[i].type), 
                      iconPath: "../img/greenBus.png", 
                      latitude: res.data.bused[i].position.la, 
                      longitude: res.data.bused[i].position.lo, 
                      width: 25, 
                      height: 25 }});
                  }
                  console.log(that.data.markers);
                }, function (res) {}, {
                  'Authorization': token
                }, '');
              }, 4000)
            });
          }, function (res) {}, {
            'content-type': 'application/json'
          }, '');
        }
      }
    });
  },
  onShow: function onShow(e) {
    console.log("onShow");
  },
  // 故障反馈面板是否显示
  repair: function repair() {
    this.setData({
      boxDisplay: false,
      repairFeedbackDisplay: true
    });
  },
  // 获取checkbox的值
  checkboxChange: function checkboxChange(e) {
    this.setData({
      submitFeedback: e.detail.value
    });
  },
  //获取反馈建议texterea的值
  feedbackErea: function feedbackErea(e) {
    this.setData({
      feedbackErea: e.detail.value
    });
  },
  // 提交反馈
  submitFeedback: function submitFeedback(e) {
    var that = this;
    var feedbackData = {
      type: that.data.submitFeedback.toString(),
      text: that.data.feedbackErea
    };
    var token = wx.getStorageSync('token');
    var feedbackUrl = app.BASE_URL + '/feedback';
    app.request(feedbackUrl, 'POST', feedbackData, function (res) {
      console.log('feedbackUrl');
      console.log(res);
      wx.showToast({
        title: '成功',
        icon: 'succes',
        duration: 1000,
        mask: true
      });
      that.setData({
        repairFeedbackDisplay: false,
        boxDisplay: true
      });
    }, function (res) {}, {
      'Authorization': token
    }, '');
  },
  repairFeedbackBox: function repairFeedbackBox() {
    this.setData({
      repairFeedbackDisplay: false,
      boxDisplay: true
    });
  },
  Unload: function Unload() {
    clearInterval(this.data.timer);
  },
});

/***/ })

},[[3,0]]]);