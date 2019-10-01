$(function () {
   //随机数
   function getRandom(max, min) {
      min = min || 0;
      if (max < min) {
         min = max + 0 * (max = min);
      } else {
         max = max;
         min = min;
      }
      return min + Math.floor(Math.random() * (max - min + 1));
   }
   //随机颜色
   function color(){
      var color = '#';
      for(var i=0;i<6;i++){
         color+=getRandom(15).toString(16);
      }
     return color;
   }
   //验证码
   function yzm(num) {
      var str = '';
      //数字48-57
      //小写字母65-90
      //大写字母97-122
      for (var i = 0; i < num; i++) {
         var random = getRandom(48, 122);
         if ((random >= 48 && random <= 57) || (random >= 65 && random <= 90) || (random >= 97 && random <= 122)) {
            str += String.fromCharCode(random);
         } else {
            i--;
         }
      }
      return str;
   }
   $('.yzm').html(yzm(6));
   $('.yzm').css('color', color())
   $('.yzm').on('click',function(){
      $(this).html(yzm(6));
      $('.yzm').css('color', color());
   })
   //给文本框添加了index属性
   for (var i = 0; i < ($('.inp').size()); i++) {
      var $inp = $('.inp');
      $inp.get(i).index = i;
   }
   //验证
   var phoneReg = /^1[3456789]\d{9}$/;
   //文本框获取焦点时   
   $('.center-right').on('focus', '.inp', function () {
      index = this.index;
      this.style.border = '1px solid skyblue';
      if (index === 0) {
         // var $yz = '<p>请输入图片验证码</p>'
         // $('.newtxt').eq(0).append($yz);
      } else if (index === 1) {
         $('.newtxt').eq(1).children('p').remove();
         var $p1 = '<p class="p1" style="font-size:12px;">请填写真实的手机号,并进行验证</p>';
         $('.newtxt').eq(1).append($p1);
      } else if (index === 2) {
         var $p1 = '<p class="p1" style="font-size:12px;">请输入手机接收的验证码</p>';
         $('.newtxt').eq(2).append($p1);
      } else if (index === 3) {
         var $p1 = '<p class="p1" style="font-size:12px;">6-16位字符，可使用字母，数字或符号组成</p>';
         $('.newtxt').eq(3).append($p1);
      } else if (index === 4) {
         var $p1 = '<p class="p1" style="font-size:12px;">请再次输入登录密码，两次输入必须一致</p>';
         $('.newtxt').eq(4).append($p1);
      }
   })

   //失去焦点时
   $('.center-right').on('blur', '.inp', function () {
      index = this.index;
      this.style.border = '1px solid #ccc';
      if (index === 0) {
         $('.newtxt').siblings().children('p').eq(0).remove();
         var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">请输入图片验证码</p>';
         $('.newtxt').eq(0).append($yz);
         if (this.value !== '') {
            $('.newtxt').siblings().children('p').eq(0).remove();
         }
      } else {
         $('.newtxt').siblings().children('p.p1').remove();
      }
      //表单验证
      if(index === 1){
         if(this.value != '' && !phoneReg.test(this.value)){
            var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">请输入有效的手机号</p>';
            $('.newtxt').eq(1).append($yz);
         }else{
            $('.newtxt').eq(1).children('p').remove();
         }
      }
      if(index === 4){

      }
   })

   //点击阅读条款
   $('.ckbtn').children().on('click',function(){
     if($(this).prop('checked') || $(this).prop('checked') === undefined){
       $('#zhucebtn').css('background-color','#b52024');
       $('.ckbtn').children('#ckbtn').prop('checked','true');
     }else{
       $('#zhucebtn').css('background-color','#9A9A9A');  
     }
   })
})