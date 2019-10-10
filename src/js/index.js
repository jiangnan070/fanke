
    //轮播图
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项

      loop: true, // 循环模式选项
      // 如果需要前进后退按钮
      //控制左右按钮

      navigation: {
          nextEl: '.swiper-button-next', //对应左边按钮类名
          prevEl: '.swiper-button-prev', //对应右边按钮类名
      },
      //自动轮播
      autoplay: {
          delay: 1800, //控制时间
          disableOnInteraction: true,
          disableOnInteraction: false,
      },
      effect: 'fade', //控制翻滚动效
      pagination: {
          el: '.swiper-pagination', //点标记
          dynamicBullets: true,
          dynamicMainBullets: 2
      },
  });

  //搜索框文本提示

  var inp = document.querySelector('input');
  var ul = document.querySelector('ul');
  var MAX = 5;
  inp.oninput = inp.onpropertychange = function () {
      var word = this.value; 
      var script = document.createElement('script');
      script.src = "http://page.vanclimg.com/autocompletehandler.ashx?callback=jqautocompletecallback&k=" + word +
          "&limit=13";
      console.log(this.value);
      if (this.value == "") {
          ul.style.display = "none";
      }

      window.jqautocompletecallback = function (data) {
          console.log(data)
          console.log(data[0].name);
          var list = data;
          var str = "";
          for (var i = 0; i < (list.length > MAX ? MAX : list.length); i++) {
              str += "<li>" + list[i].name +"</li>";
              ul.style.display = "block"
          };

          ul.innerHTML = str;


      }
      document.body.appendChild(script);
  }

  ul.onclick = function (e) {
      var target = e.target;
      if (target.nodeName.toLowerCase() == "li") {
          console.log(target.innerHTML);

          window.location.href = "http://s.vancl.com/search?k=" + target.innerHTML + "&orig=3"

      }
  }

  $('img').on('click',function(){
   window.location.href="./xiangqingye.html";
 })
 $('a').on('click',function(){
   window.location.href="./xiangqingye.html";
 })


  //回到顶部功能
  $(".back-top span").click(function () {
      var speed=200;
      $('body,html').animate({ scrollTop: 0 }, speed);
      return false;
});


//导航栏下拉
// var nav1 = document.getElementsByClassName("nav-box");


// for(var a=0;a<nav1.length;a++){


// nav1[a].onmouseenter=function fn(){
//     // this.getAttribute('index')
//     var nav2 = document.getElementsByClassName("xiala"+this.getAttribute('index'));


  
//      nav2[0].style.display='block';
  

// }
// nav1[a].onmouseleave=function fn(){
//     // this.getAttribute('index')
//     var nav2 = document.getElementsByClassName("xiala"+this.getAttribute('index'))

  
//      nav2[0].style.display='none';
  

