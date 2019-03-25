requirejs.config({
  baseUrl:'lib',
  paths:{
    jquery:'js/jquery',
    header:'js/header',
    left:'js/leftAside',
    personal:'js/personal-info',
    loading:'js/loading',
    hobbies:'js/hobbies'
  }
})

require(['jquery','header'],function($,header){
  header()
})