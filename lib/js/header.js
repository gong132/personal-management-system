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
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Admin <span class="caret"></span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">个人中心</a></li>
          <li><a href="#">留言管理</a></li>
          <li><a href="#">设置</a></li>
        </ul>
    </div>
    </div>
  </nav>`
  //完成静态布局
    $('#header').append(headerHtml)
    $('.discription').css({
      "height": '100%',
      "fontSize": '30px',
      "display": 'inline-block',
      "lineHeight": '50px'
    })
    $('.btn-group').css({
      "float":'right',
      "width":'200px',
    })
    $('.dropdown-toggle').css({
      "marginTop":'15px'
    })
    // 下拉菜单
    var flag = true;
    var time = false;
    function toggle(){
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
      // 根据点击的内容加载对应的模块
      if($(this).text() === '个人中心' && !time){
        time = !time;
        require(['left'],function(left){
          left()
        })
      }
    })
  }
});