// }
// }
// 
// <!-- 下拉菜单 -->
// 入口函数
  $(document).ready(function() {
     // 第一个  
  $(function(){
     $(".nav-box1").mouseenter(function(){ 
        //获取数据    
        $.ajax({
          url:'http://10.36.144.28/fanke/src/data.json',
          success:function(res){
         var aAttr=$('.xiala0 .nav-a1');
              for(var i=0;i<aAttr.length;i++){
          aAttr[i].innerHTML=res[0].shirt[i]
              }
          }
      })

        $(".xiala0").stop(true,true).slideDown();
     }) 
     $(".nav-box1").mouseleave(function(){
        $(".xiala0").stop(true,true).slideUp();
     }) 
  });
// 第二个 
  $(function(){
      $(".nav-box2").mouseenter(function(){     
       $.ajax({
          url:'http://10.36.144.28/fanke/src/data.json',
          success:function(res){
             
         var aAttr=$('.xiala1 .nav-a1');
              for(var i=0;i<aAttr.length;i++){
                // console.log(res[1].fleece[i])
          aAttr[i].innerHTML=res[1].fleece[i]
              }
          }
      })
         $(".xiala1").stop(true,true).slideDown();
      }) 
      $(".nav-box2").mouseleave(function(){
         $(".xiala1").stop(true,true).slideUp();
      }) 
   });
//第三个
   $(function(){
      $(".nav-box3").mouseenter(function(){  
       $.ajax({
          url:'http://10.36.144.28/fanke/src/data.json',
          success:function(res){
         var aAttr=$('.xiala2 .nav-a1');
              for(var i=0;i<aAttr.length;i++){
          aAttr[i].innerHTML=res[2].coat[i]
              }
          }
      })   
         $(".xiala2").stop(true,true).slideDown();
      }) 
      $(".nav-box3").mouseleave(function(){
         $(".xiala2").stop(true,true).slideUp();
      }) 
   });
//第四个
   $(function(){
      $(".nav-box4").mouseenter(function(){   
       $.ajax({
          url:'http://10.36.144.28/fanke/src/data.json',
          success:function(res){
         var aAttr=$('.xiala3 .nav-a1');
              for(var i=0;i<aAttr.length;i++){
          aAttr[i].innerHTML=res[3].Tshirt[i]
              }
          }
      })  
         $(".xiala3").stop(true,true).slideDown();
      }) 
      $(".nav-box4").mouseleave(function(){
         $(".xiala3").stop(true,true).slideUp();
      }) 
   });
//第五个
   $(function(){
      $(".nav-box5").mouseenter(function(){ 
       $.ajax({
          url:'http://10.36.144.28/fanke/src/data.json',
          success:function(res){
         var aAttr=$('.xiala4 .nav-a1');
              for(var i=0;i<aAttr.length;i++){
          aAttr[i].innerHTML=res[4].knit[i]
              }
          }
      })    
         $(".xiala4").stop(true,true).slideDown();
      }) 
      $(".nav-box5").mouseleave(function(){
         $(".xiala4").stop(true,true).slideUp();
      }) 
   });
//第六个
   $(function(){
      $(".nav-box6").mouseenter(function(){ 
       $.ajax({
          url:'http://10.36.144.28/fanke/src/data.json',
          success:function(res){
         var aAttr=$('.xiala5 .nav-a1');
              for(var i=0;i<aAttr.length;i++){
          aAttr[i].innerHTML=res[5].trousers[i]
              }
          }
      })    
         $(".xiala5").stop(true,true).slideDown();
      }) 
      $(".nav-box6").mouseleave(function(){
         $(".xiala5").stop(true,true).slideUp();
      }) 
   });
//第七个
   $(function(){
      $(".nav-box7").mouseenter(function(){  
       $.ajax({
          url:'http://10.36.144.28/fanke/src/data.json',
          success:function(res){
         var aAttr=$('.xiala6 .nav-a1');
              for(var i=0;i<aAttr.length;i++){
          aAttr[i].innerHTML=res[6].shoes[i]
              }
          }
      })   
         $(".xiala6").stop(true,true).slideDown();
      }) 
      $(".nav-box7").mouseleave(function(){
         $(".xiala6").stop(true,true).slideUp();
      }) 
   });
//第八个
   $(function(){
      $(".nav-box8").mouseenter(function(){  
       $.ajax({
          url:'http://10.36.144.28/fanke/src/data.json',
          success:function(res){
         var aAttr=$('.xiala7 .nav-a1');
              for(var i=0;i<aAttr.length;i++){
          aAttr[i].innerHTML=res[7].household[i]
              }
          }
      })   
         $(".xiala7").stop(true,true).slideDown();
      }) 
      $(".nav-box8").mouseleave(function(){
         $(".xiala7").stop(true,true).slideUp();
      }) 
   });
//不加
   $(function(){
      $(".nav-box9").mouseenter(function(){     
         $(".xiala8").stop(true,true).slideDown();
      }) 
      $(".nav-box9").mouseleave(function(){
         $(".xiala8").stop(true,true).slideUp();
      }) 
   });
});

var a = 12;var b = 32;var c = 60;setInterval(function(){
  a = a-1},3600000);setInterval(function(){
  b = b-1},60000);
setInterval(function(){
  if(c>0){
      c = c-1}else{
      c=60-1}
  $('.span2').html(a)
  $('.span3').html(b)
  $('.span4').html(c)},1000);

 