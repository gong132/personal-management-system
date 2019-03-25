define([
  'require',
  'jquery'
], function(require, $) {
  'use strict';
  return function(){
    let HobbiesHtml =`<div class="table-responsive">
                        <table class="table">
                          <tr>
                            <th>文史</th>
                            <td>史料</td>
                            <td>散文</td>
                          </tr>
                          <tr>
                            <td>艺体</td>
                            <td>足球</td>
                            <td>电影</td>
                          </tr>
                        </table>
                      </div>`
  $('.left-sec').append(HobbiesHtml)
  }
});