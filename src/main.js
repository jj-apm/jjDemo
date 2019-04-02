//这是项目的js入口文件 'jquery'
import $ from 'jquery'
$(function(){
    $('li:odd').css('backgroundColor','green')
    $('li:even').css('backgroundColor','yellow')
})