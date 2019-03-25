define([
  'require',
  'jquery'
], function (require, $) {
  'use strict';
  return function () {
    let headerHtml = `<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <p class="discription">个人后台管理系统</p>
      <div class="btn-group">
        <div class="btn-default">
        </div>
        <ul class="dropdown-menu">
          <li><a href="#">个人中心</a></li>
          <li><a href="#">登录</a></li>
          <li><a href="#">设置</a></li>
        </ul>
    </div>
    <div class="load-name"></div>
    </div>
  </nav>`
    $('#header').append(headerHtml)
    // 下拉菜单
    var flag = true;
    var time = 0;
    var hobb = false;

    function toggle() {
      console.log(321)
      flag = !flag;
      if (!flag) {
        $('.dropdown-menu').css({
          "display": 'block'
        })
        return
      }
      $('.dropdown-menu').css({
        "display": 'none'
      })
    }
    $('#header').on('click', '.btn-default', toggle)
    $('#header').on('click', '.dropdown-menu li a', function () {
      toggle()
      time !== 0?1:0;
      // 根据点击的内容加载对应的模块
      if ($(this).text() !== '登录' && $('.load-name').text() === '') {
        alert('请先进行登录')
      } else if ($(this).text() === '个人中心' && time === 0 && $('.load-name').text() !== '' ){
        time ++;
        hobb = false;

        $('.table-responsive').css('display','none')

        require(['left', 'personal'], function (left, personal) {
          left()
          personal()
          $('.main-content').css({
            "backgroundImage": 'url("./lib/images/2.jpg")',
            "backgroundSize": 'cover'
          })
        })
      } else if ($('.load-name').text() === '') {
        require(['loading'], function (loading) {
          loading()
          $('.form-horizontal').on('click', '.back', function () {
            $('.box').css('display', 'none')
          })
          $('.submit').click(function () {
            if ($('.username').val() === '' || $('.password').val() === '') {
              alert('请补全密码或者用户名')
            } else {
              $('.box').css('display', 'none');
              $('.load-name').text($('.username').val())
            }
          })
        })
      } 
      // if (!hobb) {
      //   $('#aside').on('click', '.hob', function () {
      //     require(['hobbies'], function (hob) {
      //       $('#head-portrait').css('display', 'none')
      //       hob()
      //       hobb = ! hobb;
      //     })
      //   })
      // }

    })
  }
});