requirejs.config({
  baseUrl:'lib',
  paths:{
    jquery:'js/jquery',
    header:'js/header',
    left:'js/leftAside'
  }
})

require(['jquery','header'],function($,header){
  header()
})