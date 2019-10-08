$(function () {
   (function () {
      //手机验证
      var phoneReg = /^1[3456789]\d{9}$/;
      //密码验证
      var pwReg = /^([0-9a-zA-Z]|(_|\W)){6,16}$/;
      var smsReg = '';
      var flag1 = false;
      var flag2 = false;
      var flag3 = false;
      var flag4 = false;
      var flag5 = false;
      return {
         init() {
            //初始化验证码
            $('.yzm').html(this.common().yzm(6));
            $('.yzm').css('color', this.common().color());
            //文本框字符长度限制
            $('.inp').eq(0).attr("maxlength", 6);
            $('.inp').eq(1).attr("maxlength", 11);
            $('.inp').eq(2).attr("maxlength", 6);
            $('.inp').eq(3).attr("maxlength", 16);
            $('.inp').eq(4).attr("maxlength", 16);
            for (var i = 0; i < 6; i++) {
               smsReg += this.common().getRandom(9);
            }
            this.event()
         },
         event() {
            //当前对象的this
            var _this = this;
            //验证码点击事件
            $('.yzm').on('click', function () {
               $(this).html(_this.common().yzm(6));
               $('.yzm').css('color', _this.common().color());
            })
            //短信获取验证码点击事件
            $('.smsReg').on('click', function () {

               if (!$('.inp').eq(1).val() != '' && !phoneReg.test($('.inp').eq(1).val())) {
                  var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">请输入有效的手机号</p>';
                  $('.newtxt').eq(1).append($yz);
                  return;
               } else {
                  flag2 = true;
               }

               if (phoneReg.test($('.inp').eq(1).val())) {
                  var _self = this;
                  var s = 60;
                  $(this).html('请在<span>' + s + '</span>S内输入验证码');
                  var timer = setInterval(function () {
                     s--;
                     if (s < 1) {
                        clearInterval(timer);
                        $(_self).html('超时请重新输入')
                     } else {
                        $(_self).children('span').text(s);
                     }

                     if (s == 57) {
                        $('.inp').eq(2).val(smsReg);
                     }
                  }, 1000)
               }

            })
            $('.smsReg').on('mouseenter', function () {
               $(this).css({
                  'text-decoration': 'underline'
               });
            })
            $('.smsReg').on('mouseleave', function () {
               $(this).css({
                  'text-decoration': 'none'
               })
            })
            //文本框获取焦点时
            $('input.inp').each(function (index, dom) {
               $(dom).on('focus', function () {
                  this.style.border = '1px solid skyblue';
                  if (index === 0) {
                     $('.newtxt').siblings().children('p').eq(0).remove();
                  } else if (index === 1) {
                     $('.newtxt').eq(1).children('p').remove();
                     var $p1 = '<p class="p1" style="font-size:12px;">请填写真实的手机号,并进行验证</p>';
                     $('.newtxt').eq(1).append($p1);
                  } else if (index === 2) {
                     $('.newtxt').eq(2).children('p').remove();
                     $('.newtxt').siblings().children('p.p1').remove();
                     var $p1 = '<p class="p1" style="font-size:12px;">请输入手机接收的验证码</p>';
                     $('.newtxt').eq(2).append($p1);
                  } else if (index === 3) {
                     $('.newtxt').eq(3).children('p').remove();
                     $('.newtxt').eq(3).children('.maxBox').remove();
                     var $p1 = '<p class="p1" style="font-size:12px;">6-16位字符，可使用字母，数字或符号组成</p>';
                     $('.newtxt').eq(3).append($p1);
                  } else if (index === 4) {
                     var $p1 = '<p class="p1" style="font-size:12px;">请再次输入登录密码，两次输入必须一致</p>';
                     $('.newtxt').eq(4).append($p1);
                  }
               })


               //文本框失去焦点时
               $(dom).on('blur', function () {
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
                  //手机验证
                  if (index === 1) {
                     if (this.value != '' && !phoneReg.test(this.value)) {
                        var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">请输入有效的手机号</p>';
                        $('.newtxt').eq(1).append($yz);
                     } else {
                        $('.newtxt').eq(1).children('p').remove();
                     }
                  }
                  if (index === 2) {
                     if ($(this).val() !== '') {
                        if ($('.inp').eq(1).val() === '') {
                           var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">请输入有效的手机号</p>';
                           $('.newtxt').eq(1).append($yz);
                           return;
                        } else {
                           $('.newtxt').eq(1).children('p').remove();
                        }

                        if ($(this).val() !== smsReg) {
                           $('.newtxt').eq(2).children('p').remove();
                           var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">请短信输入验证码</p>';
                           $('.newtxt').eq(2).append($yz);
                        } else {
                           flag3 = true;
                           $('.newtxt').eq(2).children('p').remove();
                        }

                        // $('.newtxt').eq(2).children('p').siblings().remove();
                     }
                  }
                  //密码验证
                  if (index === 3) {
                     //失去焦点后要显示安全强度
                     // if ($('.inp').eq(3).val() === $('.inp').eq(4).val()) {
                     //    $('.newtxt').eq(4).children('p').remove();
                     // } else {
                     //    var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">两次输入密码不一致，请重新输入</p>';
                     //    $('.newtxt').eq(4).append($yz);
                     // }
                     var $div = $('<div class="maxBox"><span>安全强度 :</span> <div class="intensity"><i class="color"></i><i></i><i></i></div><span>弱</span></div>');
                     $div.children().css('float', 'left');
                     $div.css({
                        float: 'left',
                        'line-height': '22px'
                     })
                     if (this.value != '' && pwReg.test(this.value) && !(this.value.length < 6)) {
                        flag4 = true;
                        $('.newtxt').eq(3).children('p').remove();
                        $(this).after($div);
                        $('.intensity').css({
                           width: 140,
                           height: 12,
                           border: '1px solid #9A9A9A',
                           display: 'inline-block',
                           'margin-top': '3px',
                           'margin-left': '3px',
                           'margin-right': '3px'
                        });
                        $('.intensity').children('i').css({
                           display: 'inline-block',
                           width: 40,
                           height: 8,
                           background: '#9A9A9A',
                           'margin-bottom': '6px',
                           'margin-left': '3px',
                           'margin-right': '3px'
                        })
                        $('.intensity').children('i').eq(0).siblings().removeClass();
                        //弱
                        if (this.value.match(/^[0-9]{6,16}$/)) {
                           $('.intensity').children('i').eq(1).addClass('color');
                           $('.color').eq(0).css('background', 'red');
                           return;
                        } else if (this.value.match(/^[a-zA-Z]{6,16}$/)) {
                           $('.intensity').children('i').eq(1).addClass('color');
                           $('.color').eq(0).css('background', 'red');
                           return;
                        } else if (this.value.match(/^[_|\W]{6,16}$/)) {
                           $('.intensity').children('i').eq(1).addClass('color');
                           $('.color').eq(0).css('background', 'red');
                           return;
                        }
                        //中
                        if (this.value.match(/^([0-9]|[a-zA-Z]){6,16}$/)) {
                           $('.intensity').children('i').eq(1).siblings().removeClass();
                           $('.intensity').children('i').eq(1).addClass('color');
                           $('.color').css('background', 'yellow');
                           $('.maxBox').children('span:nth-child(3)').text('中');
                           return;
                        } else if (this.value.match(/^([0-9]|(_|\W)){6,16}$/)) {
                           $('.intensity').children('i').eq(1).siblings().removeClass();
                           $('.intensity').children('i').eq(1).addClass('color');
                           $('.color').css('background', 'yellow');
                           $('.maxBox').children('span:nth-child(3)').text('中');
                           return;
                        } else if (this.value.match(/^([a-zA-Z]|(_|\W)){6,16}$/)) {
                           $('.intensity').children('i').eq(1).siblings().removeClass();
                           $('.intensity').children('i').eq(1).addClass('color');
                           $('.color').css('background', 'yellow');
                           $('.maxBox').children('span:nth-child(3)').text('中');
                           return;
                        }
                        //强
                        if (this.value.match(/^([0-9a-zA-Z]|(_|\W)){6,16}$/)) {
                           $('.intensity').children('i').eq(2).siblings().removeClass();
                           $('.intensity').children('i').eq(2).addClass('color');
                           $('.color').css('background', 'green');
                           $('.maxBox').children('span:nth-child(3)').text('强');
                           return;
                        }

                     } else {
                        var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">密码必须大于6位,请重新输入</p>';
                        $('.newtxt').eq(3).append($yz);
                        if (this.value === '') {
                           $('.newtxt').eq(3).children('p').remove();
                           $('.newtxt').eq(3).children('.maxBox').remove();
                        }
                     }

                  }

                  //验证密码是否正确
                  if (index === 4) {
                     if ($(this).val() !== '') {
                        if (this.value === $('.inp').eq(3).val()) {
                           flag5 = true;
                           $('.newtxt').eq(4).children('p').remove();
                        } else {
                           var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">两次输入密码不一致，请重新输入</p>';
                           $('.newtxt').eq(4).append($yz);
                        }
                     }
                  }

               })

            })

            //点击阅读条款
            $('.ckbtn').children().on('click', function () {
               if ($(this).prop('checked') || $(this).prop('checked') === undefined) {
                  $('#zhucebtn').css('background-color', '#b52024');
                  $('.ckbtn').children('#ckbtn').prop('checked', 'true');
               } else {
                  $('#zhucebtn').css('background-color', '#9A9A9A');
               }
            })
            //点击立即注册提交事件
            $('#zhucebtn').on('click', function (event) {
               if ($('#ckbtn').prop('checked') === true) {
                  //图片验证码
                  if ($('.inp').eq(0).val().toLowerCase() === $('.yzm').html().toLowerCase()) {
                     flag1 = true;
                  } else {
                     if ($('.inp').eq(0).val() !== '') {
                        var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">验证码错误，请重新输入</p>';
                        $('.newtxt').eq(0).append($yz);
                     }
                  }
                  //填写有效手机号
                  if ($('.inp').eq(1).val() === '') {
                     var $p1 = '<p class="p1" style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">请输入有效的手机号</p>';
                     $('.newtxt').eq(1).append($p1);
                     //如果短信验证文本框为空的提示
                  } else if ($('.inp').eq(2).val() === '') {
                     var $p1 = '<p class="p1" style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">请输入验证码</p>';
                     $('.newtxt').eq(2).append($p1);
                     //如果短信验证文本框不为空的提示
                  } else if ($('.inp').eq(2).val() !== '') {
                     if ($('.inp').eq(2).val() !== smsReg) {
                        var $p1 = '<p class="p1" style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">请短信输入验证码</p>';
                        $('.newtxt').eq(2).append($p1);
                     }
                  }
                  //密码不能为空
                  if ($('.inp').eq(1).val().match(phoneReg) && $('.inp').eq(2).val() !== '') {
                     if ($('.inp').eq(3).val() === '') {
                        var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">密码不能为空</p>';
                        $('.newtxt').eq(3).append($yz);
                     }
                  }
                  //确然密码是否相同
                  if ($('.inp').eq(3).val() === $('.inp').eq(4).val()) {
                     $('.newtxt').eq(4).children('p').remove();
                  } else {
                     var $yz = '<p style="color: #a10000;border:1px #ffd5d5 solid;background:#f9f9f9;position:absolute;padding:3px 5px;">两次输入密码不一致，请重新输入</p>';
                     $('.newtxt').eq(4).append($yz);
                  }
                  if ((flag1 && flag2 && flag3 && flag4 && flag5) === true) {
                     var u = $('[name=un]').val();
                     var p = $('[name=pw]').val();
                     $.ajax({
                        url: '../php/register.php',
                        type: 'post',
                        data:{un:u,pw:p},
                        success: function (res) {
                           console.log(res)
                        }
                     })
                  }

               } else {
                  event.preventDefault();
               }
            })
            $('#zhucebtn').on('mouseenter', function () {
               $(this).css({
                  'text-decoration': 'underline'
               });
            })
            $('#zhucebtn').on('mouseleave', function () {
               $(this).css({
                  'text-decoration': 'none'
               })
            })
         },
         common() {
            return {
               //随机数
               getRandom(max, min) {
                  min = min || 0;
                  if (max < min) {
                     min = max + 0 * (max = min);
                  } else {
                     max = max;
                     min = min;
                  }
                  return min + Math.floor(Math.random() * (max - min + 1));
               },
               //随机颜色
               color() {
                  var color = '#';
                  for (var i = 0; i < 6; i++) {
                     color += this.getRandom(15).toString(16);
                  }
                  return color;
               },
               //验证码
               yzm(num) {
                  var str = '';
                  //数字48-57
                  //小写字母65-90
                  //大写字母97-122
                  for (var i = 0; i < num; i++) {
                     var random = this.getRandom(48, 122);
                     if ((random >= 48 && random <= 57) || (random >= 65 && random <= 90) || (random >= 97 && random <= 122)) {
                        str += String.fromCharCode(random);
                     } else {
                        i--;
                     }
                  }
                  return str;
               }
            }
         }
      }
   })().init()
})