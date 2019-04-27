window.onload = function () {
  var vm = new Vue({
    el: '#box',
    data: {
      msg: 'Hello world',
    },
    methods: {
      get: function () {
        //发送get请求
        this.$http.get('net_response.json').then(function (response) {
          document.write(response.body.data[0].name);
        }, function () {
          document.write('请求失败');
        });
      }
    }
  })
};
