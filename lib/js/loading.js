define([
  'require',
  'jquery'
], function(require, $) {
  'use strict';
  return function(){
    let loadingHtml = `<div class="box">
    <form action="" class="form-horizontal">
    <span class="back">X</span>
    <label for="">Username</label>
    <input type="text" placeholder="Username" class="username">
    <label for="">Password</label>
    <input type="password" placeholder="Password" class="password">
    <input type="button" class="submit" value="Sign in">
    </form></div>`
  $('body').append(loadingHtml)
  }
});