$(function () {
   (function () {
      //提示框显示
      var textBlock = JSON.parse('{"display":"block","color":"green"}');
      var textNone = JSON.parse('{"display":"none"}');
      //正则
      var reg = /^([0-9a-zA-Z]|(_|\W)){6,16}$/;
      var unFlag = false;
      var pwFlag = false;
      var yzFlag = false;
      var qrFlag = false;
      var dw = false;
      var unFlag1 = false;
      var pwFlag1 = false;
      return {
         //初始入口
         init() {
            //随机验证码
            $('.yzmbox').html(this.common().yzm(6));
            $('.yzmbox').css('color', this.common().color())
            document.onselectstart = new Function("return false");
            if (window.history && window.history.pushState) {
               $(window).on('popstate', function () {
                  window.history.pushState('forward', null, '#');
                  window.history.forward(1);
                  //alert("不可回退");  
                  location.replace(document.referrer);//刷新
               });
            }
            window.history.pushState('forward', null, '#'); //在IE中必须得有这两行  
            window.history.forward(1);
            $('[name=register]').eq(1).prop('checked', true);
            $('[name=register]').eq(0).prop('checked', false);
            this.event()
         },
         //事件处理
         event() {
            var _this = this;
            //验证码点击事件
            $('.yzmbtn').on('click', function () {
               $('.yzmbox').html(_this.common().yzm(6));
               $('.yzmbox').css('color', _this.common().color());
               return false;
            })
            //切换页
            $('[name=register]').each(function (index, dom) {
               $(dom).on('change', function () {
                  //有凡客账号
                  if (index === 0) {
                     dw = true;
                     $('[name=register]').eq(0).prop('checked', true);
                     $('[name=register]').eq(1).prop('checked', false);
                     $('.registerId').eq(1).hide()
                     $('.registerId').eq(0).show();
                     $('.submitBox').children('span:nth-child(2)').remove();
                     $('.submitBox').children('span:nth-child(1)').html('登陆');
                     return;
                  }
                  //没有凡客账号
                  if (index === 1) {
                     $('.yzmbox').html(_this.common().yzm(6));
                     $('.yzmbox').css('color', _this.common().color());
                     $('[name=register]').eq(1).prop('checked', true);
                     $('[name=register]').eq(0).prop('checked', false);
                     $('.registerId').eq(0).hide();
                     $('.registerId').eq(1).show();
                     var span = $('<span style="cursor:pointer;">不关联，直接购物</span>');
                     $('.submitBox').append(span)
                     $('.submitBox').children('span:nth-child(1)').html('确定');
                     return;
                  }
               })
            })
            //已有账号
            $('.loignReg').each(function (index, dom) {
               //获取焦点
               $(dom).on('focus', function () {
                  //用户名
                  if (index === 0) {
                     $('p.errorVerb').eq(0).css(textBlock);
                     $('p.errorVerb').eq(0).text('6-16位字符，字母，数字和符号组成');
                  }
                  //密码
                  if (index === 1) {
                     $('p.errorVerb').eq(1).css(textBlock);
                     $('p.errorVerb').eq(1).text('6-16位字符，字母，数字和符号组成');
                  }
               })

               //失去焦点
               $(dom).on('blur', function () {
                  //用户名
                  if (index === 0) {
                     if (reg.test(this.value) === true) {
                        unFlag1 = true;
                        console.log(10)
                        $('p.errorVerb').eq(0).css(textNone);
                     } else {

                        $('p.errorVerb').eq(0).text('用户名必须是6-16位，数字，大小字母，和符号组成');
                        $('p.errorVerb').eq(0).css({ display: 'block', color: 'red' });
                     }
                  }
                  //密码
                  if (index === 1) {
                     if (reg.test(this.value) === true) {
                        pwFlag1 = true;
                        $('p.errorVerb').eq(1).css(textNone);
                     } else {
                        $('p.errorVerb').eq(1).text('用户名必须是6-16位，数字，大小字母，和符号组成');
                        $('p.errorVerb').eq(1).css({ display: 'block', color: 'red' });
                     }
                  }
               })
            })

            //没有账号先注册
            if ($('[name=register]').eq(1).prop('checked') === true) {
               $('.inpReg').each(function (index, dom) {
                  //获取焦点事件
                  $(dom).on('focus', function () {
                     //用户名
                     if (index === 0) {
                        $('p.errorHint').eq(0).css(textBlock);
                        $('p.errorHint').eq(0).text('6-16位字符，字母，数字和符号组成');
                     }
                     //密码
                     if (index === 1) {
                        $('p.errorHint').eq(1).css(textBlock);
                        $('p.errorHint').eq(1).text('6-16位字符，字母，数字和符号组成');
                     }
                     //确认密码
                     if (index === 2) {
                        $('p.errorHint').eq(2).css(textBlock);
                        $('p.errorHint').eq(2).text('确认密码一致');
                     }
                     //验证码
                     if (index === 3) {
                        $('p.errorHint').eq(3).css(textBlock);
                        $('p.errorHint').eq(3).text('输入正确验证码');
                     }
                  })

                  //失去焦点事件
                  $(dom).on('blur', function () {
                     //用户名
                     if (index === 0) {
                        if (reg.test(this.value) === true) {
                           unFlag = true;
                           $('p.errorHint').eq(0).css(textNone);
                        } else {

                           $('p.errorHint').eq(0).text('用户名必须是6-16位，数字，大小字母，和符号组成');
                           $('p.errorHint').eq(0).css({ display: 'block', color: 'red' });
                        }
                     }
                     //密码
                     if (index === 1) {
                        if (reg.test(this.value) === true) {
                           pwFlag = true;
                           $('p.errorHint').eq(1).css(textNone);
                        } else {
                           $('p.errorHint').eq(1).text('用户名必须是6-16位，数字，大小字母，和符号组成');
                           $('p.errorHint').eq(1).css({ display: 'block', color: 'red' });
                        }
                     }
                     //确认密码
                     if (index === 2) {
                        if ($('.inpReg').eq(1).val() === $('.inpReg').eq(2).val() && this.value !== '') {
                           qrFlag = true;
                           $('p.errorHint').eq(2).css(textNone);
                        } else {
                           $('p.errorHint').eq(2).text('密码不一致，请重新输入');
                           $('p.errorHint').eq(2).css({ display: 'block', color: 'red' });
                        }
                     }
                     //验证码
                     if (index === 3) {
                        if ($('.inpReg').eq(3).val().toLowerCase() === $('.yzmbox').text().toLowerCase()) {
                           yzFlag = true;
                           $('p.errorHint').eq(3).css(textNone);
                        } else {
                           $('p.errorHint').eq(3).text('验证码错误');
                           $('p.errorHint').eq(3).css({ display: 'block', color: 'red' });
                        }
                     }

                  })
               })

               //提交事件
               $('.fromSubmit').on('click', function (e) {
                  var un1 = $('.unlogin').val();
                  var pw1 = $('.pwlogin').val();
                  var un = $('.unreg').val();
                  var pw = $('.pwreg').val();
                  if ((unFlag1 && pwFlag1) === true) {
                     console.log(1)
                     $.ajax({
                        url: 'http://10.36.144.236/fanke/src/php/login.php',
                        type: 'POST',
                        dataType: "JSON",
                        data: { un1: un1, pw1: pw1 },
                        success: function (res) {
                           if (res.code === 0) {
                              alert('登录成功')
                              location.href = 'http://10.36.144.236/fanke/src/index.html';
                           } else if (res.code === 1) {
                              alert('输入有误，请重新输入')
                           }
                        }
                     })
                     return;
                  }  else {
                     $('.loignReg').each(function (index, dom) {
                        if (index === 0) {
                           if (this.value === '') {
                              $('p.errorVerb').eq(0).text('用户名不能为空');
                              $('p.errorVerb').eq(0).css({ display: 'block', color: 'red' });
                           }
                        } else if (index === 1) {
                           if (this.value === '') {
                              $('p.errorVerb').eq(1).text('密码不能为空');
                              $('p.errorVerb').eq(1).css({ display: 'block', color: 'red' });
                           }
                        }
                     })

                  }

                  if ((unFlag && pwFlag && yzFlag && qrFlag) === true) {
                     $.ajax({
                        url: 'http://10.36.144.236/fanke/src/php/register.php',
                        type: 'POST',
                        dataType: "JSON",
                        data: { un: un, pw: pw },
                        success: function (res) {
                           if (res.code === 0) {
                              alert('注册成功，请登录')
                              location.href = 'http://10.36.144.236/fanke/src/login.html';
                           } else if (res.code === 1) {
                              alert('用户名已存在，请重新输入')
                           }
                        }
                     })
                  } else {
                     $('.inpReg').each(function (index, dom) {
                        if (index === 0) {
                           if (this.value === '') {
                              $('p.errorHint').eq(0).text('用户名不能为空');
                              $('p.errorHint').eq(0).css({ display: 'block', color: 'red' });
                           }
                        } else if (index === 1) {
                           if (this.value === '') {
                              $('p.errorHint').eq(1).text('密码不能为空');
                              $('p.errorHint').eq(1).css({ display: 'block', color: 'red' });
                           }
                        } else if (index === 2) {
                           if (this.value === '') {
                              $('p.errorHint').eq(2).text('确认密码不能为空');
                              $('p.errorHint').eq(2).css({ display: 'block', color: 'red' });
                           }
                        } else if (index === 3) {
                           if (this.value === '') {
                              $('p.errorHint').eq(3).text('密码不能为空');
                              $('p.errorHint').eq(3).css({ display: 'block', color: 'red' });
                           }
                        }
                     })
                     e.preventDefault();
                  }
                  
               })
            }
         },
         //公用功能
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