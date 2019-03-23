define([
  'require',
  'jquery'
], function(require, $) {
  'use strict';
  return function(){
    let AsideHtml = `<ul class="nav nav-pills nav-stacked">
    <li role="presentation" class="active"><a href="#">个人中心</a></li>
    <li role="presentation"><a href="#">兴趣爱好</a></li>
    <li role="presentation"><a href="#">留言管理</a></li>
  </ul>`
  $('#aside').append(AsideHtml)
  $('#aside').css({
    "marginTop":'70px',
    "width":'200px',
    "textAlign":'center',
    "display":'inline-block'
  })
  $('.container').css({
    "width":'100%',
    "clear":'both'
  })
  $('.mainBody').css({
    "display":'inline-block'
  })
  // 切换active
  $('#aside').on('click','.nav li',function(){
    // console.log(this)
    // alert(123)
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })
  }
});