"use strict";window.onload=function(){var d=document.getElementsByClassName("ywhboxwp")[0],r=document.getElementsByClassName("ywhboxwp1")[0],w=document.getElementsByClassName("ywhboxwp12")[0],a=document.getElementsByClassName("small")[0],e=document.getElementsByClassName("big")[0],u=document.getElementsByClassName("mask")[0],p=document.getElementsByClassName("bigImg")[0];a.onmouseenter=function(){u.style.display="block",e.style.display="block"},a.onmouseleave=function(){u.style.display="none",e.style.display="none"},a.onmousemove=function(e){var o=(e=e||event).clientX+scroll().left,n=e.clientY+scroll().top,s=o-d.offsetLeft-r.offsetLeft-a.offsetLeft-w.offsetLeft-u.offsetWidth/2,t=n-d.offsetTop-r.offsetTop-a.offsetTop-w.offsetTop-u.offsetHeight/2,f=w.offsetWidth-u.offsetWidth,c=w.offsetHeight-u.offsetHeight;s=s<0?0:f<s?f:s,t=t<0?0:c<t?c:t,u.style.left=s+"px",u.style.top=t+"px",u.style.backgroundPosition=-s+"px-"+t+"px";var i=s*p.offsetWidth/a.offsetWidth,l=t*p.offsetHeight/a.offsetHeight;p.style.left=-i+"px",p.style.top=-l+"px"};var o=document.getElementsByClassName("wpa")[0],n=document.getElementsByClassName("wpb")[0],s=document.getElementsByClassName("wpc")[0],t=document.getElementsByClassName("wpd")[0],f=document.getElementsByClassName("wpe")[0];o.onmouseenter=function(){a.firstChild.src=o.firstChild.src,e.firstChild.src=o.firstChild.src},n.onmouseenter=function(){a.firstChild.src=n.firstChild.src,e.firstChild.src=n.firstChild.src},s.onmouseenter=function(){a.firstChild.src=s.firstChild.src,e.firstChild.src=s.firstChild.src},t.onmouseenter=function(){a.firstChild.src=t.firstChild.src,e.firstChild.src=t.firstChild.src},f.onmouseenter=function(){a.firstChild.src=f.firstChild.src,e.firstChild.src=f.firstChild.src},$(function(){$(".ywhboxwpys1").click(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".ywhboxwpxz1").html($(".ywhboxwpys1").html()),$(".ywhboxwpys1").css("background","blue"),$(".ywhboxwpys2").css("background","#ffffff"),$(".ywhboxwpys3").css("background","#ffffff"),$(".ywhboxwpys4").css("background","#ffffff")}),$(".ywhboxwpys2").click(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".ywhboxwpxz1").html($(".ywhboxwpys2").html()),$(".ywhboxwpys2").css("background","pink"),$(".ywhboxwpys1").css("background","#ffffff"),$(".ywhboxwpys3").css("background","#ffffff"),$(".ywhboxwpys4").css("background","#ffffff")}),$(".ywhboxwpys3").click(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".ywhboxwpxz1").html($(".ywhboxwpys3").html()),$(".ywhboxwpys3").css("background","green"),$(".ywhboxwpys2").css("background","#ffffff"),$(".ywhboxwpys1").css("background","#ffffff"),$(".ywhboxwpys4").css("background","#ffffff")}),$(".ywhboxwpys4").click(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".ywhboxwpxz1").html($(".ywhboxwpys4").html()),$(".ywhboxwpys4").css("background","red"),$(".ywhboxwpys2").css("background","#ffffff"),$(".ywhboxwpys3").css("background","#ffffff"),$(".ywhboxwpys1").css("background","#ffffff")}),$(".ywhboxwpys1").dblclick(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".ywhboxwpys1").css("background","#ffffff")}),$(".ywhboxwpys2").dblclick(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".ywhboxwpys2").css("background","#ffffff")}),$(".ywhboxwpys3").dblclick(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".ywhboxwpys3").css("background","#ffffff")}),$(".ywhboxwpys4").dblclick(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".ywhboxwpys4").css("background","#ffffff")}),$(".wpa1").click(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".wpa1").css("background","red"),$(".wpa2").css("background","#ffffff"),$(".wpa3").css("background","#ffffff"),$(".wpa4").css("background","#ffffff"),$(".wpa5").css("background","#ffffff")}),$(".wpa2").click(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".wpa2").css("background","red"),$(".wpa1").css("background","#ffffff"),$(".wpa3").css("background","#ffffff"),$(".wpa4").css("background","#ffffff"),$(".wpa5").css("background","#ffffff")}),$(".wpa3").click(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".wpa3").css("background","red"),$(".wpa2").css("background","#ffffff"),$(".wpa1").css("background","#ffffff"),$(".wpa4").css("background","#ffffff"),$(".wpa5").css("background","#ffffff")}),$(".wpa4").click(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".wpa4").css("background","red"),$(".wpa2").css("background","#ffffff"),$(".wpa3").css("background","#ffffff"),$(".wpa1").css("background","#ffffff"),$(".wpa5").css("background","#ffffff")}),$(".wpa5").click(function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),$(".wpa5").css("background","red"),$(".wpa2").css("background","#ffffff"),$(".wpa3").css("background","#ffffff"),$(".wpa4").css("background","#ffffff"),$(".wpa1").css("background","#ffffff")}),$(".ywhboxwpsl1").click(function(){$(".ywhboxwpsl1>ul>li").css("display","block")}),$(".ywhboxwpsl1>ul>li").click(function(){return $(".span1").html($(this).html()),$(".ywhboxwpsl1>ul>li").css("display","none"),!1}),$("#quesBtn").click(function(){$("#Askquestion").css("display","block")}),$("#tiwenBtn").click(function(){for(var e=document.getElementsByName("radio"),o=0;o<e.length;o++){if(e[o].checked){var n=$("#txtArae").val(),s=$("<div class='qeusL_con'><div class='qeusL_L'><div class='qeusL_M'><h4><span class='qeusH_Q'>Q</span><span>thir***：<span>"+n+"</span></span></h4><h5 style='font-size: 12px;'><span>"+f()+"</span><a href='#'>我要回复<span>(0)</span></a></h5></div></div> </div>"),t=$("<div class='qeusLPage'><span>1</span></div>");return void(""==n?alert("请填写内容"):($(".quesList").append(s),$(".quesList").append(t),$("#qtype").css("display","none")))}$("#qtype").css("display","block")}});var e=$(".qeusL_con").length;console.log(e),$("qeusNum").html("qeusNum");var o=new Date;o.getYear(),o.getFullYear(),o.getMonth(),o.getDate(),o.getDay(),o.getTime(),o.getHours(),o.getMinutes(),o.getSeconds(),o.getMilliseconds(),o.toLocaleDateString();o.toLocaleTimeString();function f(){var e=new Date,o=e.getFullYear(),n=e.getMonth()+1,s=e.getDate(),t=o+"-";return n<10&&(t+="0"),t+=n+"-",s<10&&(t+="0"),t+=s+" "}o.toLocaleString()}),window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;document.getElementsByClassName("fanke-huadong")[0].style.display=200<e?"block":"none"},$(document).ready(function(){$(function(){$(".ywhbox31").mouseenter(function(){$(".ywhbox31").css("color","red")}),$(".ywhbox31").mouseleave(function(){$(".ywhbox31").css("color","#727171")})}),$(function(){$(".ywhbox310").mouseenter(function(){$(".ywhbox310").css("color","red")}),$(".ywhbox310").mouseleave(function(){$(".ywhbox310").css("color","#727171")})}),$(function(){$(".ywhbox32").mouseenter(function(){$(".drop_down").stop(!0,!0).slideDown(),$(".drop_down").css("border-top","5px solid orange")}),$(".ywhbox32").mouseleave(function(){$(".drop_down").stop(!0,!0).slideUp()})}),$(function(){$(".ywhbox33").mouseenter(function(){$(".drop_down1").stop(!0,!0).slideDown(),$(".drop_down1").css("border-top","5px solid orange")}),$(".ywhbox33").mouseleave(function(){$(".drop_down1").stop(!0,!0).slideUp()})}),$(function(){$(".ywhbox34").mouseenter(function(){$(".drop_down2").stop(!0,!0).slideDown(),$(".drop_down2").css("border-top","5px solid orange")}),$(".ywhbox34").mouseleave(function(){$(".drop_down2").stop(!0,!0).slideUp()})}),$(function(){$(".ywhbox35").mouseenter(function(){$(".drop_down3").stop(!0,!0).slideDown(),$(".drop_down3").css("border-top","5px solid orange")}),$(".ywhbox35").mouseleave(function(){$(".drop_down3").stop(!0,!0).slideUp()})}),$(function(){$(".ywhbox36").mouseenter(function(){$(".drop_down4").stop(!0,!0).slideDown(),$(".drop_down4").css("border-top","5px solid orange")}),$(".ywhbox36").mouseleave(function(){$(".drop_down4").stop(!0,!0).slideUp()})}),$(function(){$(".ywhbox37").mouseenter(function(){$(".drop_down5").stop(!0,!0).slideDown(),$(".drop_down5").css("border-top","5px solid orange")}),$(".ywhbox37").mouseleave(function(){$(".drop_down5").stop(!0,!0).slideUp()})}),$(function(){$(".ywhbox38").mouseenter(function(){$(".drop_down6").stop(!0,!0).slideDown(),$(".drop_down6").css("border-top","5px solid orange")}),$(".ywhbox38").mouseleave(function(){$(".drop_down6").stop(!0,!0).slideUp()})}),$(function(){$(".ywhbox39").mouseenter(function(){$(".drop_down7").stop(!0,!0).slideDown(),$(".drop_down7").css("border-top","5px solid orange")}),$(".ywhbox39").mouseleave(function(){$(".drop_down7").stop(!0,!0).slideUp()})})});var c={getStorage:function(){return JSON.parse(localStorage.getItem("list")||"[]")},setStorage:function(e){localStorage.setItem("list",JSON.stringify(e))},addCartEvent:function(){document.getElementsByClassName("b2")[0].onclick=function(){var e=document.getElementsByClassName("ywhbox5")[0],o=document.getElementsByClassName("wpa")[0],n=document.getElementsByClassName("ywhboxwp131")[0],s=document.getElementsByClassName("wpa1")[0],t=document.getElementsByClassName("ywhboxwpsl1")[0],f={id:n.children[1].attributes.type.value,img:o.children[0].src,name:e.innerHTML,price:n.children[1].innerHTML,size:s.innerHTML,num:t.children[0].innerHTML};console.log(f),c.addProduct(f)}},addProduct:function(e){for(var o=c.getStorage(),n=0;n<o.length;n++)if(o[n].id==e.id)return o[n].num=o[n].num+1,void c.setStorage(o);e.num=1,o.push(e),c.setStorage(o)}};c.addCartEvent()};