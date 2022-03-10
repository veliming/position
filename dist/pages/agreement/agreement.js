;require('./../../runtime');(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[4],{

/***/ 4:
/***/ (function(module, exports) {

var app = getApp();
Page({
  data: {},
  // 同意用户许可协议后不再显示用户许可协议面板
  agreemented: function agreemented(e) {
    wx.setStorageSync("agreement", true);
    var token = wx.getStorageSync('token');
    var agreementUrl = app.BASE_URL + '/user/agreement'; // wx.redirectTo({
    //   url: '../index/index'
    // })

    app.request(agreementUrl, 'GET', '', function (res) {
      console.log('agreementUrl');
      console.log(res);
      wx.redirectTo({
        url: '../index/index'
      });
    }, function (res) {}, {
      'Authorization': token
    }, '');
  }
});

/***/ })

},[[4,0]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hZ3JlZW1lbnQvYWdyZWVtZW50LmpzIl0sIm5hbWVzIjpbImFwcCIsImdldEFwcCIsIlBhZ2UiLCJkYXRhIiwiYWdyZWVtZW50ZWQiLCJlIiwid3giLCJzZXRTdG9yYWdlU3luYyIsInRva2VuIiwiZ2V0U3RvcmFnZVN5bmMiLCJhZ3JlZW1lbnRVcmwiLCJCQVNFX1VSTCIsInJlcXVlc3QiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmVkaXJlY3RUbyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxHQUFHLEdBQUdDLE1BQU0sRUFBbEI7QUFDQUMsSUFBSSxDQUFDO0FBQ0hDLE1BQUksRUFBQyxFQURGO0FBSUg7QUFDQUMsYUFBVyxFQUFFLHFCQUFVQyxDQUFWLEVBQWE7QUFDeEJDLE1BQUUsQ0FBQ0MsY0FBSCxDQUFrQixXQUFsQixFQUErQixJQUEvQjtBQUVBLFFBQU1DLEtBQUssR0FBR0YsRUFBRSxDQUFDRyxjQUFILENBQWtCLE9BQWxCLENBQWQ7QUFDQSxRQUFNQyxZQUFZLEdBQUdWLEdBQUcsQ0FBQ1csUUFBSixHQUFjLGlCQUFuQyxDQUp3QixDQUt4QjtBQUNBO0FBQ0E7O0FBRUFYLE9BQUcsQ0FBQ1ksT0FBSixDQUFZRixZQUFaLEVBQTBCLEtBQTFCLEVBQWlDLEVBQWpDLEVBQXFDLFVBQUFHLEdBQUcsRUFBSTtBQUMxQ0MsYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBUCxRQUFFLENBQUNVLFVBQUgsQ0FBYztBQUNaQyxXQUFHLEVBQUM7QUFEUSxPQUFkO0FBR0QsS0FORCxFQU1HLFVBQUFKLEdBQUcsRUFBSSxDQUFHLENBTmIsRUFNZTtBQUFFLHVCQUFpQkw7QUFBbkIsS0FOZixFQU0yQyxFQU4zQztBQVFEO0FBdEJFLENBQUQsQ0FBSixDIiwiZmlsZSI6InBhZ2VzXFxhZ3JlZW1lbnRcXGFncmVlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwcCA9IGdldEFwcCgpXHJcblBhZ2Uoe1xyXG4gIGRhdGE6e1xyXG5cclxuICB9LFxyXG4gIC8vIOWQjOaEj+eUqOaIt+iuuOWPr+WNj+iuruWQjuS4jeWGjeaYvuekuueUqOaIt+iuuOWPr+WNj+iurumdouadv1xyXG4gIGFncmVlbWVudGVkOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoXCJhZ3JlZW1lbnRcIiwgdHJ1ZSlcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICBjb25zdCBhZ3JlZW1lbnRVcmwgPSBhcHAuQkFTRV9VUkwgKycvdXNlci9hZ3JlZW1lbnQnXHJcbiAgICAvLyB3eC5yZWRpcmVjdFRvKHtcclxuICAgIC8vICAgdXJsOiAnLi4vaW5kZXgvaW5kZXgnXHJcbiAgICAvLyB9KVxyXG4gICAgXHJcbiAgICBhcHAucmVxdWVzdChhZ3JlZW1lbnRVcmwsICdHRVQnLCAnJywgcmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2FncmVlbWVudFVybCcpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgdXJsOicuLi9pbmRleC9pbmRleCdcclxuICAgICAgfSlcclxuICAgIH0sIHJlcyA9PiB7IH0sIHsgJ0F1dGhvcml6YXRpb24nOiB0b2tlbiB9LCAnJylcclxuXHJcbiAgfSxcclxufSkiXSwic291cmNlUm9vdCI6IiJ9