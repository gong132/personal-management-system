define([
  'require',
  'jquery'
], function(require, $) {
  'use strict';
  return function(){
    let AsideHtml = `<ul class="nav nav-pills nav-stacked">
    <li role="presentation" class="active"><a href="#">个人中心</a></li>
    <li role="presentation" class="hob"><a href="#">兴趣爱好</a></li>
    <li role="presentation"><a href="#">留言管理</a></li>
  </ul>`
  $('#aside').append(AsideHtml)
  // 切换active
  // $('#aside').on('click','.nav li',function(){
  //   // console.log(this)
  //   // alert(123)
  //   $(this).siblings().removeClass('active')
  //   $(this).addClass('active')
  // })
  $('#aside').on('click','.nav li',function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
    console.log($(this))
    console.log($(this).text() === '个人中心')
    switch ($(this).text()){
      case '个人中心':
      require(['personal'],function(personal){
        $('.left-sec').html('')
        personal()
      });
      break;
      case '兴趣爱好':
      require(['hobbies'],function(hob){
        $('.left-sec').html('')
        hob()
      })
      break;
      default:console.log('default')
    }
  })
  }
});